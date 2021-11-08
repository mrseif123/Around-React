import React from 'react';
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


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

  function closeAllPopups(){
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsDeletePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
         onEditAvatar={handleEditAvatarClick} onDeleteClick={handleDeleteClick} onCardClick={handleCardClick}/>

      <PopupWithForm name="form" title="Edit Profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
        <input className="form__field form__field_name" type="text" name="name" id="fullName" placeholder="Full Name" required minLength={2} maxLength={40} />
        <span className="form__field-error fullName-error" />
        <input className="form__field form__field_about" type="text" name="about" id="about" placeholder="About" required minLength={2} maxLength={200} />
        <span className="form__field-error about-error" />
      </PopupWithForm>

      <PopupWithForm name="add" title="New Place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input className="form__field form__field_title" type="text" name="name" id="title" placeholder="Title" required minLength={1} maxLength={30} />
        <span className="form__field-error title-error" />
        <input className="form__field form__field_link" type="url" name="link" id="link" placeholder="Image link" required />
        <span className="form__field-error link-error" />
      </PopupWithForm>

      <PopupWithForm name="delete" title="Are you sure?" isOpen={isDeletePopupOpen} onClose={closeAllPopups}/>

      <PopupWithForm name="avatar" title="Change profile picture" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input className="form__field form__field_link" type="url" name="link" id="link2" placeholder="Image link" required />
        <span className="form__field-error link2-error" />
      </PopupWithForm>

      <ImagePopup onClose={closeAllPopups} card={selectedCard} handleCardClick={handleCardClick}/>

      <Footer/>
    </>
  );
}

export default App;
