import React from 'react';

export default function CardSearch (props) {
    return (
        <div className="card-search">
            <label>Search the deck for a card by name: </label>
            <input 
                type="search" 
                id="card-search" 
                aria-label="Search through Elderspell cards"
                placeholder="Enter card name ..."
                onChange={(e) => props.retrieveQuery(e.target.value)}
            />
        </div>
    )
}