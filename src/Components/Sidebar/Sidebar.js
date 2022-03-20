import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react';
import { FiMenu, FiActivity } from 'react-icons/fi';
import { BiNews } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { MdCardMembership, MdCreate, MdCategory } from 'react-icons/md';
import { LogoOng } from '../LogoOng/LogoOng';
import { Link } from 'react-router-dom';

const LinkItems = [
  { name: 'News', route: '/backoffice/news', icon: BiNews },
  { name: 'Activities', route: '/backoffice/activities', icon: FiActivity },
  { name: 'Users', route: '/backoffice/users', icon: FaUserAlt },
  { name: 'Create members', route: '/backoffice/members/create', icon: MdCardMembership },
  { name: 'Create news', route: '/backoffice/create-news', icon: MdCreate },
  { name: 'Category', route: '/backoffice/categories', icon: MdCategory }
];

export default function Sidebar ({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box

      bg={useColorModeValue('gray.600', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.500', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      color="white"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <LogoOng borderRadius="full" boxSize="60px" alt="somosMas" />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} onClick={navigator}>
          <Link to={link.route}>{link.name}</Link>
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white'
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="20"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <LogoOng borderRadius="full" boxSize="60px" alt="somosMas" />
    </Flex>
  );
};
