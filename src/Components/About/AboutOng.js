import React from 'react'
import { Text, Flex } from '@chakra-ui/react'


const AboutOng = ({text}) => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text>
            {   
                text ? text : 'Sobre Nosotros'
            }
        </Text>
    </Flex>
  )
}

export default AboutOng