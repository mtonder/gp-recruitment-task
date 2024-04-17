import { Repo } from '../../lib/definitions';
import { useAppSelector } from '../../lib/hooks';
import RepoCommits from './RepoCommits';

type ReposListProps = {
    repos: Repo[];
};

function ReposList({ repos }: ReposListProps) {
    const selectedUser = useAppSelector((state) => state.github.selectedUser);

    return (
        <div className='repos-list'>
            {repos.map((repo: Repo) => {
                return (
                    <div
                        key={repo.id}
                        className='repos-list__repo'
                    >
                        <div>
                            <a
                                href={repo.owner.html_url}
                                target='_blank'
                                rel='noreferrer'
                                className='repos-list__title'
                            >
                                {repo.owner.login}
                            </a>
                            {<span className='larger'>/</span>}
                            <a
                                href={repo.html_url}
                                target='_blank'
                                rel='noreferrer'
                                className='repos-list__title'
                            >
                                {repo.name}
                            </a>
                            <div className='smaller'>
                                updated at {new Date(repo.updated_at).toLocaleString()}
                            </div>
                        </div>
                        <div className='repos-list__commits'>
                            <RepoCommits
                                repo={repo.name}
                                selectedUser={selectedUser || ''}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ReposList;
