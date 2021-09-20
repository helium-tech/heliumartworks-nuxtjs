<template>
  <div class="outer__inner">
  <div class="user">
    <div class="background">
      <div class="background__center center">
        <div class="background__head js-background-head" style="background-image: url('/art-cat.jpg');">
          <div class="background__btns">
            <button class="button-stroke button-small background__button js-background-load">
              <svg class="icon icon-edit">
                <use xlink:href="#icon-edit"></use>
              </svg><span>Modifier image de couverture</span>
            </button>
          </div>
          <div class="background__file">
            <input type="file">
            <div class="background__wrap">
              <svg class="icon icon-upload-file">
                <use xlink:href="#icon-upload-file"></use>
              </svg>
              <div class="background__info">Drag and drop your photo here</div>
              <div class="background__text">or click to browse</div>
            </div>
            <button class="button-small background__button js-background-save">Save photo</button>
          </div>
        </div>
      </div>
    </div>
    <div class="user__body">
      <div class="user__center center">
        <div class="profile">
          <div class="profile__main">
            <div class="profile__avatar">
              <figure
                class="avatar avatar-xl"
                data-initial="HT"
              >
              <img src="img/avatar-1.png" alt="..." />
              </figure>
            </div>
            <a class="profile__update js-popup-open" href="#popup-avatars" data-effect="mfp-zoom-in">
              <svg class="icon icon-pencil">
                <use xlink:href="#icon-pencil"></use>
              </svg>Mettre à jour l'avatar
            </a>
            <div class="profile__man">Kohaku Tora</div>
          </div>
          <div class="profile__body">
            <div class="profile__parameters">
              <div class="profile__parameter">
                <svg class="icon icon-tick">
                  <use xlink:href="#icon-tick"></use>
                </svg>Compte certifié
              </div>
              <div class="profile__parameter">
                <svg class="icon icon-star-outline">
                  <use xlink:href="#icon-star-outline"></use>
                </svg>256 likes
              </div>
            </div>
            <div class="profile__socials"><a class="profile__social" href="#" target="_blank">
                <svg class="icon icon-twitter">
                  <use xlink:href="#icon-twitter"></use>
                </svg></a><a class="profile__social" href="#" target="_blank">
                <svg class="icon icon-instagram">
                  <use xlink:href="#icon-instagram"></use>
                </svg></a><a class="profile__social" href="#" target="_blank">
                <svg class="icon icon-facebook">
                  <use xlink:href="#icon-facebook"></use>
                </svg></a></div>
            <div class="profile__note">Member depuis Septembre 2021</div>
            <button class="profile__report">
              <svg class="icon icon-flag">
                <use xlink:href="#icon-flag"></use>
              </svg>Signaler ce compte
            </button>
          </div>
        </div>
        <div class="user__wrapper">
          <div class="user__details">
            <div class="user__head">
              <div class="user__title">Salut,je suis Kohaku Tora</div><a class="button-stroke button-small user__button" href="account-setting.html">Edit your profile</a>
            </div>
            <div class="user__content">Bla bla bla</div>
            <div class="user__options">
              <div class="user__option">
                <div class="user__category">
                  <svg class="icon icon-home">
                    <use xlink:href="#icon-home"></use>
                  </svg>Résidence
                </div>
                <div class="user__text">Auckland, New Zealand</div>
              </div>
              <div class="user__option">
                <div class="user__category">
                  <svg class="icon icon-route">
                    <use xlink:href="#icon-route"></use>
                  </svg>Compte
                </div>
                <div class="user__text">Certifié</div>
              </div>
              <div class="user__option">
                <div class="user__category">
                  <svg class="icon icon-comment">
                    <use xlink:href="#icon-comment"></use>
                  </svg>Langue
                </div>
                <div class="user__text">English</div>
              </div>
            </div>
          </div>
          <div class="reviews">
            <div class="reviews__head">
              <div class="reviews__title">Images</div>
            </div>
            <div class="reviews__group">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="popup popup_avatars mfp-hide" id="popup-avatars">
    <div class="avatars">
      <div class="avatars__file">
        <input class="avatars__load" type="file">
        <div class="avatars__icon">
          <svg class="icon icon-upload-file">
            <use xlink:href="#icon-upload-file"></use>
          </svg>
        </div>
        <div class="avatars__format">Drag and drop your photo here</div>
        <div class="avatars__note">or click to browse</div>
      </div>
      <div class="avatars__gallery">
        <div class="avatars__info">Use Fleet’s default photos</div>
        <div class="avatars__list">
          <div class="avatars__item"><img src="img/content/avatar-variant-1.jpg" alt="Avatar"></div>
          <div class="avatars__item"><img src="img/content/avatar-variant-2.jpg" alt="Avatar"></div>
          <div class="avatars__item"><img src="img/content/avatar-variant-3.jpg" alt="Avatar"></div>
          <div class="avatars__item"><img src="img/content/avatar-variant-4.jpg" alt="Avatar"></div>
          <div class="avatars__item"><img src="img/content/avatar-variant-5.jpg" alt="Avatar"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>

</style>
