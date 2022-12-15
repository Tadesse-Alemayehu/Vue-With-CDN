import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
createApp({
  data() {
    return {
      firstName: "Tadesse",
      lastName: "Dubale",
      email: "Tadalem26@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      let result = await fetch("https://randomuser.me/api");
      result = await result.json();
      result = result.results;
      console.log(result);
      this.firstName = result[0].name.first;
      this.lastName = result[0].name.last;
      this.email = result[0].email;
      this.gender = result[0].gender;
      this.picture = result[0].picture.large;
    },
  },
}).mount("#app");
