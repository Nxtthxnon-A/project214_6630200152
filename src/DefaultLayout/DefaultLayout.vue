<template>
  <div class="container-fluid">
    <!-- Container -->
    <div class="contianer-eieie">
      <!-- Background -->
      <div class="background-About">
        <!-- Header คงที่ -->
        <div class="item Page-Header">
          <div class="menu-header">
            <div class="menu-header-left">
              <img
                class="logo-menu-header" @click="GotoBackIntroduction"
                src="/public/Image/font-nutthanon-netfilx.png"
              />
            </div>
            <div class="menu-header-mid">
              <p class="text-header-mid">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Soluta, ratione?
              </p>
            </div>
            <div class="menu-header-right">
              <p id="Time-header"></p>
              <p id="Date-header"></p>
            </div>
          </div>
        </div>
        <!-- End Header คงที่ -->

        <!-- Left Bar คงที่ -->
       <div class="item Page-LeftBar">
            <div class="menu-left">
                <a @click="ClickLeftBar('mainprofile')" class="all-txt-image"><span class="image-text-wrapper"><img class="Image-nut" src="/public/Image/Image-about/dashboard.png"/><p class="text">My Dashboard</p></span></a>
                <!-- <a @click="ClickLeftBar('account')" class="all-txt-image"><span class="image-text-wrapper"><img class="Image-nut" src="/public/Image/Image-about/profile.png"/><p class="text">My Account</p></span></a> -->
                <a @click="ClickLeftBar('education')" class="all-txt-image"><span class="image-text-wrapper"><img class="Image-nut" src="/public/Image/Image-about/graduation.png"/><p class="text">Education</p></span></a>
                <a @click="ClickLeftBar('Test')" class="all-txt-image"><span class="image-text-wrapper"><img class="Image-nut" src="/public/Image/Image-about/social-media.png"/><p class="text">Support</p></span></a>
            </div>
        </div>
        <!-- End Left Bar คงที่ -->



        <!-- Main Content เปลี่ยนตาม Router -->
        <div class="item Page-Maincontent">
          <router-view />
        </div>
        <!-- End  Main Content เปลี่ยนตาม Router -->



        <!-- Footer คงที่ -->
        <div class="item Page-Footer">
          <div class="menu-Footer">
            <h1>Footer</h1>
          </div>
        </div>
        <!-- End Footer คงที่ -->
      </div>
      <!-- End Background -->
    </div>
    <!-- End Container -->
  </div>
</template>

<script>
export default {
  name: "about",
  data(){
    return {
        
    };
  },
  mounted() {
        let Time_header = document.getElementById("Time-header");
        let Date_month_year = document.getElementById("Date-header");
        const Object_Day = [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",];
        const months = [
        "January","February","March","April","May","June","July","August","September","October","November","December",];

        let Date_Time = new Date();
        const hours = Date_Time.getHours();
        const minutes = Date_Time.getMinutes();
        Time_header.innerHTML = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
        Date_month_year.innerHTML = `${Object_Day[Date_Time.getDay() - 1]}, ${Date_Time.getDate()} ${months[Date_Time.getMonth()]} ${Date_Time.getFullYear()}`;
  },
  methods: {
    GotoBackIntroduction() {
      this.$router.push("/introduction");
    },
    ClickLeftBar(paths){
        if(paths === 'Test'){
            alert(`Test Waiting`);
        }else{
            this.$router.push(`${paths}`); // ใช้ base path ของ DefaultLayout
        }
    }

  },
};
</script>

<style scoped>
.container-fluid {
  /* background-color: #141414; */
  /* background-image: url('https://4kwallpapers.com/images/walls/thumbs_3t/8324.png'); */
  background-color: rgb(175, 175, 174);
  height: 100vh;
  width: 100vw;
  /* ให้ body และ html ใช้ความสูงเต็มจอ */
  margin: 0;
  /* ลบ margin ของ body */
  overflow: hidden;
  font-family: Verdana, Tahoma, sans-serif;
}
a {
  text-decoration: none;
}

/*Background Grid*/
.background-About {
  height: 100vh;
  display: grid;
  grid-template-columns: 280px auto; /*Left Right*/
  grid-template-rows: 100px auto auto; /*Top Mid Bottom*/
  grid-template-areas:
    "Header Header"
    "LeftBar main"
    "Footer Footer";
}
.Page-Header {
  grid-area: Header;
  background-color: #141414;
}
.Page-LeftBar {
  grid-area: LeftBar;
  background-color: #474747;
}
.Page-Maincontent {
  grid-area: main;
  border-radius: 30px;
  background-color: rgb(175, 175, 174);
}
.Page-Footer {
  grid-area: Footer;
  background-color: rgb(35, 35, 35);
  color: white;
}

.item {
  padding: 10px;
}
/* End Background Grid*/

/*Header*/
.menu-header {
  display: grid;
  grid-template-columns: 260px auto 245px; /*Left Right*/
  grid-template-areas: "Logo Topic Time";
  column-gap: 30px;
  z-index: 1;
  color: white;
}
.menu-header-left {
  grid-area: Logo;
  /* border: 1px solid white; */
  align-items: center;
  justify-content: center;
  display: flex;
}
.logo-menu-header {
  width: 200px;
}
.menu-header-mid {
  grid-area: Topic;
  /* border: 1px solid white; */
}
.text-header-mid{
    margin-left:20px;
}
.menu-header-right {
  display: flex;
  flex-direction: column;
  grid-area: Time;
  /* border: 1px solid white; */
  background-color: #3d3b40;
  border-radius: 10px;
  /* align-items: center;
            justify-content: center; */
}

/*End Header*/

/*left Bar*/

.image-text-wrapper {
  display: flex; 
  margin-top: 20px;
  align-items: center;
  gap: 10px; 
}

.all-txt-image {
  margin-bottom: 30px;
  margin-left: 30px;
  color: white;
  text-decoration: none; 
  display: block; 
  cursor: pointer;
}

.Image-nut {
  width: 50px;
  margin-right: 10px;
}

.text {
  margin: 0; 
}

/*End Left Bar*/

/*Main Content*/
.content {
  display: grid;
  grid-template-columns: 500px auto; /*Left Right*/
  grid-template-rows: 250px minmax(250px, auto); /*Top Mid Bottom*/
  grid-template-areas:
    "content content_right"
    "content content_bottom";
  column-gap: 30px;
  row-gap: 30px;
  margin-top: 15px;
  margin-bottom: 5px;
}
.myprofile {
  grid-area: content;
  background-color: white;
  /* border: 1px solid black; */
  margin-left: 10px;
  border-radius: 30px;
}
.image-me{
    position: relative;
    left: 125px;
    top: 5px;
    width: 45%;
    height: 50%;
    border-radius: 30px;
}
.text-profile{
    position: relative;
    font-size: 20px;
    left: 20px;
}
.main-right-top {
  grid-area: content_right;
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 30px;
  margin-right: 20px;
}
.main-right-bottom {
  grid-area: content_bottom;
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 30px;
  margin-right: 20px;
}
/*End Main Content*/



/*Header*/
#Date-header {
  font-size: 16px;
  margin: 0;
  margin-left: 10px;
}
#Time-header {
  font-size: 16px;
  margin: 0;
  margin-left: 10px;
  color: #00ff9c;
}

/*End Main Content*/


.menu-Footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>