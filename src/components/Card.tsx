import React from 'react'
import { Link } from 'react-router-dom';

export interface ICard {
    key: string;
    avatar_url: string | 'https://media.istockphoto.com/id/1334433318/de/foto/big-sister-warning-little-brother-1988-im-garten.jpg?b=1&s=170667a&w=0&k=20&c=XTvWPLNlirfdkqVcqzVWgnjY9luYTQmkQ_AkidpI8FQ=';
    login: string;
    name: string;
    created_at: string;
    html_url: string;
    stargazers_count: string;
    watchers_count: string;
    language: string;
    open_issues: string;
}

function Card({key,
    avatar_url,
    login,
    name,
    created_at,
    html_url,
    stargazers_count,
    watchers_count,
    language,
    open_issues}: ICard) {
    const time = new Date(created_at).toLocaleString();
    return (
        <>
        <Link to={ html_url} target="_blank" className='card-btn'>
            <article className="card">
                <div className="title-card">
                    <img
                        src={avatar_url}
                        alt={login}
                        className="img"
                    />
                    <div>
                        <h2 className="name">{login}</h2>
                        <p className='project-name'>{name}</p>
                    </div>
                </div>

                <div className='info-2-div'>
                    <p className="info-2">
                        This repository was created on{" "}
                        {time} 
                    </p>
                </div>

                <div className="links">
                        <p>{stargazers_count.toLocaleString()} stars</p>
                        <p>{watchers_count.toLocaleString()} Watchers</p>
                        <p>{open_issues} issues</p>
                </div>

                <div className="card-footer">
                    {
                        language &&
                        <p className="language">
                        {language}
                    </p>
                    }
                </div>
            </article>
            </Link>
        </>
    )
}

export default Card
