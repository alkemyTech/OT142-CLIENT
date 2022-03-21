import React from 'react';
import { GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const GridItemDash = ({ title, icon, desc, route }) => {
  return (
    <GridItem colSpan={'3'} bg='gray.100' borderRadius={'15px'} cursor={'pointer'} _hover={{ bg: 'gray.600', color: 'white' }} transition='all .5s ease'>
        <Link to={`/backoffice/${route}`}>
            <Stack justifyContent={'center'} alignItems={'center'} p={5}>
                <Text fontSize='6xl'>
                    {icon}
                </Text>
                <Heading>{title}</Heading>
                <Text>
                    {desc}
                </Text>
            </Stack>
        </Link>
    </GridItem>
  );
};

export default GridItemDash;
