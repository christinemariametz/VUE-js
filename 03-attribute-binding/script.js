"use strict";

Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      imageAttrs: {
        src: "https://picsum.photos/id/237/500/500",
        alt: "A cute dog",
      },
    };
  },
}).mount("#app");
