/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLazySearchUsersQuery } from '../../redux/services/githubApi';
import { Fragment, useEffect, useState } from 'react';

import { useDebouncedCallback } from 'use-debounce';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { setSelectedUser } from '../../redux/slices/githubSlice';

//used for autocomplete input
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function UsersSearch() {
    const [searchUser, { data: users = [], isLoading, isSuccess, isError }] =
        useLazySearchUsersQuery();

    const dispatch = useAppDispatch();
    const selectedUser = useAppSelector((state) => state.github.selectedUser);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        if (selectedUser) setValue(selectedUser);
    }, [selectedUser]);

    const handleInputChange = (value: string) => {
        setValue(value);
        debouncedSearchUser(value);
    };

    const debouncedSearchUser = useDebouncedCallback((value) => {
        if (value) {
            searchUser({ q: value });
        } else {
            setOpen(false);
        }
    }, 300);

    const handleChange = (value: any) => {
        if (value?.label) {
            dispatch(setSelectedUser(value.label));
        }
    };

    return (
        <div className='users-search'>
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
                onFocus={() => {
                    setOpen(true);
                }}
                onInputChange={(_event, value, _reason) => handleInputChange(value)}
                options={users.map((user) => ({ id: user.id, label: user.login }))}
                loading={isLoading}
                filterOptions={(x) => x}
                loadingText='Ładuję dane...'
                inputValue={value}
                renderInput={(params) => (
                    <TextField
                        sx={{
                            '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
                                border: '1px solid #2979ff',
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
            <div className='users-search__alert'>
                {isSuccess && users.length == 0 ? (
                    <div className='users-search__alert--info'>
                        Nie znaleziono użytkownika o podanym loginie
                    </div>
                ) : null}
                {isError && (
                    <div className='users-search__alert--error'>
                        Wystąpił błąd podczas wyszukiwania użytkownika
                    </div>
                )}
            </div>
        </div>
    );
}

export default UsersSearch;
