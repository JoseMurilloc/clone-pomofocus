import React from 'react';

import {Container} from './styles';
import {FiLogOut} from 'react-icons/fi';
import {FaUser} from 'react-icons/fa';
import {GoRocket} from 'react-icons/go'
import {RiDeleteBin6Line} from 'react-icons/ri'

function MenuProfile ()  {
  return (
    <Container>
      <ul>
      <li>
        <FaUser size={16} color="#333" />
        Profile
      </li>
      <li>
        <GoRocket size={16} color="#333" />
        Subscription
      </li>
      <li>
        <FiLogOut size={16} color="#333" />
        Logout
      </li>
      <li>
        <RiDeleteBin6Line size={16} color="#333" />
        Delete Account
      </li>
    </ul>
   </Container>
  );
};

export default MenuProfile;
