import PageHeader from '../ui/Header';
import GitFetcher from '../ui/gitfetcher/GitFetcher';

function GitfetcherPage() {
    return (
        <>
            <PageHeader
                title='Git Fetcher'
                subtitle='Wyszukiwarka użytkowników GitHub'
            />
            <section>
                <GitFetcher />
            </section>
        </>
    );
}

export default GitfetcherPage;
