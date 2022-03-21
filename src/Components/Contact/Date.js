import React from 'react';
import {
  Box,
  VStack,
  Text,
  HStack
} from '@chakra-ui/react';
import { AiFillFacebook } from 'react-icons/ai';
import { BsInstagram, BsTelephoneForward } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

export default function Date (props) {
  return (
    <>
      <Box>
        <VStack spacing={5} alignItems={'flex-start'} justifyContent={'flex-start'}>
          <HStack>
            <BsTelephoneForward />
            <Text>{props.phone}</Text>
          </HStack>
          <HStack>
            <AiFillFacebook />
            <Text>{props.facebook}</Text>
          </HStack>
          <HStack>
            <BsInstagram />
            <Text>{props.instagram}</Text>
          </HStack>
          <HStack>
            <HiOutlineMail />
            <Text>{props.mail}</Text>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
