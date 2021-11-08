import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  return (
    <>
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
         onEditAvatar={handleEditAvatarClick} isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          isAddPlacePopupOpen={isAddPlacePopupOpen} isEditProfilePopupOpen={isEditProfilePopupOpen} />
        <Footer/>
    </>
  );
}

export default App;
