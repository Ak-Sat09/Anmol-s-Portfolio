import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react'; 
import { RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'} fontSize="sm" colorScheme={'teal'}>
      {title}
    </Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
 

      <Button
        onClick={onOpen}
        colorScheme={'teal'}
        size="sm"
        rounded="full"
        position={'fixed'}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent maxW="250px">
          <DrawerHeader borderBottomWidth={'1px'} fontSize="sm">
            Genius Hub
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={'2'} alignItems="flex-start">
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/about" title="About" />
              <LinkButton onClose={onClose} url="/exp" title="Experience" />
              <LinkButton onClose={onClose} url="/achivement" title="Achievements" />
              <LinkButton onClose={onClose} url="/project" title="Projects" />
              <LinkButton onClose={onClose} url="/skills" title="Skills" />
              <LinkButton onClose={onClose} url="/eduction" title="Education" />
              <LinkButton onClose={onClose} url="/resume" title="Resume" />
              <LinkButton onClose={onClose} url="/certificates" title="Certificates" />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
