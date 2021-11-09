import React from 'react';
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/api';
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleDeleteClick() {
    setIsDeletePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }


  function closeAllPopups() {
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsDeletePopupOpen(false);
    setSelectedCard(null);
  }

  const [currentUser, setCurrentUser] = React.useState({});
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userProfile) => {
        setCurrentUser(userProfile);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateUser(data) {
    api
      .updateProfile(data)
      .then((res) => {
        setCurrentUser(res);
        setIsEditProfilePopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(data) {
    // console.log(data, data.link)
    api
      .updateAvatar(data.avatar)
      .then(() => {
        setCurrentUser(data.avatar);
        setIsEditAvatarPopupOpen(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick} onDeleteClick={handleDeleteClick} onCardClick={handleCardClick} />

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

      <PopupWithForm name="add" title="New Place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input className="form__field form__field_title" type="text" name="name" id="title" placeholder="Title" required minLength={1} maxLength={30} />
        <span className="form__field-error title-error" />
        <input className="form__field form__field_link" type="url" name="link" id="link" placeholder="Image link" required />
        <span className="form__field-error link-error" />
      </PopupWithForm>

      <PopupWithForm name="delete" title="Are you sure?" isOpen={isDeletePopupOpen} onClose={closeAllPopups} />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

      <ImagePopup onClose={closeAllPopups} card={selectedCard} handleCardClick={handleCardClick} />

      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
