import React from 'react';
import {Route} from "react-router-dom"
import HomeLayout from '../../layouts/homeLayout/HomeLayout';
import {Home} from "../../pages"
function HomeRoute() {
  return (
    <Route path="/" element={<HomeLayout/>} >
        <Route path="/home" element={<Home />} />
    </Route>
  )
}

export default HomeRoute