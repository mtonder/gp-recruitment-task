export type Factorial = {
    date: string;
    computedValue: string;
    initialValue: number | null;
};

export type FactorialCalculator = {
    value: number;
    factorial: Factorial | null;
    setValue: (value: number) => void;
};
