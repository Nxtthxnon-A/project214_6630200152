import Typed from "typed.js";

export function TypeAutointroduction(){ //export Function 
        var typed = new Typed(".auto-type", {
          strings: [
            "Nutthanon Athakhan",
            "ณัฐนนท์ อทะขันธ์",
            "Student from Kasetsart University",
            "นักศึกษาจาก มหาวิทยาลัยเกษตรศาสตร์",
          ],
          cursorChar: "✨",
          fadeOut: true,
          fadeOutDelay: 1000,
          typeSpeed: 50,
          backDelay: 1500,
          loop: true,
        });
        var typed_edu = new Typed(".auto-type-education", {
          strings: [
            " โรงเรียนพานทองสภาชนูปถัมภ์",
            "Phanthongsabhachanupathum School",
            "อ.พานทอง จ.ชลบุรี",
            "Phanthong Chonburi",
          ],
          fadeOut: true,
          fadeOutDelay: 1000,
          typeSpeed: 50,
          backDelay: 1500,
          backSpeed: 30,
          loop: true,
        });
        var typed_contact = new Typed(".auto-contact", {
          strings: ["Contact Work", "Contact Others"],
          fadeOut: true,
          fadeOutDelay: 1000,
          typeSpeed: 50,
          backDelay: 1500,
          backSpeed: 50,
          loop: true,
        });
        var typed_skills = new Typed(".auto-skills", {
          strings: ["Python", "C++", "JavaScript", "Java", "SQL"],
          fadeOut: true,
          fadeOutDelay: 1000,
          typeSpeed: 50,
          backDelay: 1500,
          backSpeed: 50,
          loop: true,
        });
    
        // Function Scroll Mouse
        // ฟังก์ชันตรวจจับการเลื่อนและเปลี่ยนสี navbar
        window.addEventListener("scroll", function () {
          const navbar = document.querySelector(".navbar");
          if (window.scrollY > 50 && window.scrollY < 650) {
            console.log('เลื่อนครับ')
            // ถ้าเลื่อนเกิน 50px ให้เพิ่มคลาส scrolled
            navbar.classList.add("scrolled");
          } else {
            console.log('ไม่เลื่อนครับ')
            navbar.classList.remove("scrolled");
          }
        });
}
