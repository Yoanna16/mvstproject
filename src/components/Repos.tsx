import React, { useEffect, useState } from 'react'
import Card from './Card';
import SearchForm from './SearchForm';

function Repos() {
    const [repos, setRepos] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    // Change this to any username whose repositories you want to get
    const [user] = useState('yoanna16');

    useEffect(() => {
        const fetchRepos = async () => {
            const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=6&sort=updated`);
            const data = await res.json();
            setRepos(data);
            console.log(data);
        }
        fetchRepos();
    }, [user])


    return (
        <>
            <div className='repo-page'>
                <div className="view">
                    <h3 className="title">
                        Viewing {user}'s repositories
                    </h3>
                    <SearchForm 
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                        setFiltered={setFiltered}
                        repos={repos}
                    />
                </div>

                {searchInput.length > 1 ?
                    (<section className='grid'>
                        {filtered.map((repo) => {
                            const { name, owner, id, created_at, html_url, stargazers_count, watchers_count, language, open_issues } = repo;
                            const { avatar_url, login } = owner
                            return (
                                <Card
                                    key={id}
                                    avatar_url={avatar_url}
                                    login={login}
                                    name={name}
                                    created_at={created_at}
                                    html_url={html_url}
                                    stargazers_count={stargazers_count}
                                    watchers_count={watchers_count}
                                    language={language}
                                    open_issues={open_issues} />
                            )
                        })}
                    </section>

                    ) : (
                        <section className='grid'>
                            {repos.map((repo) => {
                                const { name, owner, id, created_at, html_url, stargazers_count, watchers_count, language, open_issues } = repo;
                                const { avatar_url, login } = owner
                                return (
                                    <Card
                                        key={id}
                                        avatar_url={avatar_url}
                                        login={login}
                                        name={name}
                                        created_at={created_at}
                                        html_url={html_url}
                                        stargazers_count={stargazers_count}
                                        watchers_count={watchers_count}
                                        language={language}
                                        open_issues={open_issues} />
                                )
                            })}
                        </section>

                    )}

            </div>
        </>
    )
}

export default Repos
