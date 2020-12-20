import Vue from 'vue'
import Router from 'vue-router';
import Dashboard from '@/components/dashboard/Dashboard';
import AddEmployee from '@/components/addEmployee/AddEmployee';
import EditEmployee from '@/components/editEmployee/EditEmployee';
import EnterEmployee from '@/components/editEmployee/EnterEmployee';
import DeleteEmployee from '@/components/deleteEmployee/DeleteEmployee';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
        path:'/add',
        name:'add-employee',
        component:AddEmployee
    },
    {
        path:'/edit/:employee_id',
        name:'edit-employee',
        component:EditEmployee
    },
    {
      path:'/enter',
      name:'enter-employee',
      component:EnterEmployee
    },
    {
      path:'/delete',
      name:'delete-employee',
      component:DeleteEmployee
    }

  ]
})
