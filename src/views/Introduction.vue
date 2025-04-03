<template>
  <div class="container-fluid">
    <nav class="navbar">
      <!-- Navbar -->
      <a @click="GoBackStart"><img class="logonavbar" src="/public/Image/font-nutthanon-netfilx.png"/>
      </a>
      <div class="menuul">
        <ul class="navul">
          <a href="#Home" class="menu menu1">Home</a>
          <a href="#About" class="menu menu2">About</a>
          <a href="#Education" class="menu menu3">Education</a>
          <a href="#Contact" class="menu menu4">Contact</a>
          <a href="#Skills" class="menu menu5">Skills</a>
        </ul>
      </div>
    </nav>
    <!-- End Navbar -->

    <div class="wallpaper-body">
      <!-- Wallpaper Body -->
      <div class="section" id="Home">
        <!-- Home-->
        <div class="introduction-home">
          <h1>bonjour ,I'm <span class="auto-type"></span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            id optio quis. Error, id non quisquam tempora mollitia sed qui iste
            aspernatur, eum consequatur atque quis. Perferendis voluptatibus
            reiciendis distinctio?
          </p>
          <!-- <a class="btn btxhome">WATCH</a> -->

          <!-- <a class="btn btn_spacex">SPACEX</a> -->
        </div>
      </div>
      <!-- End Home-->

      <div class="section" id="About">
        <!-- About-->
        <div class="introduction-about">
          <h1>bonjour,About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            provident iste omnis explicabo ipsa, maiores,<br> perferendis, enim
            totam beatae dolorum doloremque amet iure quia? Maxime dolor sequi
            ipsam rem nulla.
          </p>
          <img class="image-me" src="/public/Image/Image-about/me3.jpg">
          <a @click="GotoAbout('mainProfile')" class="btn btxabout">WATCH</a>
        </div>
      </div>
      <!-- End About-->

      <div class="section" id="Education">
        <!-- Education-->
        <div class="introduction-education">
          <h1>
            Welcome <span class="text-to">To</span>,<span
              class="auto-type-education"
            ></span>
          </h1>
          <p class="lorem-school">
           ชมพูพันธุ์ทิพย์
          </p>
          <a href="http://www.ptsp.ac.th/" target="_blank" class="btn btxeducation">WATCH</a>
          <a href="https://www.facebook.com/ptsp.ac.th" target="_blank" class="btn btxeducation-fanpage">MORE</a>
        </div>
      </div>
      <!-- End Education-->

      <div class="section" id="Contact">
        <!-- Contact-->
        <div class="introduction-contact">
          <h1 class="h1-contact">
            bonjour, what do you want?<span class="auto-contact"></span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            provident iste omnis explicabo ipsa, maiores, perferendis, enim
            totam beatae dolorum doloremque amet iure quia? Maxime dolor sequi
            ipsam rem nulla.
          </p>
          <a href="https://www.facebook.com/" target="_blank" class="btn btxcontact">CONTACT</a>
        </div>
      </div>
      <!-- End Contact-->

      <div class="section" id="Skills">
        <!-- Skills-->
        <div class="introduction-skills">
          <h1>Skills Programming, <span class="auto-skills"></span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            provident iste omnis explicabo ipsa, maiores, perferendis, enim
            totam beatae dolorum doloremque amet iure quia? Maxime dolor sequi
            ipsam rem nulla.
          </p>
          <a class="btn btxskills">MORE</a>
        </div>
      </div>
      <!-- End Skills-->
    </div>
    <!--  End Wallpaper Body -->

    <!-- Footer -->
    <div class="Footer">
      <p class="header-text-footer">
        <span>Nutthanon © 5090 Ti</span>
      </p>
    </div>
    <!-- End Footer -->
  </div>
</template>

<script>

import { TypeAutointroduction } from "@/app.js"; //Import Function

export default {
  name: "Introduction",
  data() {
    return {};
  },
  components: {},
  methods: {
    GotoAbout(path){
      this.$router.push(`/defaultLayout/${path}`);
    },
    GoBackStart(){
      this.$router.push('/');
    },
    setupSmoothScrolling() {
      // Add smooth scrolling for all anchor links
      const menuLinks = document.querySelectorAll('.menu');
      menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if(targetElement) {
            // Smooth scroll to target
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
      
      // Handle navbar background change on scroll
      window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50 && window.scrollY <600) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  },
  mounted() {
    //Use Function
    TypeAutointroduction();
    
    // Add fade-in effect when page loads
    window.onload = () => {
      document.body.classList.add("fade-in"); // เพิ่มคลาสเพื่อทำให้หน้าใหม่ fade in
      
      // Setup smooth scrolling after page is loaded
      this.setupSmoothScrolling();
    };
    
    // Setup smooth scrolling immediately in case window already loaded
    this.setupSmoothScrolling();
  },
};
</script>

<style >
@import '/Style.css';
</style>