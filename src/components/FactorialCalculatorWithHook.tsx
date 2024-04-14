import { useEffect, useState } from 'react';
import useFactorialCalculator from '../hooks/useFactorialCalculator';
import { Factorial } from '../lib/definitions';

function FactorialCalculatorWithHook() {
    const { value, factorial, setValue } = useFactorialCalculator(5);
    const [computedFactorials, setComputedFactorials] = useState<Factorial[]>([]);
    const [isValid, setIsValid] = useState<boolean>(true);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    useEffect(() => {
        if (factorial) setComputedFactorials((prevItems) => [factorial, ...prevItems]);
    }, [factorial]);

    const handleChange = (value: string) => {
        const factorial = Number(value);

        if (isNaN(factorial)) {
            return;
        }

        if (value === '') {
            setIsEmpty(true);
            return;
        } else {
            setTimeout(() => {
                setIsEmpty(false);
            }, 0);
        }

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
                type='text'
                inputMode='numeric'
                value={isEmpty ? '' : value}
                onChange={(e) => handleChange(e.target.value)}
                id='factorial-input'
                pattern='[0-9]*'
            />
            {isValid ? (
                <p className='factorial-calculator__computed-result'>
                    Wynik: <span className='bold'>{isEmpty ? '' : factorial?.computedValue}</span>
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

export default FactorialCalculatorWithHook;
