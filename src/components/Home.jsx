import React from 'react';
import { Box, Flex, Heading, Text, Button, VStack, Image, Link, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfileImage from '../assets/images/profile.jpg'; // Replace with your actual image path

const Home = () => {
  return (
    <Box p={8}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center">
        <Image
          src={ProfileImage}
          alt="Profile"
          boxSize="200px"
          borderRadius="full"
          objectFit="cover"
          mb={{ base: 8, md: 0 }}
          mr={{ md: 8 }}
        />
        <VStack spacing={4} align="start">
          <Heading as="h1" size="xl">Anmol Mehla</Heading>
          <Text fontSize="lg" textAlign={{ base: 'center', md: 'left' }}>
            I am a passionate software engineer with expertise in Java backend development, AWS services, RESTful APIs, and more. I love creating impressive, highly appealing UI designs and am constantly exploring new technologies.
          </Text>
          <HStack spacing={4}>
            <Link href="https://github.com/Ak-Sat09" isExternal>
              <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/yourprofile" isExternal>
              <Button leftIcon={<FaLinkedin />} colorScheme="teal" variant="solid">
                LinkedIn
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Home;
