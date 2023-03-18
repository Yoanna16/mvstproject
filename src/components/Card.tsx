import React from 'react'
import { Link } from 'react-router-dom';

interface ICard {
    key: string;
    avatar_url: string;
    login: string;
    name: string;
    created_at: string;
    html_url: string;
    stargazers_count: string;
    watchers_count: string;
    language: string;
    open_issues: string;
}

function Card(props: ICard) {
    const time = new Date(props.created_at).toLocaleString();
    return (
        <>
        <Link to={ props.html_url} target="_blank" className='card-btn'>
            <article className="card">
                <div className="title-card">
                    <img
                        src={props.avatar_url}
                        alt={props.login}
                        className="img"
                    />
                    <div>
                        <h2 className="name">{props.login}</h2>
                        <p className='project-name'>{props.name}</p>
                    </div>
                </div>

                <div className='info-2-div'>
                    <p className="info-2">
                        This repository was created on{" "}
                        {time} 
                    </p>
                </div>

                <div className="links">
                        <p>{props.stargazers_count.toLocaleString()} stars</p>
                        <p>{props.watchers_count.toLocaleString()} Watchers</p>
                        <p>{props.open_issues} issues</p>
                </div>

                <div className="card-footer">
                    {
                        props.language &&
                        <p className="language">
                        {props.language}
                    </p>
                    }
                </div>
            </article>
            </Link>
        </>
    )
}

export default Card
