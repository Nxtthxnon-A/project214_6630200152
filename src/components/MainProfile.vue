<template>
  <div class="content">
    <div class="myprofile">
      <img class="image-me" src="/public/Image/Image-about/me2.jpg" />
      <h1 class="text-profile">My Profile</h1>
      <hr>
      
      <p class="txtprofile" id="id"><strong>Name: </strong> {{students.id}}</p>
      <p class="txtprofile" id="fullname"><strong>Name: </strong> {{students.name}}</p>
      <p class="txtprofile" id="univsersity"><strong>University: </strong> {{students.University}}</p>
      <p class="txtprofile" id="oldschool"><strong>oldschool: </strong> <a href="#">{{students.OldHighschool}}</a> </p>
      <p class="txtprofile" id="Address"><strong>Address: </strong> {{students.Address}}</p>
      <p class="txtprofile" id="Gmail"><strong>Gmail: </strong> {{students.Gmail}}</p>
      <button class="btn btn-primary btn-student" @click="editStudent(students)">EditProfile</button>

    </div>

    <div class="main-right-top">
      <div class="item-education">
        <p class="education__title">Educational information</p>
        <hr>
        <p class="education education__level"><strong>Education levels: </strong>{{students.Educationlevels}}</p>
        <p class="education education__status"><strong>Student Status: </strong>{{students.Studentstatus}}</p>
        <p class="education education__degree"><strong>Degree Name: </strong>{{students.Degreename}}</p>
        <p class="education education__major"><strong>Major: </strong>{{students.major}} </p>
        <p class="education education__year"><strong>Year: </strong>{{students.year}} <button class="btn btn-primary" @click="editEducation(students)">Edit</button>  </p>
      </div>
      
        
    </div>
    
    <div class="main-right-bottom">
      <p class="txttitlegrade">Grade result</p>
      <hr>
      <div class="container-grade">
        <div class="box-gtade">
            <table style="width:100%">
              <tr>
                  <th>Credit</th>
                  <th>Gpa</th>
                </tr>
                <tr >
                  <td class="sumgrade sumcredit">{{students.credit}}</td>
                  <td class="sumgrade sumgpa">{{students.Gpa}}</td>
                </tr>
            </table>
        </div>
      </div>
    </div>


    <!-- ป๊อบอัพ (Modal) สำหรับการแก้ไข -->
    <div v-if="showEditModalProfile" class="modal">
      <div class="modal-content">
        <h2>Edit Profile</h2>
        <form @submit.prevent="updateProfile">
          <div>
            <label>ID:</label>
            <input v-model="editProfile.id"  :disabled="!isNewSubject" />
          </div>
          <div>
            <label>Name:</label>
            <input v-model="editProfile.name"/>
          </div>
          <div>
            <label>University:</label>
            <input v-model="editProfile.University"/>
          </div>
          <div>
            <label>oldschool:</label>
            <input v-model="editProfile.OldHighschool"/>
          </div>
          <div>
            <label>Address:</label>
            <input v-model="editProfile.Address"/>
          </div>
          <div>
            <label>Gmail:</label>
            <input v-model="editProfile.Gmail"/>
          </div>
          <div class="modal-buttons">
            <button type="submit" class="btn btn-success">Save</button>
            <button @click="CloseModal" class="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
    <!-- End ป๊อบอัพ (Modal) สำหรับการเพิ่มข้อมูล -->



     <!-- ป๊อบอัพ (Modal) สำหรับการแก้ไข -->
    <div v-if="showEditModalEducation" class="modal">
      <div class="modal-content">
        <h2>Edit Education</h2>
        <form @submit.prevent="updateEducation">
          <div>
            <label>Educationlevels:</label>
            <input v-model="editEducational.Educationlevels"   :disabled="!isNewSubject" />
          </div>
          <div>
            <label>Studentstatus:</label>
            <input v-model="editEducational.Studentstatus" />
          </div>
          <div>
            <label>DegreeName:</label>
            <input v-model="editEducational.Degreename" />
          </div>
          <div>
            <label>Major:</label>
            <input v-model="editEducational.major" />
          </div>
          <div>
            <label>Year:</label>
            <input v-model="editEducational.year" />
          </div>
          <div>
            <label>Credit:</label>
            <input v-model="editEducational.credit" />
          </div>
          <div>
            <label>Gpa:</label>
            <input v-model="editEducational.Gpa" />
          </div>
          <div class="modal-buttons">
            <button type="submit" class="btn btn-success">Save</button>
            <button @click="CloseModal" class="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
    <!-- End ป๊อบอัพ (Modal) สำหรับการเพิ่มข้อมูล -->

  </div>
</template>

