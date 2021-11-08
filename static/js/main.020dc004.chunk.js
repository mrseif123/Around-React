(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(9),c=a.n(s),i=(a(16),a(3)),o=a.p+"static/media/header-vector.4e8e0a1d.svg",l=a(0);var u=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{className:"header__vector",src:o,alt:"around the US icon"})})},d=a(7);var p=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_visible":""),children:Object(l.jsx)("div",{className:"popup__container",children:Object(l.jsxs)("form",{className:"form",name:"form__".concat(e.name),action:"#",noValidate:!0,children:[Object(l.jsx)("button",{type:"button","aria-label":"close form",className:"form__close-btn",id:"close_button_profile"}),Object(l.jsx)("h2",{className:"form__title",children:e.title}),e.children]})})})})},b=a.p+"static/media/profile-add-icon.d86bb2ed.svg";var m=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"popup popup_type_image"+(e.card?" popup_visible":""),children:Object(l.jsxs)("div",{className:"popup__container-image",id:"photo_popup",children:[Object(l.jsx)("button",{className:"popup__img-close-btn",type:"button","aria-label":"close photo addition form",onClick:e.onClose,children:Object(l.jsx)("img",{className:"popup__close-img",src:b,alt:"close button"})}),Object(l.jsx)("img",{className:"popup__place-image",src:e.card?e.card.link:"#",alt:e.card?e.card.name:""}),Object(l.jsx)("h2",{className:"popup__photo-title",children:e.card?e.card.name:""})]})})})},h=a(2),f=a.n(h),_=a(4),j=a(10),O=a(11),x=function(){function e(t){var a=t.baseUrl,n=t.authorization;Object(j.a)(this,e),this._baseUrl=a,this._auth=n}return Object(O.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status," error!"))}},{key:"getUserInfo",value:function(){var e=Object(_.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._auth}});case 2:return t=e.sent,e.abrupt("return",this._checkResponse(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getGroupCards",value:function(){var e=Object(_.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._auth}});case 2:return t=e.sent,e.abrupt("return",this._checkResponse(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateProfile",value:function(){var e=Object(_.a)(f.a.mark((function e(t){var a,n,r,s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.about,r=t.id,s=t.link,e.next=3,fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._auth,"Content-Type":"application/json"},body:JSON.stringify({name:a,about:n,id:r,link:s})});case 3:return c=e.sent,e.abrupt("return",this._checkResponse(c));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateAvatar",value:function(){var e=Object(_.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.link,e.next=3,fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._auth,"Content-Type":"application/json"},body:JSON.stringify({avatar:a})});case 3:return n=e.sent,e.abrupt("return",this._checkResponse(n));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addCard",value:function(){var e=Object(_.a)(f.a.mark((function e(t){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.link,e.next=3,fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._auth,"Content-Type":"application/json"},body:JSON.stringify({name:a,link:n})});case 3:return r=e.sent,e.abrupt("return",this._checkResponse(r));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"likeCard",value:function(){var e=Object(_.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._auth,"Content-Type":"application/json"}});case 2:return a=e.sent,e.abrupt("return",this._checkResponse(a));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeLike",value:function(){var e=Object(_.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._auth,"Content-Type":"application/json"}});case 2:return a=e.sent,e.abrupt("return",this._checkResponse(a));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteCard",value:function(){var e=Object(_.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._auth,"Content-Type":"application/json"}});case 2:return a=e.sent,e.abrupt("return",this._checkResponse(a));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=new x({baseUrl:"https://around.nomoreparties.co/v1/group-12",authorization:"99b2ba57-5d11-48fc-a5da-07a4f1d8e8b5"});var k=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("li",{className:"elements__item",children:[Object(l.jsx)("img",{className:"elements__img",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(l.jsxs)("div",{className:"elements__description",children:[Object(l.jsx)("h2",{className:"elements__title",children:e.card.name}),Object(l.jsxs)("div",{className:"elements__like-container",children:[Object(l.jsx)("button",{type:"button","aria-label":"like image",className:"elements__like-btn"}),Object(l.jsx)("p",{className:"elements__likes",children:e.card.likes.length})]})]}),Object(l.jsx)("button",{type:"button","aria-label":"delete icon",className:"elements__delete-btn"})]},e.card._id)})};var N=function(e){var t=r.a.useState(""),a=Object(i.a)(t,2),n=a[0],s=a[1],c=r.a.useState(""),o=Object(i.a)(c,2),u=o[0],h=o[1],f=r.a.useState(""),_=Object(i.a)(f,2),j=_[0],O=_[1],x=r.a.useState([]),N=Object(i.a)(x,2),g=N[0],y=N[1];return r.a.useEffect((function(){v.getUserInfo().then((function(e){s(e.name),h(e.about),O(e.avatar)})).catch((function(e){console.log(e)}))})),r.a.useEffect((function(){v.getGroupCards().then((function(e){y((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e))}))})).catch((function(e){console.log(e)}))}),[]),Object(l.jsxs)("main",{id:"main_container",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__img-place",children:[Object(l.jsx)("img",{id:"avatar",className:"profile__avatar",src:j,alt:"profile"}),Object(l.jsx)("div",{className:"profile__edit-overlay",onClick:e.onEditAvatar})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__details-container",children:[Object(l.jsxs)("div",{className:"profile__text-box",children:[Object(l.jsx)("h1",{className:"profile__name",children:n}),Object(l.jsx)("p",{className:"profile__subtitle",children:u})]}),Object(l.jsx)("button",{type:"button","aria-label":"edit profile",className:"profile__edit-btn",onClick:e.onEditProfile,id:"profile_edit_button"})]}),Object(l.jsx)("button",{type:"button","aria-label":"add image",className:"profile__add-btn",id:"profile_add_button",onClick:e.onAddPlace})]})]}),Object(l.jsxs)(p,{name:"form",title:"Edit Profile",isOpen:e.isEditProfilePopupOpen,children:[Object(l.jsx)("button",{type:"button","aria-label":"close profile editing form",className:"form__close-btn",id:"close_button_profile",onClick:e.onClose,children:Object(l.jsx)("img",{className:"form__close-img",src:b,alt:"close button"})}),Object(l.jsx)("input",{className:"form__field form__field_name",type:"text",name:"name",id:"fullName",placeholder:"Full Name",required:!0,minLength:2,maxLength:40}),Object(l.jsx)("span",{className:"form__field-error fullName-error"}),Object(l.jsx)("input",{className:"form__field form__field_about",type:"text",name:"about",id:"about",placeholder:"About",required:!0,minLength:2,maxLength:200}),Object(l.jsx)("span",{className:"form__field-error about-error"}),Object(l.jsx)("button",{type:"submit","aria-label":"submit profile changes",className:"form__submit-btn",id:"form__profile-submit-button",children:"Save"})]}),Object(l.jsxs)(p,{name:"add",title:"New Place",isOpen:e.isAddPlacePopupOpen,children:[Object(l.jsx)("button",{type:"button","aria-label":"close place addition form",className:"form__close-btn",id:"close_button_add",children:Object(l.jsx)("img",{className:"form__close-img",src:b,alt:"close button",onClick:e.onClose})}),Object(l.jsx)("input",{className:"form__field form__field_title",type:"text",name:"name",id:"title",placeholder:"Title",required:!0,minLength:1,maxLength:30}),Object(l.jsx)("span",{className:"form__field-error title-error"}),Object(l.jsx)("input",{className:"form__field form__field_link",type:"url",name:"link",id:"link",placeholder:"Image link",required:!0}),Object(l.jsx)("span",{className:"form__field-error link-error"}),Object(l.jsx)("button",{type:"submit","aria-label":"submit profile changes",className:"form__submit-btn",id:"form__profile-submit-button",children:"Save"})]}),Object(l.jsxs)(p,{name:"delete",title:"Are you sure?",isOpen:!1,children:[Object(l.jsx)("button",{type:"button","aria-label":"close profile deletion form",className:"form__close-btn",id:"close_button_delete",children:Object(l.jsx)("img",{className:"form__close-img",src:b,alt:"close button",onClick:e.onClose})}),Object(l.jsx)("h2",{className:"form__title",children:"Are you sure?"}),Object(l.jsx)("button",{type:"submit","aria-label":"submit profile changes",className:"form__submit-btn",id:"form__delete-submit-button",children:"Yes"})]}),Object(l.jsxs)(p,{name:"avatar",title:"Change profile picture",isOpen:e.isEditAvatarPopupOpen,children:[Object(l.jsx)("button",{type:"button","aria-label":"close profile avatar form",className:"form__close-btn",id:"close_button_avatar",children:Object(l.jsx)("img",{className:"form__close-img",src:b,alt:"close button",onClick:e.onClose})}),Object(l.jsx)("input",{className:"form__field form__field_link",type:"url",name:"link",id:"link2",placeholder:"Image link",required:!0}),Object(l.jsx)("span",{className:"form__field-error link2-error"}),Object(l.jsx)("button",{type:"submit","aria-label":"submit avatar changes",className:"form__submit-btn",id:"form__avatar-submit-button",children:"Save"})]}),Object(l.jsx)(m,{onClose:e.onClose,card:e.selectedCard,handleCardClick:e.handleCardClick}),Object(l.jsx)("section",{className:"elements",children:Object(l.jsx)("ul",{className:"elements__list",children:g.map((function(t){return Object(l.jsx)(k,{card:t,onCardClick:e.onCardClick},t._id)}))})})]})};var g=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:" \xa92021 Seaf Aliyan "})})};var y=function(){var e=r.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],s=r.a.useState(!1),c=Object(i.a)(s,2),o=c[0],d=c[1],p=r.a.useState(!1),b=Object(i.a)(p,2),m=b[0],h=b[1],f=r.a.useState(),_=Object(i.a)(f,2),j=_[0],O=_[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(N,{onEditProfile:function(){n(!0)},onAddPlace:function(){d(!0)},onEditAvatar:function(){h(!0)},isEditAvatarPopupOpen:m,isAddPlacePopupOpen:o,isEditProfilePopupOpen:a,onClose:function(){d(!1),h(!1),n(!1),O(null)},onCardClick:function(e){O(e)},selectedCard:j}),Object(l.jsx)(g,{})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),C()}},[[19,1,2]]]);
//# sourceMappingURL=main.020dc004.chunk.js.map