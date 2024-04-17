import PageHeader from '../ui/Header';
import Card from '../ui/dashboard/Card';
import CardWrapper from '../ui/dashboard/CardWrapper';

function DashboardPage() {
    return (
        <>
            <PageHeader
                title='Dashboard'
                subtitle='Statystyki projektu'
            />
            <section>
                <div>
                    <CardWrapper />
                </div>
                <div>
                    <Card
                        title='Wykres linii kodu'
                        type='chart'
                    />
                </div>
            </section>
        </>
    );
}

export default DashboardPage;
