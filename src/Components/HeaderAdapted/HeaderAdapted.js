import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon ,ChevronRightIcon} from "@chakra-ui/icons";

const Links = ["#JuguetesParaTodos"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("green.200", "green.200"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
   
    <>
      <Box
        maxW={"100%"}
        display={{ md: "flex" }}
        bgImage="url('https://i.ytimg.com/vi/kcbDuukg6uE/maxresdefault.jpg')"
      >
        <Flex w={"100%"} display={{ base: "md", lg: "flex" }}>
          <Flex
            bg={[
              "rgba(20,80,100,.8)",
              "rgba(20,80,100,.8)",
              "rgba(20,80,100,.8)",
              "rgba(20,80,100,.6)",
            ]}
            w={"100%"}
            h={"35vh"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              display={{ base: "none", sm: "flex" }}
              spacing={8}
              alignItems={"center"}
            >
              <Box>
                <Image
                  borderRadius="full"
                  boxSize="120px"
                  size={"sm"}
                  objectFit={"contain"}
                  src={"https://ongapi.alkemy.org/storage/EFUO7NhyEl.png"}
                />
              </Box>
              <HStack
                color={"white"}
                fontSize={"25px"}
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
              <Text
                    
                    color={"white"}
                  >
                    Donar<ChevronRightIcon/>
                  </Text>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  
                  <Avatar
                    size={"md"}
                    src={
                      "https://w7.pngwing.com/pngs/988/832/png-transparent-computer-icons-encapsulated-postscript-donate-miscellaneous-logo-donation.png"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Mercado Pago</MenuItem>
                  <MenuItem>Debito</MenuItem>
                  <MenuDivider />
                  <MenuItem>Tarjeta de credito</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
        
      </Box>

    </>
  );
}

