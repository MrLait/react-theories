import React from "react";
import PostItem from "./PostItem";

const PostList = (props, remove) => {
    const { postList, title } = props
    if (!postList.length) {
        return (
            <h1
                style={{ textAlign: 'center' }}> Post not found
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            {postList.map((post, index) =>
                <PostItem remove={props.remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;