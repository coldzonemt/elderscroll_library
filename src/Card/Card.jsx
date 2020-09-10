import React from 'react';
import './Card.css'

export default function Card (props) {
    const { name, text, set, rarity, imageUrl } = props.children;
    return (
        <div className="elderscroll-card">
            <img src={imageUrl} alt={name} className="card-image"/>
            <ul>
                <li><strong>Name:</strong> {name ? name : "No name provided"}</li>
                <li><strong>Text:</strong> {text ? text : "No text provided"}</li>
                <li><strong>Set Name:</strong> {set.name ? set.name : "No set provided"}</li>
                <li><strong>Rarity:</strong> {rarity ? rarity : "No rarity provided"}</li>
            </ul>
        </div>
    )
}