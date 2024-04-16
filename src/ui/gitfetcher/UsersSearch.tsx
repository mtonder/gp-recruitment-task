/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLazySearchUsersQuery } from '../../redux/services/githubApi';
import { Fragment, useState } from 'react';

import { useDebouncedCallback } from 'use-debounce';
import { useAppDispatch } from '../../lib/hooks';
import { setSelectedUser } from '../../redux/slices/githubSlice';

//used for autocomplete input
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function UsersSearch() {
    const [searchUser, { data: users = [], isLoading, isSuccess, isError }] =
        useLazySearchUsersQuery();

    const [open, setOpen] = useState(false);

    const debouncedSearchUser = useDebouncedCallback((value) => {
        if (value) {
            searchUser({ q: value });
        } else {
            setOpen(false);
        }
    }, 300);

    const dispatch = useAppDispatch();

    const handleChange = (value: any) => {
        if (value?.label) {
            dispatch(setSelectedUser(value.label));
        }
    };

    return (
        <>
            <label>Wyszukaj użytkownika</label>
            <Autocomplete
                freeSolo
                sx={{
                    backgroundColor: 'white',
                    borderColor: '#e0e0e0',
                    fontFamily: 'Geist Variable',
                }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                onChange={(_event, value) => {
                    handleChange(value);
                }}
                onInputChange={(_event, value, _reason) => debouncedSearchUser(value)}
                options={users.map((user) => ({ id: user.id, label: user.login }))}
                loading={isLoading}
                filterOptions={(x) => x}
                loadingText='Ładuję dane...'
                renderInput={(params) => (
                    <TextField
                        sx={{
                            '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
                                border: '2px solid #2979ff',
                            },
                        }}
                        {...params}
                        size='small'
                        InputProps={{
                            ...params.InputProps,
                            style: { fontFamily: 'Geist Variable' },
                            startAdornment: (
                                <Fragment>
                                    <div className='start-adorment'>
                                        <MagnifyingGlassIcon />
                                    </div>
                                </Fragment>
                            ),
                            endAdornment: (
                                <Fragment>
                                    {isLoading ? (
                                        <CircularProgress
                                            color='inherit'
                                            size={16}
                                        />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                </Fragment>
                            ),
                        }}
                    />
                )}
            />
            {isSuccess && users.length == 0 ? (
                <div>Nie znaleziono użytkownika o podanym loginie.</div>
            ) : null}
            {isError && <div>Wystąpił błąd podczas wyszukiwania użytkownika.</div>}
        </>
    );
}

export default UsersSearch;
