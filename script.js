"use strict";

const app = Vue.createApp({
  data() {
    return {
      userName: "Tine Metz",
      dateTime: new Date().toLocaleString("en-US"),
    };
  },
}).mount("#app");
