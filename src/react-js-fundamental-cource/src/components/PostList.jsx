import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {
    const { postList, title } = props
    console.log(props);
    console.log(postList);
    return (<div>
        <h1 style={{ textAlign: 'center' }}>
            {title}
        </h1>
        {postList.map(post =>
            <PostItem post={post} key={post.id} />
        )}
    </div>
    )
}

export default PostList;