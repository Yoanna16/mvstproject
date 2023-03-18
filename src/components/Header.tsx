import React from 'react'
import SearchForm from './SearchForm'

function Header() {

    return (
        <>
            <header className='header'>
                <div>
                    <h1>GitHub Repo&User Search</h1>
                </div>
                <SearchForm />
            </header>
        </>
    )
}

export default Header
