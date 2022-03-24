import React from 'react';
import {
  SimpleGrid,
  Box,
  Text
} from '@chakra-ui/react';
import { GridItemDash } from './GridItemDash';
import { cardsInfo } from './cardsInfo';

const Dashboard = () => {
  return (
        <Box bg={'gray.100'} width={'100%'} maxW={'100%'} >
          <Text fontSize='4xl' fontWeight={800}color='gray.600' align={'center'} mt={[10, null, 20, '100px', '150px']}>Bienvenido Administrador</Text>
            <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing='20px' m={10}>
                {
                    cardsInfo.map((info, i) => {
                      return (
                            <GridItemDash key={i} data={info}/>
                      );
                    })
                }
            </SimpleGrid>
        </Box>

  );
};

export default Dashboard;
// import { Container, Grid, Text } from '@chakra-ui/react';
// import React from 'react';
// import GridItemDash from './GridItemDash';
// import { FaBeer } from 'react-icons/fa';

// const items = [
//   {
//     id: 1,
//     title: 'Novedades',
//     icon: <FaBeer />,
//     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//     route: 'news'
//   },
//   {
//     id: 2,
//     title: 'Actividades',
//     icon: <FaBeer />,
//     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//     route: 'activities'
//   },
//   {
//     id: 3,
//     title: 'Categorías',
//     icon: <FaBeer />,
//     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//     route: 'categories'
//   },
//   {
//     id: 4,
//     title: 'Usuarios',
//     icon: <FaBeer />,
//     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//     route: 'users'
//   },
//   {
//     id: 5,
//     title: 'Organization',
//     icon: <FaBeer />,
//     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//     route: 'organization'
//   }
// ];

// const Dashboard = () => {
//   return (
//     <Container width={'100%'} maxW={'100%'} paddingBottom={20}>
//       <Text fontSize='6xl' align={'center'}>Bienvenido Administrador</Text>
//       <Grid
//         templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(6, 1fr)' }}
//         gap={4}
//       >
//         {
//           items.map(item => <GridItemDash key={item.id} {...item} />)
//         }
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;
