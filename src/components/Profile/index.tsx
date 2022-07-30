import React from 'react';

import { Container, Modal } from './styles';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { closeProfileModalAction } from '../../store/modules/modal/actions';

interface ProfileProps {}


export function Profile(props: ProfileProps) {
  const dispatch = useDispatch();
  return (
    <Container {...props}>
      <Modal>
        <header>
          <h1>Profile</h1>
          <button
            onClick={() => dispatch(closeProfileModalAction())}
            className="close"
          >
            <IoMdClose size={25} color="rgb(187, 187, 187)"/>
          </button>
        </header>
        <main>
          <img
            src="https://avatars.githubusercontent.com/u/43470555?v=4"
            alt="profile"
          />

          <span>José Murillo</span>

        </main>
        <footer>
          <button
            className="buttonCancel"

            onClick={() => dispatch(closeProfileModalAction())}
          >
            Cancel
          </button>
          <button className="buttonSave">Save</button>
        </footer>
      </Modal>
    </Container>
  );
};

