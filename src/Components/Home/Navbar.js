import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Stack,
 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <Box maxHeight="80px" style={{ border: "1px solid red" }}>
      <Flex
        maxHeight="80px"
        alignItems="center"
        style={{ border: "6px solid blue" }}
        justifyContent={"space-between"}
      >
        <Link to="/">
          <Flex style={{ border: "6px solid green" }} maxHeight="80px">
            <Image
              objectFit="cover"
              src={process.env.PUBLIC_URL + "/images/LOGO-SOMOS-MAS.png"}
              alt="logo de la ong"
            />
          </Flex>
        </Link>

        <Stack
          direction={"row"}
          spacing={8}
          style={{ border: "2px solid pink" }}
        >
          <Flex>
            <Link to="/">
              <Text>Inicio</Text>
            </Link>
          </Flex>

          <Flex>
            <Link to="/">
              <Text>Nosotros</Text>
            </Link>
          </Flex>

          <Flex>
            <Link to="/actividades">
              <Text>Actividades</Text>
            </Link>
          </Flex>

          <Flex>
            <Link to="/">
              <Text>Novedades</Text>
            </Link>
          </Flex>

          <Flex>
            <Link to="/">
              <Text>Testimonios</Text>
            </Link>
          </Flex>

          <Flex>
            <Link to="/contact">
              <Text>Contacto</Text>
            </Link>
          </Flex>

          <Flex>
            <Link to="/">
              <Text>Contribuye</Text>
            </Link>
          </Flex>
        </Stack>

        <Stack direction={"row"}>
          <Link to="#">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"blue.300"}
              bg={"white"}
              variant="outline"
              borderColor="blue.300"
              _hover={{
                bg: "blue.300",
                color: "white",
              }}
            >
              Log in
            </Button>
          </Link>
          <Link to="register">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.500"}
              _hover={{
                bg: "blue.300",
              }}
            >
              Registrate
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
