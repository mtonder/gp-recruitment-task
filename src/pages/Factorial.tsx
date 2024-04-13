import FactorialCalculator from '../components/FactorialCalculator';
import PageHeader from '../components/Header';

function Factorial() {
    return (
        <>
            <PageHeader
                title='Factorial'
                subtitle='Obliczanie silni wraz z historią obliczeń.'
            />
            <section>
                <div>
                    <FactorialCalculator />
                </div>
            </section>
        </>
    );
}

export default Factorial;
