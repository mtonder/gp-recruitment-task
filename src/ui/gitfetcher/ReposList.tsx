import { useEffect } from 'react';
import { Repo } from '../../lib/definitions';
import { useAppSelector } from '../../lib/hooks';
import RepoCommits from './RepoCommits';

type ReposListProps = {
    repos: Repo[];
};

function ReposList({ repos }: ReposListProps) {
    const selectedUser = useAppSelector((state) => state.github.selectedUser);

    useEffect(() => {
        console.log(selectedUser);
    }, [selectedUser]);

    return (
        <div>
            <div>
                {repos.map((repo: Repo) => {
                    return (
                        <div key={repo.id}>
                            <div>{repo.name}</div>
                            <div>
                                <RepoCommits
                                    repo={repo.name}
                                    selectedUser={selectedUser || ''}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ReposList;