<script scoped>
export default {
  name: "MainProfile",
  data() {
    return {
      students: [],
      
      editProfile: {}, // เปลี่ยนจากอาเรย์เป็นออบเจ็กต์
      editEducational:{},

      showEditModalEducation: false,
      showEditModalProfile: false,
    };
  },
  mounted() {
    this.fetchStudents(); // เปลี่ยนชื่อเพื่อหลีกเลี่ยงความสับสนกับ subjects
  },
  methods: {
    fetchStudents() {
      fetch(`http://localhost:3000/student`)
        .then(res => res.json())
        .then(data => {
          this.students = data[0]; // สมมติว่าคุณต้องการนักเรียนคนแรก
        })
        .catch(err => console.error(err.message));
    },


    editStudent(students) { // แก้ไขข้อมูลนักเรียน
      console.log('Clicked edit button!');
      this.editProfile = {...students}; // คัดลอกข้อมูลปัจจุบันของ students ไปยัง editProfile
      console.log(this.editProfile);
      this.showEditModalProfile = true;
    },
    editEducation(students) { // แก้ไขข้อมูลนักเรียน
      console.log('Clicked edit button!');
      this.editEducational = {...students}; // คัดลอกข้อมูลปัจจุบันของ students ไปยัง editEducational
      console.log(this.editEducational);
      this.showEditModalEducation = true;
    },



    async updateProfile() { // อัพเดทข้อมูลนักเรียน
      try {
        const response = await fetch(`http://localhost:3000/student/${this.editProfile.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.editProfile),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || 'Server error');
        }

        this.showEditModalProfile = false;
        this.fetchStudents(); // รีเฟรชข้อมูลหลังจากอัพเดทสำเร็จ
        alert('อัพเดทข้อมูลนักเรียนสำเร็จ!');
      } catch (error) {
        console.error('Error updating student:', error.message);
        alert(`ไม่สามารถอัพเดทได้: ${error.message}. Status: ${error.status || 'Unknown'}`);
      }
    },
    async updateEducation() { // อัพเดทข้อมูลนักเรียน
      try {
        const response = await fetch(`http://localhost:3000/student/${this.editEducational.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.editEducational),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || 'Server error');
        }

        this.showEditModalEducation = false;
        this.fetchStudents(); // รีเฟรชข้อมูลหลังจากอัพเดทสำเร็จ
        alert('อัพเดทข้อมูลนักเรียนสำเร็จ!');
      } catch (error) {
        console.error('Error updating student:', error.message);
        alert(`ไม่สามารถอัพเดทได้: ${error.message}. Status: ${error.status || 'Unknown'}`);
      }
    },

    CloseModal() { // ปิดป๊อบอัพ
      this.showEditModalProfile = false;
      this.showEditModalEducation = false;
    },
  }


};
</script>

<style scoped>
/*Main Content*/
a{
  text-decoration: none;
  color: black;
}
.content {
  display: grid;
  grid-template-columns: 500px auto; /*Left Right*/
  grid-template-rows: 260px minmax(250px, auto); /*Top Mid Bottom*/
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
    left: 135px;
    top: 5px;
    width: 35%;
    height: 38%;
    border-radius: 30px;
}
.text-profile{
    position: relative;
    font-size: 20px;
    left: 20px;
}
.txtprofile{
  position: relative;
  left: 20px;
  font-size: 15px;
  color: black;
}




.main-right-top {
  grid-area: content_right;
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 30px;
  margin-right: 20px;
}
.education__title{
  font-weight: bold;
  color: black;
  font-size: 20px;
}
.item-education{
  position: relative;
  left: 10px;
  font-size: 15px;
  color: black;
}
.btn-primary{
  position: relative;
  left:450px; 
  bottom: 10px;
  font-size: 15px;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
}
.btn-student{
  position: relative;
  left: 350px;
  bottom: 10px;
  font-size: 15px;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
}





.main-right-bottom {
  grid-area: content_bottom;
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 30px;
  margin-right: 20px;
}
.txttitlegrade{
  position: relative;
  left: 10px;
  font-size: 20px;
  font-weight: bold;

}
.txtgrade{
  position: relative;
  margin: 40px;
  margin-top:5px;
  left: 10px;
  font-weight: bold;
  font-size: 20px;
}
table, th, td {
  border:1px solid black;
  text-align: center; /* จัดข้อความให้อยู่กลางในแนวนอน */
  vertical-align: middle; /* จัดข้อความให้อยู่กลางในแนวตั้ง */
  
}
.sumgrade{
  font-size: 20px;
  font-weight: bold;
}
.container-grade{
  display: flex;
  justify-content: center;
  align-items: center;
}


.box-gtade{
  border: 1px solid black;
  width: 400px;
  height: 130px;
  justify-content: center;
  align-content: center;
  display: flex;
}



/* สไตล์สำหรับโมดัล (Popup) */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.modal-content label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.modal-content input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.modal-buttons .btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-buttons .btn-success {
  background-color: #28a745;
  color: white;
}

.modal-buttons .btn-success:hover {
  background-color: #218838;
}

.modal-buttons .btn-secondary {
  background-color: #6c757d;
  color: white;
}

.modal-buttons .btn-secondary:hover {
  background-color: #b32424;
}

</style>