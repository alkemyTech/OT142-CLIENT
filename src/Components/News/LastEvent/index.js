import React from 'react';
import VideoPlayer from '../../VideoPlayer';
import { Heading, Center, Box } from '@chakra-ui/react';

const LastEvent = ({ video }) => {
  return (
    <>
      <Center>
        <Box mb={2}>
          <Heading as='h2' size='1xl' p={2}>
            Último Evento
          </Heading>
        </Box>
      </Center>
      <VideoPlayer video={video} />;
    </>
  );
};

export default LastEvent;
