import React from "react";
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup(props){
  const avatarRefrence = React.useRef("")
  
  function handleSubmit(e){
    e.preventDefault()
    console.log(avatarRefrence)
    props.onUpdateAvatar({
      avatar: avatarRefrence.current.value,
    })
  }
  return (
      <PopupWithForm name="avatar" title="Change profile picture" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
        <input className="form__field form__field_link" type="url" name="link" id="link2" placeholder="Image link" required ref={avatarRefrence}/>
        <span className="form__field-error link2-error" />
      </PopupWithForm>
  )
}

export default EditAvatarPopup;