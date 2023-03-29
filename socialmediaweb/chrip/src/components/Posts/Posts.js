import React, { useEffect } from 'react';
import './Posts.css';
// import { PostsData } from '../../Data/PostsData';
import Post from '../Post/Post';
import { useDispatch , useSelector} from 'react-redux';
import { getTimelinePosts } from '../../actions/postAction';
import { useParams } from 'react-router-dom';


function Posts() {

    const dispatch = useDispatch()
    const {user}= useSelector ((state)=> state.authReducer.authData)
    let {posts, loading} =useSelector((state)=> state.postReducer)
    const params = useParams()

    useEffect(()=>{
        dispatch(getTimelinePosts(user._id))
    },[])

    if(!posts) return "no posts";
    if(params.id) posts= posts.filter((post)=>posts.userId ===params.id)

    return (
        <div className="Posts">
            
            {loading? "Fetching Posts ...":
            posts.map((post, id) => {
                return (<div key={id}> 
                    <Post data={post} id={id}/>
                    
                </div>
                )

            })}

        </div>
    );
}

export default Posts;
