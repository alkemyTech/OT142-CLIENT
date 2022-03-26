import React from 'react';
import {
  Box,
  Text,
  HStack
} from '@chakra-ui/react';
import { AiFillFacebook } from 'react-icons/ai';
import { BsInstagram, BsTelephoneForward } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

export default function Date (props) {
  return (
    <>
      <Box w={'100%'} >
        <HStack flexWrap={'wrap'} spacing={5} justifyContent={'center'}>
          <HStack>
            <BsTelephoneForward style={ { fontSize: '25px', color: '#0F9D58' } }/>
            <Text style={ { fontSize: '15px' } }>{props.phone}</Text>
          </HStack>
          <HStack>
            <AiFillFacebook style={ { fontSize: '25px', color: '#4267B2' } } />
            <Text>{props.facebook}</Text>
          </HStack>
          <HStack>
            <BsInstagram style={ { fontSize: '25px', color: '#C13584' } }/>
            <Text>{props.instagram}</Text>
          </HStack>
          <HStack>
            <HiOutlineMail style={ { fontSize: '25px', color: '#DB4437' } }/>
            <Text>{props.mail}</Text>
          </HStack>
        </HStack>
      </Box>
    </>
  );
}
