import { Box, Flex, Heading } from '@chakra-ui/react';
export default function Title ({ children, imageUrl }) {
  return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
            {/* <Box width="100%" mt="8">
                <Image
                    width="100%"
                    height="360px"
                    src={imageUrl}
                    alt="backgroundImage"
                    fallbackSrc="/images/placeholder/1920x680.png" // Esto es por si no recibe una imagen en src o esta cargando
                />
            </Box> */}
            <Box mt="6" mb="6">
                <Heading as="h2" size="md">{children}</Heading>
            </Box>
        </Flex>
  );
}
