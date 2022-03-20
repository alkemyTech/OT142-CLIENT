import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
<<<<<<< HEAD
=======
  Text,
  Button,
>>>>>>> main
  Stack

} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconStyles = {
    cursor: 'pointer',
    fontSize: '30px'
  };

  const navBarStyle = {
    backgroundColor: '#EBEBEB',
    padding: '5px 0'
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box style={navBarStyle} maxHeight="90px">
      <Flex
        maxHeight="80px"
        alignItems="center"
        justifyContent={'space-between'}
        p={4}
      >
        <Link to="/">
          <Flex maxHeight="80px">
            {
              isOpen
                ? <ImCross onClick={() => handleClick()} style={iconStyles}/>
                : <FaBars onClick={() => handleClick()} style={iconStyles} />
            }

          </Flex>
        </Link>

        <Stack direction={'row'}>
          <Link to="/">
            <Flex maxHeight="80px">
              <Image
                objectFit="cover"
                src={process.env.PUBLIC_URL + '/images/LOGO-SOMOS-MAS.png'}
                alt="logo de la ong"
              />
            </Flex>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
