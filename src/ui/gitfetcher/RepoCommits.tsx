/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useLazyGetRepositoryCommitsQuery } from '../../redux/services/githubApi';

type RepoCommitsProps = {
    repo: string;
    selectedUser: string;
};

export default function RepoCommits({ repo, selectedUser }: RepoCommitsProps) {
    const [getCommits, { data: commits = [], isLoading, isSuccess, isError, error }] =
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
        </div>
    );
}

// if (error) {
//     if ('status' in error) {
//         const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
//         return (
//             <div>
//                 <div>Błąd:</div>
//                 <div>{errMsg}</div>
//             </div>
//         );
//     } else {
//         return <div>{error.message}</div>;
//     }
// }
