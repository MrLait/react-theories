import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import PostIdPage from '../../pages/PostIdPage'
import Posts from '../../pages/Posts'

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="about" element={<About />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:id" element={<PostIdPage />} />
                <Route path="*" element={<Navigate to="/posts" replace />} />
            </Routes >
        </div>
    )
}

export default AppRouter
