import PageHeader from '../ui/Header';
import CardWrapper from '../ui/dashboard/CardWrapper';

function DashboardPage() {
    return (
        <>
            <PageHeader
                title='Dashboard'
                subtitle='Statystyki projektu'
            />
            <section>
                <CardWrapper />
            </section>
        </>
    );
}

export default DashboardPage;
