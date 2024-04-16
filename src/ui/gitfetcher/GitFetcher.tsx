import { useEffect } from 'react';
import { useLazyGetUserReposQuery } from '../../redux/services/githubApi';
import { useAppSelector } from '../../lib/hooks';
import UsersSearch from './UsersSearch';
import ReposList from './ReposList';

function GitFetcher() {
    const selectedUser = useAppSelector((state) => state.github.selectedUser);

    const [
        getUserRepos,
        {
            data: repos = [],
            isLoading: isLoadingRepos,
            isSuccess: isSuccessRepos,
            isError: isErrorRepos,
        },
    ] = useLazyGetUserReposQuery();

    useEffect(() => {
        if (selectedUser) getUserRepos(selectedUser);
    }, [selectedUser, getUserRepos]);

    return (
        <div>
            <div>
                <UsersSearch />
            </div>
            <div>
                {isLoadingRepos && <div>Ładowanie</div>}
                {isSuccessRepos && repos.length > 0 && <ReposList repos={repos} />}
                {isSuccessRepos && repos.length == 0 && (
                    <div className='gitfetcher__info--info'>Brak repozytoriów</div>
                )}
                {isErrorRepos && <div className='gitfetcher__info--error'>Błąd</div>}
            </div>
        </div>
    );
}

export default GitFetcher;
