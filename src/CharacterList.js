// src/CharacterList.js
import React from 'react';
import './CharacterList.css';

const CharacterList = ({ characters, onCharacterClick }) =>
{
    return (
        <div className="character-list">
            {characters.map((character) => (
                <div
                    key={character.id}
                    className="character-card"
                    onClick={() => onCharacterClick(character)}
                >
                    <img src={character.imageUrl} alt={character.name} />
                    <h3>{character.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default CharacterList;