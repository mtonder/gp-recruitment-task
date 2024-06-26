import FactorialCalculator from '../ui/factorial/FactorialCalculator';
import PageHeader from '../ui/Header';

function FactorialPage() {
    return (
        <>
            <PageHeader
                title='Factorial'
                subtitle='Obliczanie silni wraz z historią obliczeń'
            />
            <section>
                <FactorialCalculator />
            </section>
        </>
    );
}

export default FactorialPage;
