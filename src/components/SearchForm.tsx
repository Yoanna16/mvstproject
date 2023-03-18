import React, { useState, useEffect } from 'react'

function SearchForm() {
    const [ card, setCard ] = useState([])
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    const searchRepo = async (user?: string) => {
        const res = await fetch (`https://api.github.com/users/${user}`);
        const data = await res.json();
        setCard(data);
        console.log(data);
    }

    useEffect (() => {
        searchRepo();
    }, [])

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
