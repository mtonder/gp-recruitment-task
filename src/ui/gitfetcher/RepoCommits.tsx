import React from 'react';
import { useLazyGetRepositoryCommitsQuery } from '../../redux/services/githubApi';

type RepoCommitsProps = {
    repo: string;
    selectedUser: string;
};

export default function RepoCommits({ repo, selectedUser }: RepoCommitsProps) {
    const [getCommits, { data: commits = [], isLoading, isSuccess }] =
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
                    <div
                        key={commit.sha}
                        className='repo-commits__commit'
                    >
                        <div>
                            <a
                                className='repo-commits__commit-link'
                                href={commit?.html_url}
                                target='_blank'
                                rel='noreferrer'
                            >
                                {commit.commit.message}
                            </a>
                        </div>
                        <div>
                            <span className='repo-commits__commit-author'>
                                <img
                                    src={commit?.author?.avatar_url}
                                    alt='avatar'
                                    className='repo-commits__commit-avatar'
                                />
                                <a
                                    className='repo-commits__commit-link'
                                    href={commit?.author?.html_url}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    {commit?.author?.login}
                                </a>{' '}
                                commited at {new Date(commit.commit.author.date).toLocaleString()}
                            </span>
                        </div>
                    </div>
                ))
            ) : (
                <div className='repo-commits__commit'>Brak commitów</div>
            )}
            {/* {isError && <div>Błąd</div>} */}
        </div>
    );
}
