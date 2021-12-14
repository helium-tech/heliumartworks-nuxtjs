<template>
<div class="section setting">
  <div class="px-2">
    <div class="setting__select tablet-show">
      <select class="select js-tabs-select">
        <option>Mes informations</option>
        <option>Uploader un fichier</option>
      </select>
    </div>
    <tabs>
      <tab
        svg="icon-user"
        useSvg="#icon-user"
        title="Mes informations"
        >
          <div class="setting__item">
              <div class="setting__head">
                <h2 class="setting__title h2">Mes informations</h2>
              </div>
              <div class="setting__category">Nom</div>
              <div class="setting__category">Email</div>
              <div class="setting__category">Numero de Télephone</div>
          </div>
      </tab>

      <tab
        svg="icon-upload-file"
        useSvg="#icon-upload-file"
        title="Uploader un fichier"
        >
        <div class="setting__item upload__inner">
          <div class="upload__wrapper">
                <div class="upload__head">
                  <h2 class="upload__title h2">Uploader un fichier</h2><a class="button-stroke button-small upload__button" href="#">Liste des images</a>
                </div>
                <form class="upload__form" enctype="multipart/form-data">
                  <div class="upload__list">
                    <div class="upload__item">
                      <div class="upload__note">Choisissez le fichier à uploader</div>
                      <div class="upload__file">
                        <!-- <input class="upload__input" type="file" @change="getUploadFile($event)"> -->
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
                            <input class="field__input" type="text" name="title" required v-model="fileTitle">
                          </div>
                        </div>
                        <div class="upload__row">
                          <div class="upload__col upload__col_w70">
                            <div class="upload__label">prix</div>
                            <div class="upload__line">
                              <div class="upload__cell">
                                <div class="field field_empty">
                                  <div class="field__wrap">
                                    <input class="field__input" type="text" name="price" placeholder="e. g. &quot;180&quot;" required v-model="filePrice">
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
                            <textarea class="field__textarea" name="description" placeholder="ex. Femme portant un enfant au dos" required v-model="fileDescription"></textarea>
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
                        <button class="button-stroke upload__button">
                          <svg class="icon icon-plus">
                            <use xlink:href="#icon-plus"></use>
                          </svg><span>Plus de tags</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="upload__foot">
                    <button class="button-stroke upload__button js-upload-button">Aperçu</button>
                    <!-- <button class="button upload__button" @click="uploadFile"> -->
                      <span>Uploader</span>
                      <svg class="icon icon-arrow-next">
                        <use xlink:href="#icon-arrow-next"></use>
                      </svg>
                    </button>
                    <!-- <div class="upload__saving">Auto saving
                      <div class="loader"></div>
                    </div> -->
                  </div>
                </div>
              </form>
          </div>
          <div class="upload__preview">
            <div class="upload__wrap">
              <div class="upload__subtitle">Aperçu</div>
                <div class="card__preview"><img src="img/content/card-pic-5.jpg"/>
                  <div class="category card__category">Catégorie Image</div>
                </div>
                <div class="card__body">
                  <div class="card__line">
                    <div class="card__title">{{fileTitle}}</div>
                    <div class="card__price">
                      <div class="card__old">Prix original</div>
                      <div class="card__actual">Prix promotionne</div>
                    </div>
                  </div>
                  <div class="card__options">
                    <div class="card__option">
                      Tag1
                    </div>
                    <div class="card__option">
                      Tag2
                    </div>
                  </div>
                  <div class="card__foot">
                    <div class="card__flex">
                      <div class="card__cost">{{filePrice}}</div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
      </tab>

      <tab
        svg="icon-credit-card"
        useSvg="#icon-credit-card"
        title="Solde et Transactions"
        >
          <div class="setting__item">
                <h2 class="setting__title h2">Solde et Transactions</h2>
                <div class="setting__list">
                  <div class="setting__box">
                    <div class="setting__stage">Solde</div>
                    <div class="setting__element">
                      <div class="setting__details">
                        <div class="columns">
                          <div class="column col-4 col-xs-12">
                            <div class="card s-rounded mb-4-o">
                              <div class="card-header">
                                <div class="card-title text-bold">Mon solde
                                  <svg class="icon icon-credit-card">
                                  <use xlink:href="#icon-credit-card"></use>
                                </svg>
                              </div>
                                <div class="card-subtitle text-gray text-tiny">Montant constituant votre solde total</div>
                              </div>
                              <div class="card-body text-center">
                                <span class="h4 text-bold">450000 FCFA</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="setting__box">
                    <div class="setting__stage">Transactions

                    </div>
                  </div>
                </div>

          </div>
      </tab>

      <tab
        svg="icon-monitor"
        useSvg="#icon-monitor"
        title="Mes statistiques"
        >
          <div class="setting__item">
              <div class="setting__head">
                <h2 class="setting__title h2">Mes statistiques</h2>
              </div>

            <div class="columns">
              <div class="column col-4 col-xs-12">
                <div class="card s-rounded mb-4-o">
                  <div class="card-header">
                    <div class="card-title text-bold">Téléchargements
                      <i class="icon icon-downward"></i>
                    </div>
                    <div class="card-subtitle text-gray text-tiny">Nombre de fois où vos fichiers ont été téléchargés</div>
                  </div>
                  <div class="card-body text-center">
                    <span class="h4 text-bold">15000</span>
                  </div>
                </div>
              </div>
              <div class="column col-4 col-xs-12">
                <div class="card s-rounded mb-4-o">
                  <div class="card-header">
                    <div class="card-title text-bold">Vues
                      <svg class="icon icon-eye">
                        <use xlink:href="#icon-eye"></use>
                      </svg>
                    </div>
                    <div class="card-subtitle text-gray text-tiny">Nombre de fois où vos fichiers ont été consultés</div>
                  </div>
                  <div class="card-body text-center">
                    <span class="h4 text-bold">500000</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
      </tab>

    </tabs>
  </div>
</div>
</template>

<script>
import Tab from '~/components/Tab.vue'
import Tabs from '~/components/Tabs.vue'
export default {
  name: 'Account',
  components: {
    Tab,
    Tabs
  },

  data() {
    return {
      file: '',
      fileTitle: '',
      fileDescription: '',
      filePrice: ''
    }
  }
  // methods: {
  //   getUploadFile() {
  //     this.file = event.target.files[0];
  //   },

    // uploadFile() {
    //   axios
    //     .post('https://heliumartworks.herokuapp.com/files/add',
    //           {
    //             "email": this.newEmail
    //           })
    //     .then((response) => {
    //       console.log(data.data)
    //     })
    // }
  }
</script>

<style scoped>

</style>
