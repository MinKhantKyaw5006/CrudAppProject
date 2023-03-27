import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";


function ShareModal({ modalOpened, setModalOpened }) {
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
        <PostShare/>

    </Modal>
  );
}

export default ShareModal;