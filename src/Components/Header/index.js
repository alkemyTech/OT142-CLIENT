/*eslint-disable*/
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { Link as ReachLink } from "react-router-dom";
import { useState, useEffect } from "react";

const initialNav = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: 'Actividades',
    href: '/actividades',
  },
  {
    label: 'Novedades',
    href: '/novedades',
  },
  {
    label: 'Contacto',
    href: '/contacto',
  },
  {
    label: 'Campañas',
    href: '/',
    children: [
      {
        label: "Escuela",
        subLabel: "Recolección de útiles escolares",
        href: "/school-campaign",
      },
      {
        label: "Juguetes",
        subLabel: "Recolección de juguetes",
        href: "/toys-campaign",
      },
    ],
  },
];

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [navItems, setNavItems] = useState(initialNav);

  useEffect(() => {
    sessionStorage.getItem("login-token") && setIsLoggedIn(true);
    sessionStorage.getItem("login-role") &&
      sessionStorage.getItem("login-role") === "1" &&
      setIsAdmin(true);
  }, [isLoggedIn]);

    useEffect(() => {
     if (isAdmin === true) {
       setNavItems(navItems.filter((navItem) => navItem.label != 'Contacto'));
     } else {
       setNavItems(initialNav);
     }
    }, [isAdmin])

  const handleCloseSesion = () => {
    sessionStorage.removeItem("login-token");
    sessionStorage.removeItem("login-role");
    setIsLoggedIn(false);
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.300", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          maxH="50px"
          flex={{ base: 1 }}
          alignItems="center"
          justify={{ base: "center", md: "start" }}
        >
          <Link as={ReachLink} to="/">
            <Image boxSize="120px" src="/images/LOGO-SOMOS-MAS.png" />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav isLoggedIn={isLoggedIn} isAdmin={isAdmin} navItems={navItems} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={{ base: "column", md: "row" }}
          spacing={1}
        >
          {isLoggedIn ? (
            <>
              {isAdmin && (
                <Link as={ReachLink} to="/backoffice">
                  <Button bg="none" fontSize="sm" _hover={{ bg: "none" }}>
                    Backoffice
                  </Button>
                </Link>
              )}
              <Link as={ReachLink} to="/login">
                <Button
                  onClick={handleCloseSesion}
                  fontSize={"xs"}
                  fontWeight={600}
                  color={"white"}
                  bg={"pink.400"}
                  _hover={{
                    bg: "pink.300",
                  }}
                >
                  Cerrar sesión
                </Button>
              </Link>
            </>
          ) : (
            <Link as={ReachLink} to="/login">
              <Button fontSize={"sm"} fontWeight={400} variant={"link"}>
                Ingresar
              </Button>
            </Link>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ isLoggedIn, isAdmin, navItems }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
 
  return (
    <Stack direction={"row"} spacing={4}>
        {navItems.map((navItem) => ( 
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={ReachLink}
                p={2}
                to={navItem.href}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  console.log("href: " + href)
  return (
    <Link
      as={ReachLink}
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({navItems}) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Link as={ReachLink} to={href}>
      <Flex
        py={2}
        
        
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      </Link>
     

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
