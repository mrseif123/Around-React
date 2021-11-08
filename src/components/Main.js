import React from "react";
import PopupWithForm from "./PopupWithForm"
import closingButtonImage from "../images/profile-add-icon.svg"
import tmpAvatarImage from "../images/profile-avatar.jpg"

 function handleEditAvatarClick() {
   document
     .querySelector('.popup_type_avatar')
     .classList.add('popup_visible');
 }

 function handleEditProfileClick() {
   document
     .querySelector('.popup_type_form')
     .classList.add("popup_visible");
 }

 function handleAddPlaceClick() {
   document.querySelector('.popup_type_add')
     .classList.add("popup_visible");
 }

function Main(props){
  return(
     <main id = "main_container" >
          <section className="profile">

            <div className="profile__img-place">
              <img id="avatar" className="profile__avatar" src={tmpAvatarImage} alt="profile" />
              <div className="profile__edit-overlay" onClick={handleEditAvatarClick} />
            </div>

            <div className="profile__info">
              <div className="profile__details-container">
                <div className="profile__text-box">
                  <h1 className="profile__name">Jacques cousteau</h1>
                  <p className="profile__subtitle">Explorer</p>
                </div>
                <button type="button" aria-label="edit profile" className="profile__edit-btn" onClick={handleEditProfileClick} id="profile_edit_button">
                </button>
              </div>
              <button type="button" aria-label="add image" className="profile__add-btn" id="profile_add_button" onClick={handleAddPlaceClick}>
              </button>
            </div>
          </section>

          <section className="elements">
            <ul className="elements__list">
            </ul>
          </section>


          <PopupWithForm name="form" title = "Edit Profile" >
            <button type="button" aria-label="close profile editing form" className="form__close-btn" id="close_button_profile">
              <img className="form__close-img" src={closingButtonImage} alt="close button" />
            </button>
            <input className="form__field form__field_name" type="text" name="name" id="fullName" placeholder="Full Name" required minLength={2} maxLength={40} />
            <span className="form__field-error fullName-error" />
            <input className="form__field form__field_about" type="text" name="about" id="about" placeholder="About" required minLength={2} maxLength={200} />
            <span className="form__field-error about-error" />
            <button type="submit" aria-label="submit profile changes" className="form__submit-btn" id="form__profile-submit-button">Save</button>
          </PopupWithForm>

          <PopupWithForm name = "add" title="New Place">
              <button type="button" aria-label="close place addition form" className="form__close-btn" id="close_button_add">
                <img className="form__close-img"src={closingButtonImage} alt="close button" />
              </button>
              <input className="form__field form__field_title" type="text" name="name" id="title" placeholder="Title" required minLength={1} maxLength={30} />
              <span className="form__field-error title-error" />
              <input className="form__field form__field_link" type="url" name="link" id="link" placeholder="Image link" required />
              <span className="form__field-error link-error" />
              <button type="submit" aria-label="submit profile changes" className="form__submit-btn" id="form__profile-submit-button">Save</button>
          </PopupWithForm>


          <PopupWithForm name = "delete" title="Are you sure?">
              <button type="button" aria-label="close profile deletion form" className="form__close-btn" id="close_button_delete">
                <img className="form__close-img" src={closingButtonImage} alt="close button" />
              </button>
              <h2 className="form__title">Are you sure?</h2>
              <button type="submit" aria-label="submit profile changes" className="form__submit-btn" id="form__delete-submit-button">Yes</button>
          </PopupWithForm>


          <PopupWithForm name = "avatar" title = "Change profile picture" >
                <button type="button" aria-label="close profile avatar form" className="form__close-btn" id="close_button_avatar">
                  <img className="form__close-img" src={closingButtonImage} alt="close button" />
                </button>
                <input className="form__field form__field_link" type="url" name="link" id="link2" placeholder="Image link" required />
                <span className="form__field-error link2-error" />
                <button type="submit" aria-label="submit avatar changes" className="form__submit-btn" id="form__avatar-submit-button">Save</button>
          </PopupWithForm>


          <div className="popup photo-container" id="photo_popup">
            <div className="popup__container-image">
              <button className="popup__img-close-btn" type="button" aria-label="close photo addition form">
                <img className="popup__close-img" src={closingButtonImage} alt="close button" />
              </button>
              <img className="popup__place-image" src="../src/images/grid-img-1.png" alt="empty" />
              <h2 className="popup__photo-title">Yosemite Valley</h2>
            </div>
          </div>

          
          <template id="element-template" />
        </main>
  )
}

export default Main