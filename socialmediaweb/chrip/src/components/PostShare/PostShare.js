import React, { useState, useRef } from 'react';
import './PostShare.css';
import Profile from '../../img/profile.jfif'
import { UilScenery, UilSchedule, UilPlayCircle, UilLocationPoint, UilTimes} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/uploadAction';

function PostShare() {
    /*use use state and useref for mananging files , images. image and set image const delcared */
    
    const loading = useSelector((state) => state.postReducer.uploading)
    // const loading = useSelector((state) => state.postReducer ? state.postReducer.uploading : false);

    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const {user} = useSelector ((state)=>state.authReducer.authData)
    const desc = useRef()
    const dispatch = useDispatch()

    /* An important Function 
    
    event is gonna file hidden input by the reference in option
    1.check event contain in file, click on photo button
    2.check availity of image file, 
      a.onclick image ref is triggered, and it will find imageref
      b. <div style={{display: "none"}}>
                        <input type="file" 
                        name="myImage" 
                        ref={imageRef} 
                        onChange ={onImageChange} />
                    </div>
      c.from above code, the imageref will trigger onimageChange 

      d.finally, the onimagechange function will find image in directory for user input
    3.if 0, theres image,
    4.if not, create url for import use image*/

    // const onImageChange= (event)=>{
    //     if (event.target.files && event.target.files[0]){
    //         let img= event.target.files[0];
    //         setImage({
    //             image: URL.createObjectURL (img),
    //         });
    //     }
        


    // }


    const onImageChange= (event)=>{
        if (event.target.files && event.target.files[0]){
            let img= event.target.files[0];
            setImage(img);
        }
        


    }

    const reset = ()=> {
        setImage (null);
        desc.current.value=""
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

        const newPost ={
            userId: user._id,
            desc: desc.current.value
        }

        if(image){
            const data= new FormData ()
            const filename = Date.now() + image.name
            data.append("name", "filename")
            data.append("file", image)
            newPost.image = filename
            console.log(newPost)

            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
        reset()



    }



    return (
        <div className='PostShare'>
            <img src={Profile} alt="" />

            <div>
                <input 
                ref = {desc}
                required
                type="text" placeholder="What's happening" />
                <div className='PostChoice'>
                    {/*photo input */}
                    <div className="option" style={{ color: "var(--photo)" }}
                    //set reference for image photo insertion 
                    onClick={()=>imageRef.current.click()}>
                        <UilScenery />
                        Photo
                    </div>

                    {/*video input */}
                    <div className="option" style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        video
                    </div>

                    {/*location input */}
                    <div className="option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>

                    {/*schedule input */}
                    <div className="option" style={{ color: "var(--shedule)" }}>
                        <UilSchedule />
                        Schedule
                    </div>

                    <button className="button ps-button"
                    onClick={handleSubmit}
                    disabled ={loading}
                    >{loading? "Uploading...": "Share"}</button>

                    {/*give input for importing image */}
                    <div style={{display: "none"}}>

                        <input type="file" 
                        name="myImage" 
                        ref={imageRef} 
                        onChange ={onImageChange} 
                        />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        
                        <span className="circle">

                        <UilTimes onClick ={()=> setImage(null)}/>
                        
                        </span>
                        <img src= {URL.createObjectURL(image)} alt="" />
                    </div>
                )}
            </div>
        </div>

    );
}

export default PostShare;
