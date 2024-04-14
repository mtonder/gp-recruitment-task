import { Factorial } from './definitions';

function caluclateFactorial(factorial: number | undefined): Factorial {
    if (factorial === undefined) return { date: '', computedValue: '', initialValue: null };
    const computationDateStart = new Date().toLocaleString();
    let result: bigint = BigInt(1);
    for (let i: bigint = BigInt(2); i <= factorial; i++) {
        result *= i;
    }
    return {
        date: computationDateStart,
        computedValue: result.toString(),
        initialValue: factorial,
    };
}

export default caluclateFactorial;
