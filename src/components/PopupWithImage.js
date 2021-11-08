import React from "react";

function PopupWithImage(props) {
  return (
    <>
      <section>
        <div className="popup photo-container" id="photo_popup">
          <div className="popup__container-image">
            <button className="popup__img-close-btn" type="button" aria-label="close photo addition form" onClick={props.onClose}>
              <img className="popup__close-img" src={"../images/profile-add-icon.svg"} alt="close button" />
            </button>
            <img className="popup__place-image" src="#" alt="" />
            <h2 className="popup__photo-title">Yosemite Valley</h2>
          </div>
        </div>
      </section>
  </>
  )
}

export default PopupWithImage;