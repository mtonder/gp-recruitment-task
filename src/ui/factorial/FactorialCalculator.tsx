import { useEffect, useState } from 'react';
import { Factorial } from '../../lib/definitions';
import caluclateFactorial from '../../lib/factorial';

function FactorialCalculator() {
    const [value, setValue] = useState<number>();
    const [factorial, setFactorial] = useState<Factorial>();
    const [computedFactorials, setComputedFactorials] = useState<Factorial[]>([]);
    const [isValid, setIsValid] = useState<boolean>(true);
    const [isEmpty, setIsEmpty] = useState<boolean>(true);

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

        setValue(factorial);

        if (factorial <= 10000 && factorial >= 0) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handleComputation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setFactorial(caluclateFactorial(value));
    };

    return (
        <div>
            <form className='factorial-calculator__form'>
                <div className='factorial-calculator__input-container'>
                    <label htmlFor='factorial-input'>Podaj silnię do obliczenia</label>
                    <input
                        autoFocus
                        className='factorial-calculator__input'
                        type='text'
                        inputMode='numeric'
                        value={isEmpty ? '' : value}
                        onChange={(e) => handleChange(e.target.value)}
                        id='factorial-input'
                        pattern='[0-9]*'
                    />
                </div>
                <div className='factorial-calculator__button-container'>
                    <button
                        className='factorial-calculator__button'
                        disabled={!isValid || isEmpty}
                        onClick={(e) => handleComputation(e)}
                        type='submit'
                    >
                        Oblicz
                    </button>
                </div>
            </form>

            {isValid ? (
                <p className='factorial-calculator__computed-result'>
                    Wynik: <span className='bold'>{factorial?.computedValue || '-'}</span>
                </p>
            ) : (
                <p className='factorial-calculator__computed-result--limit-exceeded'>
                    Akceptowalny przedział: 0 - 10 000.
                </p>
            )}
            <div className='factorial-calculator__history'>
                {computedFactorials.length > 0 && <h2>Historia obliczeń</h2>}
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
