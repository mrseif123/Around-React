import React from "react";


function Main(){
  return(
     <main id = "main_container" >
          <section className="profile">

            <div className="profile__img-place">
              <img id="avatar" className="profile__avatar" src="./images/profile-avatar.jpg" alt="profile" />
              <div className="profile__edit-overlay" />
            </div>

            <div className="profile__info">
              <div className="profile__details-container">
                <div className="profile__text-box">
                  <h1 className="profile__name">Jacques cousteau</h1>
                  <p className="profile__subtitle">Explorer</p>
                </div>
                <button type="button" aria-label="edit profile" className="profile__edit-btn" id="profile_edit_button">
                </button>
              </div>
              <button type="button" aria-label="add image" className="profile__add-btn" id="profile_add_button">
              </button>
            </div>
          </section>

          <section className="elements">
            <ul className="elements__list">
            </ul>
          </section>

          <div className="popup form-container" id="form_popup">
            <div className="popup__container">
              <form className="form" name="edit_profile_form">
                <button type="button" aria-label="close profile editing form" className="form__close-btn" id="close_button_profile">
                  <img className="form__close-img" src="./images/profile-add-icon.svg" alt="close button" />
                </button>
                <h2 className="form__title">Edit profile</h2>
                <input className="form__field form__field_name" type="text" name="name" id="fullName" placeholder="Full Name" required minLength={2} maxLength={40} />
                <span className="form__field-error fullName-error" />
                <input className="form__field form__field_about" type="text" name="about" id="about" placeholder="About" required minLength={2} maxLength={200} />
                <span className="form__field-error about-error" />
                <button type="submit" aria-label="submit profile changes" className="form__submit-btn" id="form__profile-submit-button">Save</button>
              </form>
            </div>
          </div>

          <div className="popup add-container " id="add_popup">
            <div className="popup__container">
              <form className="form" name="add_place_form">
                <button type="button" aria-label="close place addition form" className="form__close-btn" id="close_button_add">
                  <img className="form__close-img" src="./images/profile-add-icon.svg" alt="close button" />
                </button>
                <h2 className="form__title">New place</h2>
                <input className="form__field form__field_title" type="text" name="name" id="title" placeholder="Title" required minLength={1} maxLength={30} />
                <span className="form__field-error title-error" />
                <input className="form__field form__field_link" type="url" name="link" id="link" placeholder="Image link" required />
                <span className="form__field-error link-error" />
                <button type="submit" aria-label="submit profile changes" className="form__submit-btn" id="form__place-submit-button">Create</button>
              </form>
            </div>
          </div>

          <div className="popup delete-container" id="delete_popup">
            <div className="popup__container">
              <form name="delete" className="form" noValidate>
                <button type="button" aria-label="close profile deletion form" className="form__close-btn" id="close_button_delete">
                  <img className="form__close-img" src="./images/profile-add-icon.svg" alt="close button" />
                </button>
                <h2 className="form__title">Are you sure?</h2>
                <button type="submit" aria-label="submit profile changes" className="form__submit-btn" id="form__delete-submit-button">Yes</button>
              </form>
            </div>
          </div>

          <div className="popup photo-container " id="photo_popup">
            <div className="popup__container-image">
              <button className="popup__img-close-btn" type="button" aria-label="close photo addition form">
                <img className="popup__close-img" src="./images/profile-add-icon.svg" alt="close button" />
              </button>
              <img className="popup__place-image" src="./images/grid-img-1.png" alt="empty" />
              <h2 className="popup__photo-title">Yosemite Valley</h2>
            </div>
          </div>

          <div className="popup avatar-container">
            <div className="popup__container">
              <form name="avatar" className="form" noValidate>
                <button type="button" aria-label="close profile avatar form" className="form__close-btn" id="close_button_avatar">
                  <img className="form__close-img" src="./images/profile-add-icon.svg" alt="close button" />
                </button>
                <h2 className="form__title">Change profile picture</h2>
                <input className="form__field form__field_link" type="url" name="link" id="link2" placeholder="Image link" required />
                <span className="form__field-error link2-error" />
                <button type="submit" aria-label="submit avatar changes" className="form__submit-btn" id="form__avatar-submit-button">Save</button>
              </form>
            </div>
          </div>
          
          <template id="element-template" />
        </main>
  )
}

export default Main