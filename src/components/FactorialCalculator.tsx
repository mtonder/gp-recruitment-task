import { useEffect, useState } from 'react';
import useFactorialCalculator from '../hooks/useFactorialCalculator';
import { Factorial } from '../lib/definitions';

function FactorialCalculator() {
    const { value, factorial, setValue } = useFactorialCalculator(5);
    const [computedFactorials, setComputedFactorials] = useState<Factorial[]>([]);
    const [isValid, setIsValid] = useState<boolean>(true);

    useEffect(() => {
        console.log(`factorial changed': ${factorial}`);
        if (factorial) setComputedFactorials((prevItems) => [factorial, ...prevItems]);
    }, [factorial]);

    const handleChange = (factorial: number) => {
        if (factorial < 10000 && factorial >= 0) {
            setValue(factorial);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <div>
            <label htmlFor='factorial-input'>Podaj silnię do obliczenia</label>
            <input
                className='factorial-calculator__input'
                type='number'
                value={value}
                onChange={(e) => handleChange(Number(e.target.value))}
                id='factorial-input'
            />
            {isValid ? (
                <p className='factorial-calculator__computed-result'>
                    Wynik: <span className='bold'>{factorial?.computedValue}</span>
                </p>
            ) : (
                <p className='factorial-calculator__computed-result--limit-exceeded'>
                    Przekroczony limit dla obliczeń. Akceptowalny przedział: 0 - 10 000.
                </p>
            )}
            <div className='factorial-calculator__history'>
                <h2>Historia obliczeń</h2>
                {computedFactorials.map((factorial, index) => {
                    return (
                        <p
                            className='factorial-calculator__history-entry'
                            key={index}
                        >
                            <span title={factorial.computedValue}>
                                Iteracja {computedFactorials.length - index} ({factorial.date}):{' '}
                                {factorial.initialValue}! ={' '}
                                <span className='bold'>{factorial.computedValue}</span>
                            </span>
                        </p>
                    );
                })}
            </div>
        </div>
    );
}

export default FactorialCalculator;
