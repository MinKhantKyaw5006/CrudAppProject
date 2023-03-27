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
import './ProfileModal.css'

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

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
            name="FirstName"
            placeholder="First Name"
          />

        
        </div>

        <div>
        <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works at"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="LIves in"
          />

         
        </div>

        <div> <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
          </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
          />
        </div>


        <div>
            Profile Image 
            <input type="file" name='profileImg'/>
            Cover Image
            <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;