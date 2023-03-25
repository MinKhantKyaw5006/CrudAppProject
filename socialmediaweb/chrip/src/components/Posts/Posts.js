import React from 'react';
import './Posts.css';
import { PostsData } from '../../Data/PostsData';
import Post from '../Post/Post';

function Posts() {
    return (
        <div className="Posts">
            {PostsData.map((post, id) => {
                return (<div>
                    <Post />
                    
                </div>
                )

            })}

        </div>
    );
}

export default Posts;
