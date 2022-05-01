import React from 'react';

import {Container} from './styles';
import {FiLogOut} from 'react-icons/fi';
import {FaUser} from 'react-icons/fa';
import {GoRocket} from 'react-icons/go'
import {RiDeleteBin6Line} from 'react-icons/ri'

function MenuProfile ()  {
  return (
    <Container data-testid="menu-profile">
      <ul>
        <li>
          <button onClick={() => {}}>
            <FaUser size={16} color="#333" />
            <span>Profile</span>
          </button>
        </li>
        <li>
          <button onClick={() => {}}>
            <GoRocket size={16} color="#333" />
            <span>Subscription</span>
          </button>
        </li>
        <li>
          <button onClick={() => {}}>
            <FiLogOut size={16} color="#333" />
            <span>Logout</span>
          </button>
        </li>
        <li>
          <button onClick={() => {}}>
            <RiDeleteBin6Line size={16} color="#333" />
            <span>Delete Account</span>
          </button>
        </li>
      </ul>
   </Container>
  );
};

export default MenuProfile;
