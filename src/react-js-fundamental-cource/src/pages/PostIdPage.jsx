import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({ id: '', title: '' });
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id)
    }, [])
    return (
        <div>
            <h1> post with id = {params.id} opened</h1>
            {isLoading
                ? <Loader />
                : <div > {post.id} {post.title}</div>}
        </div>
    )
}

export default PostIdPage;