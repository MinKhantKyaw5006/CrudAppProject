//this code funcion is from Mantime.dev/core/modal/ 
// a code for form input modal


// import { useDisclosure } from '@mantine/hooks';
// import { Modal, Button, Group } from '@mantine/core';

// function Demo() {
//   const [opened, { open, close }] = useDisclosure(false);

//   return (
//     <>
//       <Modal opened={opened} onClose={close} title="Authentication">
//         {/* Modal content */}
//       </Modal>

//       <Group position="center">
//         <Button onClick={open}>Open modal</Button>
//       </Group>
//     </>
//   );
// }

//latest version origin

// import { Modal, useMantineTheme } from "@mantine/core";
// import './ProfileModal.css'

// function ProfileModal({ modalOpened, setModalOpened }) {
//   const theme = useMantineTheme();

//   return (
//     <Modal
//       overlayColor={
//         theme.colorScheme === "dark"
//           ? theme.colors.dark[9]
//           : theme.colors.gray[2]
//       }
//       overlayOpacity={0.55}
//       overlayBlur={3}
//       size="40%"
//       opened={modalOpened}
//       onClose={() => setModalOpened(false)}
//     >
//       <form className="infoForm">
//         <h3>Your info</h3>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="FirstName"
//             placeholder="First Name"
//           />

        
//         </div>

//         <div>
//         <input
//             type="text"
//             className="infoInput"
//             name="LastName"
//             placeholder="Last Name"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="worksAT"
//             placeholder="Works at"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="livesIN"
//             placeholder="LIves in"
//           />

         
//         </div>

//         <div> <input
//             type="text"
//             className="infoInput"
//             name="Country"
//             placeholder="Country"
//           />
//           </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             placeholder="RelationShip Status"
//           />
//         </div>


//         <div>
//             Profile Image 
//             <input type="file" name='profileImg'/>
//             Cover Image
//             <input type="file" name="coverImg" />
//         </div>

//         <button className="button infoButton">Update</button>
//       </form>
//     </Modal>
//   );
// }

// export default ProfileModal;




import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/uploadAction";
import { updateUser } from "../../actions/userAction";
// import { uploadImage } from "../../api/UploadRequest";
import './ProfileModal.css'

function ProfileModal({ modalOpened, setModalOpened , data}) {
  const theme = useMantineTheme();
  const {passwood,...other} = data;
  const [formData, setFormdata] = useState(other);
  const [profileImage,setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const dispatch = useDispatch()
  const param = useParams()
  const {user} = useSelector((state)=>state.authReducer.authData)

  const handleChange = (e)=>{
    setFormdata({...formData, [e.target.name]: e.target.value})
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };
  

  const handleSubmit =(e)=>{
    e.preventDefault()
    let UserData = formData;
    if(profileImage){
      const data = new FormData();
      const fileName = Date.now()+ profileImage.name;
      data.append("name", fileName);
      data.append("file",profileImage);
      UserData.profilePicture =fileName;

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    if(coverImage){
      const data = new FormData();
      const fileName = Date.now()+ coverImage.name;
      data.append("name", fileName);
      data.append("file",coverImage);
      UserData.coverPicture =fileName;

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(updateUser(param.id, UserData))
    setModalOpened(false);


  }

  return (
    <Modal
      overlaycolor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayopacity={0.55}
      overlayblur={3}
      size="40%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value = {formData.firstname}
          />

        
        </div>

        <div>
        <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value = {formData.lastname}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
            onChange={handleChange}
            value = {formData.worksAt}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesin"
            placeholder="LIves in"
            onChange={handleChange}
            value = {formData.livesin}
          />

         
        </div>

        <div> <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value = {formData.country}
            
          />
          </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="relationship"
            placeholder="RelationShip Status"
            onChange={handleChange}
            value = {formData.relationship}
          />
        </div>


        <div>
            Profile Image 
            <input type="file" name='profileImage' onChange={onImageChange}/>
            Cover Image
            <input type="file" name="coverImage" onChange={onImageChange}/>
        </div>

        <button className="button infoButton" onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;