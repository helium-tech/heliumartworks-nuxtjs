<template>
  <div class="outer__inner">
<div class="section setting js-tabs">
  <div class="setting__center center">
    <div class="setting__select tablet-show">
      <select class="select js-tabs-select">
        <option>Personal info</option>
        <option>Login and security</option>
        <option>Payments</option>
        <option>Notification</option>
      </select>
    </div>
    <div class="setting__menu"><a class="setting__link js-tabs-link active" href="#">
        <svg class="icon icon-user">
          <use xlink:href="#icon-user"></use>
        </svg>Personal info</a><a class="setting__link js-tabs-link" href="#">
        <svg class="icon icon-lock">
          <use xlink:href="#icon-lock"></use>
        </svg>Login and security</a><a class="setting__link js-tabs-link" href="#">
        <svg class="icon icon-credit-card">
          <use xlink:href="#icon-credit-card"></use>
        </svg>Payments</a><a class="setting__link js-tabs-link" href="#">
        <svg class="icon icon-bell">
          <use xlink:href="#icon-bell"></use>
        </svg>Notification</a></div>
    <div class="setting__container">
      <div class="setting__item js-tabs-item">
        <form class="setting__form">
          <div class="setting__head">
            <h2 class="setting__title h2">Personal info</h2><a class="button-stroke button-small setting__button" href="#">Voir profil</a>
          </div>
          <div class="setting__list">
            <div class="setting__section">
              <div class="setting__category">Account info</div>
              <div class="setting__fieldset">
                <div class="setting__row">
                  <div class="field">
                    <div class="field__label">Display Name</div>
                    <div class="field__wrap">
                      <input class="field__input" type="text" name="display-name" placeholder="Enter your display name" required>
                    </div>
                  </div>
                  <div class="field">
                    <div class="field__label">real name</div>
                    <div class="field__wrap">
                      <input class="field__input" type="text" name="real-name" placeholder="Enter your real name" required>
                    </div>
                  </div>
                </div>
                <div class="setting__row">
                  <div class="field">
                    <div class="field__label">Phone</div>
                    <div class="field__wrap">
                      <input class="field__input" type="tel" name="phone" placeholder="Phone number" required>
                    </div>
                  </div>
                  <div class="field">
                    <div class="field__label">email</div>
                    <div class="field__wrap">
                      <input class="field__input" type="email" name="email" placeholder="Email" required>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="field__label">bio</div>
                  <div class="field__wrap">
                    <textarea class="field__textarea" name="bio" placeholder="About yourself in a few words" required></textarea>
                  </div>
                </div>
                <div class="setting__row">
                  <div class="field">
                    <div class="field__label">lives in</div>
                    <div class="field__wrap">
                      <select class="select">
                        <option>Location</option>
                        <option>USA</option>
                        <option>Russia</option>
                      </select>
                    </div>
                  </div>
                  <div class="field">
                    <div class="field__label">Speak</div>
                    <div class="field__wrap">
                      <select class="select">
                        <option>English (United States)</option>
                        <option>Russian</option>
                        <option>Chinese</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="setting__section">
              <div class="setting__category">Social</div>
              <div class="setting__fieldset">
                <div class="setting__row">
                  <div class="field">
                    <div class="field__label">website</div>
                    <div class="field__wrap">
                      <input class="field__input" type="text" name="website" placeholder="Your site URL" required>
                    </div>
                  </div>
                  <div class="field field_button">
                    <div class="field__label">twitter</div>
                    <div class="field__wrap">
                      <input class="field__input" type="text" name="twitter" placeholder="@twitter username" required>
                      <button class="button-stroke button-small field__button">Verify account</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="setting__controls">
            <button class="button setting__button">Update profile</button>
            <button class="setting__clear">
              <svg class="icon icon-close">
                <use xlink:href="#icon-close"></use>
              </svg>Clear all
            </button>
          </div>
        </form>
      </div>
      <div class="setting__item js-tabs-item">
        <h2 class="setting__title h2">Login and security</h2>
        <div class="setting__list">
          <div class="setting__box">
            <div class="setting__stage">Login</div>
            <div class="setting__element">
              <div class="setting__details">
                <div class="setting__label">Password</div>
                <div class="setting__text">Last updated 1 month ago</div>
              </div>
              <button class="button-stroke button-small settings__button">Update password</button>
            </div>
          </div>
          <div class="setting__box">
            <div class="setting__stage">Social accounts</div>
            <div class="setting__line">
              <div class="setting__element">
                <div class="setting__details">
                  <div class="setting__label">Facebook</div>
                  <div class="setting__text">Not connected</div>
                </div>
                <button class="button-stroke button-small settings__button">Connect</button>
              </div>
              <div class="setting__element">
                <div class="setting__details">
                  <div class="setting__label">Apple account</div>
                  <div class="setting__text">Not connected</div>
                </div>
                <button class="button-stroke button-small settings__button">Connect</button>
              </div>
            </div>
          </div>
          <div class="setting__box">
            <div class="setting__stage">Device history</div>
            <div class="setting__group">
              <div class="setting__element">
                <div class="setting__details">
                  <div class="setting__label">Session</div>
                  <div class="setting__text">May 14, 2021 at 08:36pm</div>
                </div>
                <button class="button-stroke button-small settings__button">Log out device</button>
              </div>
              <div class="setting__element">
                <div class="setting__details">
                  <div class="setting__label">macOs Big Sur. Chrome</div>
                  <div class="setting__text">May 14, 2021 at 08:36pm</div>
                </div>
                <button class="button-stroke button-small settings__button">Log out device</button>
              </div>
              <div class="setting__element">
                <div class="setting__details">
                  <div class="setting__label">Session</div>
                  <div class="setting__text">May 14, 2021 at 08:36pm</div>
                </div>
                <button class="button-stroke button-small settings__button">Log out device</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="setting__item js-tabs-item">
        <h2 class="setting__title h2">Payment methods</h2>
        <form class="setting__form">
          <div class="setting__list">
            <div class="setting__box">
              <div class="setting__stage">Credit card</div>
              <div class="setting__element">
                <div class="setting__details">
                  <div class="setting__label">Visa ••••••1667</div>
                  <div class="setting__text">Expiration: 03/2026</div>
                </div>
                <button class="button-small settings__button">Add payment method</button>
              </div>
              <div class="setting__top">
                <div class="setting__category">Add new credit card</div>
                <div class="setting__cards">
                  <div class="setting__card"><img src="img/content/visa.svg" alt="Visa"></div>
                  <div class="setting__card"><img src="img/content/master-card.svg" alt="Master Card"></div>
                </div>
              </div>
              <div class="setting__fieldset">
                <div class="field">
                  <div class="field__label">card number</div>
                  <div class="field__wrap">
                    <input class="field__input" type="tel" name="card-number" placeholder="XXXX XXXX XXXX XXXX" required>
                  </div>
                </div>
                <div class="field">
                  <div class="field__label">card holder</div>
                  <div class="field__wrap">
                    <input class="field__input" type="text" name="card-holder" placeholder="TRAN MAU TRI TAM" required>
                  </div>
                </div>
                <div class="setting__row">
                  <div class="field">
                    <div class="field__label">EXPIRATION DATE</div>
                    <div class="field__wrap">
                      <input class="field__input" type="tel" name="date" placeholder="MM / YY" required>
                    </div>
                  </div>
                  <div class="field">
                    <div class="field__label">CVC</div>
                    <div class="field__wrap">
                      <input class="field__input" type="tel" name="CVC" placeholder="CVC" required>
                    </div>
                  </div>
                </div>
                <label class="checkbox">
                  <input class="checkbox__input" type="checkbox" checked="checked"/><span class="checkbox__inner"><span class="checkbox__tick"></span><span class="checkbox__text">Save Card</span></span>
                </label>
              </div>
            </div>
            <div class="setting__box">
              <div class="setting__stage">Coupons</div>
              <div class="setting__line">
                <div class="setting__element">
                  <div class="setting__details">
                    <div class="setting__label">Coupons</div>
                    <div class="setting__text">No coupon added</div>
                  </div>
                  <button class="button-stroke button-small settings__button">Add</button>
                </div>
                <div class="setting__element">
                  <div class="setting__details">
                    <div class="setting__label">Gift credit</div>
                    <div class="setting__text">No gift credit added</div>
                  </div>
                  <button class="button-stroke button-small settings__button">Add</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="setting__item js-tabs-item">
        <h2 class="setting__title h2">Notification setting</h2>
        <div class="setting__list">
          <div class="setting__box">
            <div class="setting__stage">Messages</div>
            <div class="setting__notification">
              <div class="setting__main">
                <div class="setting__subtitle">Email</div>
                <label class="switch">
                  <input class="switch__input" type="checkbox" checked="checked"/><span class="switch__inner"><span class="switch__box"></span></span>
                </label>
              </div>
              <div class="setting__content">Recevice notifications via email</div>
            </div>
            <div class="setting__notification">
              <div class="setting__main">
                <div class="setting__subtitle">Text messages</div>
                <label class="switch">
                  <input class="switch__input" type="checkbox"/><span class="switch__inner"><span class="switch__box"></span></span>
                </label>
              </div>
              <div class="setting__content">Recevice notifications via mobile phone</div>
            </div>
            <div class="setting__notification">
              <div class="setting__main">
                <div class="setting__subtitle">Browser notifications</div>
                <label class="switch">
                  <input class="switch__input" type="checkbox"/><span class="switch__inner"><span class="switch__box"></span></span>
                </label>
              </div>
              <div class="setting__content">Recevice notifications of your browser</div>
            </div>
          </div>
          <div class="setting__box">
            <div class="setting__stage">Promotions</div>
            <div class="setting__notification">
              <div class="setting__main">
                <div class="setting__subtitle">Email</div>
                <label class="switch">
                  <input class="switch__input" type="checkbox" checked="checked"/><span class="switch__inner"><span class="switch__box"></span></span>
                </label>
              </div>
              <div class="setting__content">Recevice notifications via email</div>
            </div>
            <div class="setting__notification">
              <div class="setting__main">
                <div class="setting__subtitle">Text messages</div>
                <label class="switch">
                  <input class="switch__input" type="checkbox"/><span class="switch__inner"><span class="switch__box"></span></span>
                </label>
              </div>
              <div class="setting__content">Recevice notifications via mobile phone</div>
            </div>
            <div class="setting__notification">
              <div class="setting__main">
                <div class="setting__subtitle">Browser notifications</div>
                <label class="switch">
                  <input class="switch__input" type="checkbox"/><span class="switch__inner"><span class="switch__box"></span></span>
                </label>
              </div>
              <div class="setting__content">Recevice notifications of your browser</div>
            </div>
          </div>
          <div class="setting__box">
            <div class="setting__stage">Reminders</div>
            <div class="setting__notification">
              <div class="setting__main">
                <div class="setting__subtitle">Email</div>
                <label class="switch">
                  <input class="switch__input" type="checkbox" checked="checked"/><span class="switch__inner"><span class="switch__box"></span></span>
                </label>
              </div>
              <div class="setting__content">Recevice notifications via email</div>
            </div>
            <div class="setting__notification">
              <div class="setting__main">
                <div class="setting__subtitle">Text messages</div>
                <label class="switch">
                  <input class="switch__input" type="checkbox"/><span class="switch__inner"><span class="switch__box"></span></span>
                </label>
              </div>
              <div class="setting__content">Recevice notifications via mobile phone</div>
            </div>
            <div class="setting__notification">
              <div class="setting__main">
                <div class="setting__subtitle">Browser notifications</div>
                <label class="switch">
                  <input class="switch__input" type="checkbox"/><span class="switch__inner"><span class="switch__box"></span></span>
                </label>
              </div>
              <div class="setting__content">Recevice notifications of your browser</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Account'
}
</script>

<style scoped>

</style>
