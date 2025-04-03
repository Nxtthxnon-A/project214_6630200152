<template>
  <div class="content">
    <div class="head-content">
      <h1 class="txttitle">Data</h1>
      <div class="button">
        <button class="btn btn-primary" @click="editSubject">Add Data</button>
        <!-- <button class="btn btn-secondary" @click="deleteAllData">Delete All Data</button> -->
      </div>
    </div>
    <div class="body-content">
      <table style="width:100%">
        <thead class="title-table">
          <tr>
            <th>ID</th>
            <th>Name Subject</th>
            <th>Credit</th>
            <th>Grade</th>
            <th>Manage Data</th>
          </tr>
        </thead>
        <tbody class="body-table">
          <tr v-for="item in subjects" :key="item.id">
            <td class="txt Id">{{ item.id }}</td>
            <td class="txt subject">{{ item.Subject }}</td>
            <td class="txt credit">{{ item.Credit }}</td>
            <td class="txt grade">{{ item.Gpa }}</td>
            <td class="button">
              <button class="btn button-edit btn-warning" @click="editSubject(item)">Edit</button>
              <button class="btn button-delete btn-danger" @click="deleteSubject(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>



    <!-- ป๊อบอัพ (Modal) สำหรับการแก้ไข -->
    <div v-if="showEditModal" class="modal">
      <div class="modal-content">
        <h2>Edit Subject</h2>
        <form @submit.prevent="updateSubject">
          <div>
            <label>ID:</label>
            <input v-model="editedSubject.id" :disabled="!isNewSubject" />
          </div>
          <div>
            <label>Subject Name:</label>
            <input v-model="editedSubject.Subject" />
          </div>
          <div>
            <label>Credit:</label>
            <input type="number" v-model.number="editedSubject.Credit" />
          </div>
          <div>
            <label>Grade:</label>
            <input v-model.number="editedSubject.Gpa" />
          </div>
          <div class="modal-buttons">
            <button type="submit" class="btn btn-success">Save</button>
            <button @click="closeModal" class="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
    <!-- End ป๊อบอัพ (Modal) สำหรับการเพิ่มข้อมูล -->



  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      subjects: [],
      editedSubject: [],
      showEditModal: false,
      isNewSubject: false, // เพิ่มตัวแปรเพื่อระบุว่าเป็น subject ใหม่หรือไม่
    };
  },
  mounted() {
    this.fetchSubjects();
  },

  methods: {

    fetchSubjects() { // ฟังก์ชันสำหรับดึงข้อมูล subject
      fetch(`http://localhost:3000/Subjects`)
        .then(res => res.json())
        .then(data => {
          this.subjects = data;
        });
    },


    editSubject(item) { // แก้ไขข้อมูล subject
      this.showEditModal = true;
      if(!item || item.id === 0 || item.id === undefined){
        this.isNewSubject = true;
        this.editedSubject = { id: 0, Subject: '', Credit: 0, Gpa: 0 };
      }else{
        this.isNewSubject = false;
          this.editedSubject = { ...item };
      }
    },


    async updateSubject() { // อัปเดตข้อมูล subject
      const method = this.isNewSubject ? 'POST' : 'PATCH';

      try {
        const response = await fetch(`http://localhost:3000/Subjects/${this.editedSubject.id}`, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.editedSubject),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || 'Server error');
        }

        this.showEditModal = false;
        await this.fetchSubjects(); // รีเฟรชข้อมูล
        alert('Subject updated successfully!');
      } catch (error) {
        console.error('Error updating subject:', error.message);
        alert(`Failed to update: ${error.message}. Status: ${error.status || 'Unknown'}`);
      }
    },

    deleteSubject(id) {
      alert(id)
        if (!id) {
          alert('Invalid ID. Cannot delete subject.');
          return;
        }
        if (confirm('คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลนี้?')) {
          const url = `http://localhost:3000/Subjects/${id}`; // ใช้ encodeURIComponent เพื่อจัดการสตริง
          fetch(url, {
            method: 'DELETE',
          })
          .then(response => {
            if (!response.ok) {
              // ตรวจสอบสถานะ HTTP ที่เฉพาะเจาะจงสำหรับการลบ (เช่น 204 No Content)
              if (response.status === 404) {
                throw new Error('ไม่พบข้อมูลที่ต้องการลบ');
              } else if (response.status === 500) {
                throw new Error('เกิดข้อผิดพลาดจากเซิร์ฟเวอร์');
              } else {
                throw new Error('ลบข้อมูลไม่สำเร็จ');
              }
            }
            // ถ้าลบสำเร็จ (ปกติเซิร์ฟเวอร์จะส่ง 204 No Content)
            return response.status; // ไม่ต้องแปลงเป็น JSON เพราะอาจไม่มีข้อมูลกลับมา
          })
          .then(() => {
            alert('ลบข้อมูลสำเร็จแล้ว');
            this.fetchSubjects(); // ดึงข้อมูลใหม่หลังลบเสร็จ
          })
          .catch(error => {
            console.error('Error:', error);
            alert('เกิดข้อผิดพลาดในการลบข้อมูล: ' + error.message);
          });
        }
      },


    closeModal() {
      this.showEditModal = false;
      this.editedSubject = null;
    }

  },
};
</script>

<style scoped>
/* รักษาสไตล์เดิมทั้งหมด */
.content {
  display: grid;
  grid-template-columns: 500px auto;
  grid-template-rows: 120px 400px;
  grid-template-areas:
    "head-content head-content"
    "content content";
  column-gap: 30px;
  row-gap: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.head-content {
  grid-area: head-content;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title-table tr th {
  border: 1px solid black;
  padding: 10px;
}

.txttitle {
  margin-left: 10px;
}

.btn {
  width: 150px;
  height: 40px;
}

.btn-primary {
  margin-right: 10px;
}

.btn-primary {
  margin-left: 10px;
}

.body-content {
  grid-area: content;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 65vh;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 100;
}

.body-table tr td {
  border: 1px solid black;
  padding: 10px;
}

.credit, .grade {
  text-align: center;
}

.button-edit {
  margin-right: 20px;
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
  width: 300px;
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