<template>
  <div class="outer__inner">
        <div class="section__mb80">
          <div class="support__center center">
            <h1 class="support__title py-2">Support & FAQ</h1>
            <div class="support__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>

        <div class="section faq">
          <div class="faq__center center">
            <div class="faq__row js-tabs">
              <div class="faq__col">
                <div class="faq__nav">
                  <a class="faq__link">
                    <svg class="icon icon-home">
                      <use xlink:href="#icon-home"></use>
                    </svg>General
                  </a>
                  <a class="faq__link"
                  :class="{active: isTabActive}"
                  @click="toggleTab"
                  >
                    <svg class="icon icon-circle-and-square">
                      <use xlink:href="#icon-circle-and-square"></use>
                    </svg>Support
                  </a>
                </div>
              </div>
              <div class="faq__col">
                <div class="faq__box js-tabs-item" style="display: block;">
                                    <div class="faq__item">
                                      <div class="faq__head">How does it work</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">How to start with Stacks</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">Dose it suppport Dark Mode</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">Does it support Auto-Layout</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">What is Stacks Design System</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                </div>
                <div class="faq__box js-tabs-item" style="display: none;">
                                    <div class="faq__item">
                                      <div class="faq__head">How to start with Stacks</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">Dose it suppport Dark Mode</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">Does it support Auto-Layout</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">What is Stacks Design System</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">How does it work</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">How to start with Stacks</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                </div>
                <div class="faq__box js-tabs-item" style="display: none;">
                                    <div class="faq__item">
                                      <div class="faq__head">Does it support Auto-Layout</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">What is Stacks Design System</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">How does it work</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">Dose it suppport Dark Mode</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                </div>
                <div class="faq__box js-tabs-item" style="display: none;">
                                    <div class="faq__item">
                                      <div class="faq__head">How does it work</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">How to start with Stacks</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">Dose it suppport Dark Mode</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">Does it support Auto-Layout</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
                                      </div>
                                    </div>
                                    <div class="faq__item">
                                      <div class="faq__head">What is Stacks Design System</div>
                                      <div class="faq__body">
                                        <div class="faq__content">The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</div>
                                        <button class="button-stroke button-small faq__button">Learn more</button>
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
  data() {
    return {
      isTabActive : false,
    }
  },
  methods: {

    toggleTab() {
      this.isTabActive = !this.isTabActive
    },
  },
}
</script>
<style scoped>

</style>
