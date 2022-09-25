import React from 'react'
import { Route,Routes } from 'react-router-dom'

import { BackgroundColorChanger } from './Pages/BackgroundColorChanger'
import { Calculator } from './Pages/Calculator'
import { Index } from './Pages/Index'

export const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<Index/>}></Route>
            <Route path="/bgcolor/:colorname" element={<BackgroundColorChanger/>}></Route>
            <Route path="calculator" element={<Calculator/>}></Route>
        </Routes>
    )
}
 