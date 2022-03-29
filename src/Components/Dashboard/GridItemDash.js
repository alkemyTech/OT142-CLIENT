import React from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  Center,
  Heading,
  Circle
} from '@chakra-ui/react';

export const GridItemDash = ({ data }) => {
  const { Icon, title, link } = data;

  return (
    <div>
    <Center >
        <Box
            w={'full'}
            bg={'white'}
            boxShadow='dark-lg'
            rounded={'md'}
            p={6}
            overflow={'hidden'} cursor={'pointer'} _hover={{ bg: 'gray.600', color: 'white' }} transition='all .2s ease'>
                <Link to={`/backoffice${link}`}>
                  <Center >
                      <Circle size='60px' bg='gray.400' padding={2}>
                          <img src={Icon} width={35} />
                      </Circle>
                  </Center>

                  <Center marginTop={3}>
                      <Heading
                          fontSize={'sm'}
                          fontFamily={'body'}>
                          {title}
                      </Heading>
                  </Center>

                  <Center
                      marginTop={2}
                      fontWeight={800}
                      fontSize={'sm'}
                      letterSpacing={1.1}>
                    </Center>
                </Link>

        </Box>
        </Center>

    </div>
  );
};

// import React from 'react';
// import { GridItem, Heading, Stack, Text } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

// const GridItemDash = ({ title, icon, desc, route }) => {
//   return (
//     <GridItem colSpan={'3'} bg='gray.100' borderRadius={'15px'} cursor={'pointer'} _hover={{ bg: 'gray.600', color: 'white' }} transition='all .5s ease'>
//         <Link to={`/backoffice/${route}`}>
//             <Stack justifyContent={'center'} alignItems={'center'} p={5}>
//                 <Text fontSize='6xl'>
//                     {icon}
//                 </Text>
//                 <Heading>{title}</Heading>
//                 <Text>
//                     {desc}
//                 </Text>
//             </Stack>
//         </Link>
//     </GridItem>
//   );
// };

// export default GridItemDash;
