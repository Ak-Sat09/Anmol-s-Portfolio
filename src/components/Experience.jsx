import React from 'react';
import { Box, Container, Heading, Text, VStack, Flex, Icon } from '@chakra-ui/react';
import { FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={10} align="center">
        <Heading as="h1" size="2xl" color="#2b6cb0" mb={6}>
          Experience
        </Heading>
        <Box textAlign="center">
          <Text fontSize="lg" mb={4}>
            Here’s an overview of my professional experience:
          </Text>
        </Box>
        <Flex direction="column" align="center" gap={8}>
          <Box
            textAlign="center"
            p={5}
            maxW="container.md"
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: "lg", bg: "gray.50" }}
            transition="all 0.3s"
          >
            <Icon as={FaLaptopCode} w={12} h={12} color="#2b6cb0" />
            <Heading as="h2" size="lg" mt={4} color="#2b6cb0">
              Software Development Engineer Intern
            </Heading>
            <Text fontSize="lg" color="gray.600" mt={2}>
              <strong>EDC info-net Software Solution Private Limited, Karnal</strong>
            </Text>
            <Text fontSize="md" color="gray.500" mt={1}>
              July 2023 - Dec 2023
            </Text>
            <Text fontSize="md" mt={4}>
              Skills: Java, Spring Boot, MySQL, React.js, Chakra UI, Apache Tika, JWT, Spring Security
            </Text>
            <Text mt={4}>
              ● Developed and designed an Applicant Tracking System (ATS) for efficient hiring with features like job postings, resume parsing, applicant tracking, and interview scheduling.
            </Text>
            <Text mt={2}>
              ● Built the backend using Java Spring Boot, MySQL, RESTful API, Apache Tika for resume parsing, and JWT Authentication for secure user login and session management.
            </Text>
            <Text mt={2}>
              ● Developed the frontend using React.js and Chakra UI, focusing on user-friendly interfaces.
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Experience;
