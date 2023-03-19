import React, { SetStateAction, Dispatch, ChangeEvent } from 'react'

interface ISearchForm {
    searchInput: string;
    setSearchInput: Dispatch<SetStateAction<string>>;
    setFiltered: Dispatch<SetStateAction<never[]>>;
    repos: any;
}

function SearchForm({
    searchInput,
    setSearchInput,
    setFiltered,
    repos }: ISearchForm) {
    //Prevent page reload when submitting the form
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    //Search repo
    const searchRepo = (searchValue: string) => {
        setSearchInput(searchValue);
        console.log(searchInput);
        if (searchInput) {
            const filteredRepos = repos.filter((repo:any) =>
                Object.values(repo)
                    .join("")
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()))
            setFiltered(filteredRepos)
            console.log(filteredRepos)
        } else {
            setFiltered(repos)
        }
    }

    return (

        <form onSubmit={handleSubmit} className='form'>
            <input
                type='search'
                name='search'
                id='search'
                placeholder='Search for user'
                autoComplete='off'
                onChange={(e) => searchRepo(e.target.value)}
            />
        </form>
    )
}

export default SearchForm
