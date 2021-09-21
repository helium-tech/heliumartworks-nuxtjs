<template>
  <div class="outer__inner">
<div class="section upload">
  <div class="upload__center center">
    <div class="upload__inner">
      <div class="upload__wrapper">
        <div class="upload__head">
          <h2 class="upload__title h2">Uploader un fichier</h2><a class="button-stroke button-small upload__button" href="#">Liste des images</a>
        </div>
        <div class="upload__form">
          <div class="upload__list">
            <div class="upload__item">
              <div class="upload__note">Choisissez le fichier à uploader</div>
              <div class="upload__file">
                <input class="upload__input" type="file">
                <div class="upload__icon">
                  <svg class="icon icon-upload-file">
                    <use xlink:href="#icon-upload-file"></use>
                  </svg>
                </div>
                <div class="upload__format">PNG, JPEG. Max 500Mb.</div>
              </div>
            </div>
            <div class="upload__item">
              <div class="upload__category">Détails du fichier</div>
              <div class="upload__fieldset">
                <div class="field">
                  <div class="field__label">titre</div>
                  <div class="field__wrap">
                    <input class="field__input" type="text" name="title" required>
                  </div>
                </div>
                <div class="upload__row">
                  <div class="upload__col upload__col_w70">
                    <div class="upload__label">prix</div>
                    <div class="upload__line">
                      <div class="upload__cell">
                        <div class="field field_empty">
                          <div class="field__wrap">
                            <input class="field__input" type="text" name="price" placeholder="e. g. &quot;180&quot;" required>
                          </div>
                        </div>
                      </div>
                      <div class="upload__cell">
                        <div class="field field_empty">
                          <div class="field__wrap">
                            <select class="select">
                              <option>XOF F</option>
                              <option>$ USD</option>
                              <option>€ EUR</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="upload__col upload__col_w30">
                    <div class="upload__label">Promotion</div>
                    <div class="upload__line">
                      <div class="upload__cell">
                        <div class="field field_empty">
                          <div class="field__wrap">
                            <input class="field__input" type="text" name="discount" placeholder="ex. &quot;10&quot;" required>
                          </div>
                        </div>
                      </div>
                      <div class="upload__cell">
                        <div class="field field_empty">
                          <div class="field__wrap">
                            <select class="select">
                              <option>%</option>
                              <option>F CFA</option>
                              <option>$</option>
                              <option>€</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="field__label">description</div>
                  <div class="field__wrap">
                    <textarea class="field__textarea" name="description" placeholder="ex. Femme portant un enfant au dos" required></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="upload__item">
              <div class="upload__category">Tags</div>
              <div class="upload__fieldset">
                <div class="upload__row">
                  <div class="upload__col upload__col_w50">
                    <div class="field">
                      <div class="field__wrap">
                        <input class="field__input" type="text" name="service5" placeholder="e. g. Wifi 24/7" required>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <button class="button-stroke upload__button">
                  <svg class="icon icon-plus">
                    <use xlink:href="#icon-plus"></use>
                  </svg><span>Add more feature</span>
                </button> -->
              </div>
            </div>
          </div>
          <div class="upload__foot">
            <button class="button-stroke upload__button js-upload-button">Aperçu</button>
            <div class="button upload__button"><span>Uploader</span>
              <svg class="icon icon-arrow-next">
                <use xlink:href="#icon-arrow-next"></use>
              </svg>
            </div>
            <!-- <div class="upload__saving">Auto saving
              <div class="loader"></div>
            </div> -->
          </div>
        </div>
      </div>
      <!-- <div class="upload__preview js-upload-preview">
        <div class="upload__wrap">
          <button class="upload__close js-upload-close">
            <svg class="icon icon-close">
              <use xlink:href="#icon-close"></use>
            </svg>
          </button>
          <div class="upload__subtitle">Aperçu</div><a class="card" href="stays-product.html">
            <div class="card__preview"><img srcSet="img/content/card-pic-5@2x.jpg 2x" src="img/content/card-pic-5.jpg" alt="Entire serviced classy moutain house"/>
              <div class="category card__category">superhost</div>
            </div>
            <div class="card__body">
              <div class="card__line">
                <div class="card__title">Entire serviced classy moutain house</div>
                <div class="card__price">
                  <div class="card__old">$356</div>
                  <div class="card__actual">$267</div>
                </div>
              </div>
              <div class="card__options">
                <div class="card__option">
                  <svg class="icon icon-modem">
                    <use xlink:href="#icon-modem"></use>
                  </svg>Free wifi
                </div>
                <div class="card__option">
                  <svg class="icon icon-burger">
                    <use xlink:href="#icon-burger"></use>
                  </svg>Breakfast included
                </div>
              </div>
              <div class="card__foot">
                <div class="card__flex">
                  <div class="card__cost">$200 total</div>
                  <div class="card__rating">
                    <svg class="icon icon-star">
                      <use xlink:href="#icon-star"></use>
                    </svg>
                    <div class="card__number">4.8</div>
                    <div class="card__reviews">(12 reviews)
                    </div>
                  </div>
                </div>
              </div>
            </div></a>
        </div>
      </div> -->
    </div>
  </div>
</div>
</div>
 </template>

<script>
export default {
  name: 'Upload',
}
</script>

<style scoped>

</style>
