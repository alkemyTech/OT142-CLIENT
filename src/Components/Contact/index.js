import React, { useEffect } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import ContactOngDate from './ContactOngDate';
import { showAlertErr } from '../../Services/AlertServicie/AlertServicie';
import { useHistory } from 'react-router-dom';

const Contact = () => {
  const history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem('login-role') === '1') {
      history.push('/backoffice');
      showAlertErr({ text: 'No puedes visualizar esta pagina' });
    }
  }, []);

  return (
    <>
      <Box maxW={'100%'} display={'flex'} justifyContent='center'>
        <Stack w={'760px'} direction={['column', 'column', 'row']} flexWrap={'wrap'} backgroundColor={'gray.200'} borderRadius={'10px'} p={'20px'}>
          <ContactOngDate />
        </Stack>
      </Box>
    </>
  );
};

export default Contact;
