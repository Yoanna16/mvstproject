import React, { useEffect, useState } from 'react'

function Repos() {
    const [items, setItems] = useState([]);
    // Change this to any username whose repositories you want to get
    const [user] = useState('yoanna16');

    useEffect(() => {
        const fetchRepos = async () => {
            const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=6&sort=updated`);
            const data = await res.json();
            setItems(data);
            console.log(data);
        }
        fetchRepos();
    }, [user])
    return (
        <>
        <div>
        <div className="view">
        <h1 className="title">
          Viewing {user}'s repositories
        </h1>
        </div>
        <section className='grid'>
            {items.map((repo) => {
                const { name, owner, git_url, id,  } = repo;
                const { avatar_url, login } = owner
                return (
                    <article className='card'>
                        <div className="profilePic">
                            <img src={avatar_url} alt="" />
                        </div>
                        <p>{name}</p>
                        <h1>{login}</h1>
                    </article>
                )
            })}

        </section>

        
        </div>
        </>
    )
}

export default Repos
