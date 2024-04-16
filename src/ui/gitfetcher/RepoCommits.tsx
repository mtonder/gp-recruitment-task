import React from 'react';
import { useLazyGetRepositoryCommitsQuery } from '../../redux/services/githubApi';

type RepoCommitsProps = {
    repo: string;
    selectedUser: string;
};

export default function RepoCommits({ repo, selectedUser }: RepoCommitsProps) {
    const [getCommits, { data: commits = [], isLoading, isSuccess, isError }] =
        useLazyGetRepositoryCommitsQuery();

    const user = React.useRef(selectedUser);

    React.useEffect(() => {
        if (repo) getCommits({ owner: user.current, repo });
    }, [repo, getCommits]);

    if (isLoading) return <div>Ładuję...</div>;

    return (
        <div>
            {isSuccess && commits.length > 0 ? (
                commits.map((commit) => (
                    <div key={commit.sha}>
                        <a
                            href={commit.html_url}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {commit.commit.message}
                        </a>
                    </div>
                ))
            ) : (
                <div>Brak commitów</div>
            )}
            {isError && <div>Błąd</div>}
        </div>
    );
}
