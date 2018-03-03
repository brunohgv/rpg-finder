import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tables from '@/components/Rpgapp/Tables'
import CreateTable from '@/components/Rpgapp/CreateTable'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import Table from '@/components/Rpgapp/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/table/new',
      name: 'CreateTable',
      component: CreateTable
    },
    {
      path: '/tables/:id',
      name: 'Table',
      props: true,
      component: Table
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ],
  mode: 'history'
})
