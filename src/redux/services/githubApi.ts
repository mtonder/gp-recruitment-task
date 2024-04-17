import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Repo, User, Commit } from '../../lib/definitions';

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/',
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (username: string) => `users/${username}`,
        }),
        searchUsers: builder.query<User[], { q: string }>({
            query: (arg) => {
                const { q } = arg;
                return {
                    url: 'search/users',
                    params: { q },
                };
            },
            transformResponse: (response: { items: User[] }) => response.items,
        }),
        getUserRepos: builder.query<Repo[], string>({
            query: (username: string) => {
                return {
                    url: `users/${username}/repos`,
                    params: { sort: 'updated', order: 'desc', per_page: 5 },
                };
            },
        }),
        getRepositoryCommits: builder.query<Commit[], { owner: string; repo: string }>({
            query: (arg) => {
                const { owner, repo } = arg;
                return {
                    url: `repos/${owner}/${repo}/commits`,
                    params: { per_page: 5 },
                };
            },
        }),
    }),
});

export const {
    useLazyGetUsersQuery,
    useLazySearchUsersQuery,
    useGetUserReposQuery,
    useLazyGetUserReposQuery,
    useGetRepositoryCommitsQuery,
    useLazyGetRepositoryCommitsQuery,
} = githubApi;
