import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import Dashboard from './dashboard/dashboard'
import CulterPage from './culter'
import PackingPage from './packing'
import StoragePage from './storage'
import NotFound from '../utils/NotFound/NotFound'

import './admin.scss'

import { useSelector } from 'react-redux'

function Admin() {
    const auth = useSelector(state => state.auth)
    const { isLogged, isAdmin } = auth

    // {
    //     if (isAdmin) 
        return (
        <section id="admin_page">
            <Sidebar />
  

            <Switch>
                <Route path="/admin/dashboard" component={Dashboard} exact />
                <Route path="/admin/culter" component={CulterPage} exact />
                <Route path="/admin/packing" component={PackingPage} exact />
                <Route path="/admin/storage" component={StoragePage} exact />
                {/* <Route component={NotFound}/> */}
            </Switch>

        </section>)
    //     else return(<></>)
    // }


}

export default Admin
