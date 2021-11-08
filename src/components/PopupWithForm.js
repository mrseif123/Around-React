import React from "react";

function PopupWithForm(props){
  return (
    <section className={`popup popup_type_${props.name}`}>
    <div div className = "popup__container" >
      <form className = "form" name={`form__${props.name}`} action="#" noValidate>
        <button type="button" aria-label="close form" className="form__close-btn"
            id="close_button_profile"/>
        <h2 className="form__title">{props.title}</h2>
        {props.children}
      </form>
    </div>
    </section>
  )
}

export default PopupWithForm;