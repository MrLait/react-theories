import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {
    const { postList, title } = props
    return (<div>
        <h1 style={{ textAlign: 'center' }}>
            {title}
        </h1>
        {postList.map((post, index) =>
            <PostItem number={index + 1} post={post} key={post.id} />
        )}
    </div>
    )
}

export default PostList;