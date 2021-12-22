import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchPost from '../../../redux/post/postActions';

const PostComp = () => {
    const {post: {posts}} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchPost())
    }, [])
    
    return (
        <div>
            <h1>All Posts</h1>
            {
                !!posts ? <>
                    {
                        posts.map(singlePost => (
                            <h2 key={singlePost.id}>{singlePost.title}</h2>
                        ))
                    }
                </> :
                <h1>loading ...............</h1>
            }
        </div>
    )
}

export default PostComp;