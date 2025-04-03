import { createRouter, createWebHistory } from 'vue-router';
import Start from '@/views/Start.vue'
import Introduction from '@/views/Introduction.vue';

//Components
import DefaultLayout from '@/DefaultLayout/DefaultLayout.vue';
import MainProfile from '@/components/MainProfile.vue';
import Account from '@/components/Account.vue';
import Education from '@/components/Education.vue';

const routes = [
  {
    path: '/defaultLayout',
    name:'defaultLayout',
    component: DefaultLayout,
    children:[
      // เส้นทางที่ต้องการมุ่งตรง
      {
        path: '', // เส้นทางว่างหมายถึง root ของ Layout นี้
        redirect: 'mainProfile', // เปลี่ยนเส้นทางไปยัง Dashboard ทันที
      },

      // เส้นทางสำหรับ Componnnent ต่างๆ เกี่ยวกับ DefaultLayout
      {
        path: 'mainProfile', // เส้นทางสำหรับ MainProfile
        name: 'mainProfile',
        component: MainProfile, // ใช้ MainProfile เป็น Main Content
      },
      {
        path: 'account',
        name: 'account',
        component:Account
      },
      {
        path: 'education',
        name: 'education',
        component:Education
      },
    ]
  },
  {
        path:'/',
        name:'start',
        component: Start
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: Introduction
  },
    
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
