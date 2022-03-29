import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <Box textAlign='center' py={200} px={6}>
      <Heading
        display='inline-block'
        as='h2'
        size='2xl'
        bgGradient='linear(to-r, teal.400, teal.600)'
        backgroundClip='text'
      >
        404
      </Heading>
      <Text fontSize='18px' mt={3} mb={2}>
        Página no encontrada.
      </Text>
      <Text color={'gray.600'} mb={2}>
        La página que estás buscando no existe!
      </Text>
      <Text color={'gray.600'} mb={4}>
        Por favor comunícate con el administrador del sitio web.
      </Text>

      <Button
        colorScheme='teal'
        bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
        color='white'
        variant='solid'
        onClick={handleClick}
      >
        Ir al inicio
      </Button>
    </Box>
  );
};

export default PageNotFound;
