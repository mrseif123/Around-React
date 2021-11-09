import React from "react";

import api from "../utils/api";
import Card from "./Card";
import {
  CurrentUserContext
} from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getGroupCards()
      .then((data) => {
        setCards((cards) => [...cards, ...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main id="main_container" >

      <section className="profile">
        <div className="profile__img-place">
          <img id="avatar" className="profile__avatar" src={currentUser.avatar} alt="profile" />
          <div className="profile__edit-overlay" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__details-container">
            <div className="profile__text-box">
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button type="button" aria-label="edit profile" className="profile__edit-btn" onClick={props.onEditProfile} id="profile_edit_button">
            </button>
          </div>
          <button type="button" aria-label="add image" className="profile__add-btn" id="profile_add_button" onClick={props.onAddPlace}>
          </button>
        </div>
      </section>

      <section className="elements" >
        <ul className="elements__list" >
          {cards.map((card) => (
            <Card key={card._id}
              card={card}
              onCardClick={props.onCardClick} 
              onDeleteClick={props.onDeleteClick}
              />
          ))}
        </ul>
      </section>

    </main>
  )
}

export default Main