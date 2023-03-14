const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Ciao",

      api: [],
    };
  },

  created() {
    axios
      .get("http://localhost/php-dischi-json/API/api.php")
      .then((response) => {
        this.api = response.data;
      });
  },
}).mount("#app");
