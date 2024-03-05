// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({ id: '', title: '' });
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1> post with id = {params.id} opened</h1>
            {isLoading
                ? <Loader />
                : <div > {post.id} {post.title}</div>
            }
            <h1> Comments</h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(com =>
                        <div style={{ marginTop: 15 }}>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>)}
                </div>

            }
        </div>
    )
}

export default PostIdPage;