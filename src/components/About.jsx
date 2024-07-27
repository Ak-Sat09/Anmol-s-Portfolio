import React from 'react';
import { Box, Container, Heading, Text, VStack, Flex, Icon } from '@chakra-ui/react';
import { FaUser, FaBriefcase, FaStar } from 'react-icons/fa';

const About = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={10} align="center">
        <Heading as="h1" size="2xl" color="#2b6cb0" mb={6}>
          About Me
        </Heading>
        <Box textAlign="center">
          <Text fontSize="lg" mb={4}>
            Hello! I'm Anmol Mehla, a passionate software engineer with a love for creating innovative solutions. I have a strong background in Java, React, and various backend technologies.
          </Text>
          <Text fontSize="lg">
            I specialize in building scalable applications and enjoy working on challenging projects that push the boundaries of technology.
          </Text>
        </Box>
        <Flex wrap="wrap" justify="center" gap={8}>
          <Box
            textAlign="center"
            p={5}
            maxW="sm"
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: "lg", bg: "gray.50" }}
            transition="all 0.3s"
          >
            <Icon as={FaUser} w={12} h={12} color="#2b6cb0" />
            <Heading as="h3" size="md" mt={4} color="#2b6cb0">
              Background
            </Heading>
            <Text mt={3}>
              With a strong foundation in Computer Science, I have worked on various projects that demonstrate my skills and problem-solving abilities.
            </Text>
          </Box>
          <Box
            textAlign="center"
            p={5}
            maxW="sm"
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: "lg", bg: "gray.50" }}
            transition="all 0.3s"
          >
            <Icon as={FaBriefcase} w={12} h={12} color="#2b6cb0" />
            <Heading as="h3" size="md" mt={4} color="#2b6cb0">
              Experience
            </Heading>
            <Text mt={3}>
              My professional journey includes internships and projects that have equipped me with real-world experience in software development.
            </Text>
          </Box>
          <Box
            textAlign="center"
            p={5}
            maxW="sm"
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: "lg", bg: "gray.50" }}
            transition="all 0.3s"
          >
            <Icon as={FaStar} w={12} h={12} color="#2b6cb0" />
            <Heading as="h3" size="md" mt={4} color="#2b6cb0">
              Skills
            </Heading>
            <Text mt={3}>
              I have expertise in a range of technologies including Java, React, Node.js, and various databases. I am always eager to learn and adapt to new technologies.
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default About;
