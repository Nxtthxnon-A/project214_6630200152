<template>
  <div class="container">
    <div class="background-netflix">
      <img
        class="logo-netflix"
        id="logonetflix"
        src="/Image/fullname-netflix.png"
        @click="click_netflix"
      />
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "start",
  mounted() {
    // เมื่อ component ถูกโหลด ให้เพิ่มคลาส 'show' เพื่อแสดง logo
    this.showLogo();
  },
  methods: {
    showLogo() {
      const logo = document.getElementById("logonetflix");
      if (logo) {
        logo.classList.add("show");
      } else {
        console.error("Logo element not found!");
      }
    },
    click_netflix() {
      let logo = document.getElementById("logonetflix");
      console.log("hello");
      logo.classList.add("expand");

      let sound = new Audio(
        "public/soundtrack/Netflix New Logo Animation 2019.mp3"
      );
      sound.play();
      setTimeout(() => {
        // ใช้ arrow function
        logo.classList.add("expand-hide");
        setTimeout(() => {
          console.log("Navigating to introduction");
          this.$router.push("/introduction"); // ใช้ name แทน path เพื่อความชัดเจน
        }, 1600);
      }, 2000);
    },
  },
};
</script>

<style scoped>
@import '/Start.css';

</style>