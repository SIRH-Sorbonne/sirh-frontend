import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recruitment from '../views/Recruitment.vue'
import EmployeeManagement from '../views/EmployeeManagement.vue'
import LearningAndDevelopment from '../views/LearningAndDevelopment.vue'
import TimeAndAttendance from '../views/TimeAndAttendance.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/recruitment', name: 'Recruitment', component: Recruitment },
  { path: '/employee-management', name: 'EmployeeManagement', component: EmployeeManagement },
  { path: '/learning-and-development', name: 'LearningAndDevelopment', component: LearningAndDevelopment },
  { path: '/time-and-attendance', name: 'TimeAndAttendance', component: TimeAndAttendance },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
