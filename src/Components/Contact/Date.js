import React from 'react';
import {
  List,
  ListItem,
  ListIcon,
  Box
} from '@chakra-ui/react';
import { AiFillFacebook } from 'react-icons/ai';
import { BsInstagram, BsTelephoneForward } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

export default function Date (props) {
  console.log(props);

  return (
    <>
      <Box
        style={{
          display: ' flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box>
          <List spacing={3}>
            <ListItem>
              <ListIcon size={5}>
                <AiFillFacebook />
              </ListIcon>
              {props.facebook}
            </ListItem>
            <ListItem>
              <ListIcon>
                <HiOutlineMail />
              </ListIcon>
              {props.mail}
            </ListItem>
            <ListItem>
              <ListIcon>
                <BsInstagram />
              </ListIcon>
              {props.instagram}
            </ListItem>
            <ListItem>
              <ListIcon>
                <BsTelephoneForward />
              </ListIcon>
              {props.teléfonoDeContacto}
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
