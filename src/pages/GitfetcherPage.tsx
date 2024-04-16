import PageHeader from '../ui/Header';
import GitFetcher from '../ui/gitfetcher/GitFetcher';

function GitfetcherPage() {
    return (
        <>
            <PageHeader
                title='Git Fetcher'
                subtitle='Wyszukiwarka użytkowników GitHub. Dla wybranego użytkownika pobiera listę 5 ostatnio aktualizowanych repozytoriów z commitami.'
            />
            <section>
                <GitFetcher />
            </section>
        </>
    );
}

export default GitfetcherPage;
