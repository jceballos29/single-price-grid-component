import React from 'react'
import "../styles/Card.css"

const whyUsList = [
'Tutorials by industry experts',
'Peer & expert code review',
'Coding exercises',
'Access to our GitHub repos',
'Community forum',
'Flashcard decks',
'New videos every week',
]

const Card = () => {
    return (
        <div className="Card">
            <div className="card__top">
                <h1>Join our community</h1>
                <h2>30-day, hassle-free money back guarantee</h2>
                <p>Gain access to our full library of tutorial along with expert code reviews.</p>
                <p>Perfect for any developers who are serious about honing their skills.</p>
            </div>
            <div className="card__left">
                <h2>Monthly Subscription</h2>
                <h3>$29 <span>per month</span></h3>
                <p>Full access for less than $1 a day</p>
                <button>Sign Up</button>
            </div>
            <div className="card__right">
                <h2>Why Us</h2>
                <ul>
                    {
                        whyUsList.map( (e, i) => <li key={i}>{e}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Card