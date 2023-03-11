import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import PostIdPage from '../../pages/PostIdPage'
import Posts from '../../pages/Posts'
import { routes } from '../../router'

const AppRouter = () => {
    return (
        <div>
            <Routes>
                {routes.map(route =>
                    <Route path={route.path} element={<route.element />} />
                )}
                <Route path="*" element={<Navigate to="/posts" replace />} />
            </Routes >
        </div>
    )
}

export default AppRouter
