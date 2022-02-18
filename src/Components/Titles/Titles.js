import { Box, Flex, Heading, Image } from "@chakra-ui/react"
export default function Title({ text, imageUrl }) {
    return(
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Box width="100%" mt="8">
                <Image
                    width="100%"
                    height="360px"                      
                    src={imageUrl}
                    alt="backgroundImage"
                    fallbackSrc="/images/placeholder/1920x680.png" //Esto es por si no recibe una imagen en src o esta cargando
                />
            </Box>
            <Box mt="4">
                <Heading as="h3" size="md">{text}</Heading>
            </Box>
        </Flex>
    )
}