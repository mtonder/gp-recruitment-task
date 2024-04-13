import { useState, useEffect } from 'react';
import { Factorial, FactorialCalculator } from '../lib/definitions';

function useFactorialCalculator(initialValue: number): FactorialCalculator {
    const [value, setValue] = useState<number>(initialValue);
    const [factorial, setFactorial] = useState<Factorial | null>(null);

    useEffect(() => {
        const computationDateStart = new Date().toLocaleString();
        let result: bigint = BigInt(1);
        for (let i: bigint = BigInt(2); i <= value; i++) {
            result *= i;
        }
        setFactorial({
            date: computationDateStart,
            computedValue: result.toString(),
            initialValue: value,
        });
    }, [value]);

    return { value, factorial, setValue };
}

export default useFactorialCalculator;
