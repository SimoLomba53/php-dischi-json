const { createApp } = Vue;

createApp({
  data() {
    return {
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
