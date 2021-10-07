import React from 'react';

import { Container } from './styles';
import { IoMdClose } from 'react-icons/io';

const Profile = () => {
  return (
    <Container>
      <header>
        <h1>Profile</h1>
        <IoMdClose size={25} color="rgb(187, 187, 187)"/>
      </header>
      <main>
        <img src="https://lh3.googleusercontent.com/a-/AOh14Ggsx2eT_A6emvGukBj5QrwRCqyJNSxD-5j5FvFLpw=s96-c" alt="profile"/>

        <span>José Murillo</span>

      </main>
      <footer>
        <button className="buttonCancel">Cancel</button>
        <button className="buttonSave">Save</button>
      </footer>
    </Container>
  );
};

export default Profile;
