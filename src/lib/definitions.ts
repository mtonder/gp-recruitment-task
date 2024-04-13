export type Factorial = {
    date: string;
    computedValue: string;
    initialValue: number;
};

export type FactorialCalculator = {
    value: number;
    factorial: Factorial | null;
    setValue: (value: number) => void;
};
