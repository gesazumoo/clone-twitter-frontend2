import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue' // LoginPage 컴포넌트 경로
import SignUpPage from '../views/SignUpPage.vue'// SignupPage 컴포넌트 경로
import ComputedComponent from '../views/ComputedComponent.vue'
import MethodComponent from '../views/MethodComponent.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage
  },
  {
    path: '/computed',
    name: 'computed',
    component: ComputedComponent
  },
  {
    path: '/method',
    name: 'method',
    component: MethodComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
//   history: createWebHistory()
  routes
})

export default router
