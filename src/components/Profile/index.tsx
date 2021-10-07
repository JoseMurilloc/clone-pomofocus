import React from 'react';

import { Container, Modal } from './styles';
import { IoMdClose } from 'react-icons/io';

interface ProfileProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


function Profile({ visible, setVisible }: ProfileProps) { 
  return (
    <Container>
      <Modal>
        <header>
          <h1>Profile</h1>
          <button 
            onClick={() => setVisible(state => !state )} 
            className="close"
          >
            <IoMdClose size={25} color="rgb(187, 187, 187)"/>
          </button>
        </header>
        <main>
          <img src="https://lh3.googleusercontent.com/a-/AOh14Ggsx2eT_A6emvGukBj5QrwRCqyJNSxD-5j5FvFLpw=s96-c" alt="profile"/>

          <span>José Murillo</span>

        </main>
        <footer>
          <button className="buttonCancel">Cancel</button>
          <button className="buttonSave">Save</button>
        </footer>
      </Modal>
    </Container>
  );
};

export default Profile;
