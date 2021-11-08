import React from "react";

function Card(props) {
  return (
    <li className="elements__item">
      <img className="elements__img" src={props.card.link} alt={props.card.name} onClick={() => { props.onCardClick(props.card) }} />
      <div className="elements__description" >
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container" >
          <button type="button" aria-label="like image" className="elements__like-btn"></button>
          <p className="elements__likes">{props.card.likes.length}</p>
        </div>
      </div>
      <button type="button" aria-label="delete icon" className="elements__delete-btn" onClick={() => props.onDeleteClick()}></button>
    </li>
  );
}

export default Card;