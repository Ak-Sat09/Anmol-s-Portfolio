import React from 'react';
import { Box, Container, Heading, Text, VStack, Flex, Icon } from '@chakra-ui/react';
import { FaTrophy, FaMedal, FaCertificate, FaUserTie } from 'react-icons/fa';

const Achievement = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={10} align="center">
        <Heading as="h1" size="2xl" color="#2b6cb0" mb={6}>
          Achievements
        </Heading>
        <Box textAlign="center">
          <Text fontSize="lg" mb={4}>
            Here are some of my notable achievements:
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
            <Icon as={FaTrophy} w={12} h={12} color="#2b6cb0" />
            <Heading as="h2" size="lg" mt={4} color="#2b6cb0">
              Thrice Semester Topper
            </Heading>
            <Text fontSize="md" color="gray.600" mt={2}>
              Achieved the top position in my academic semester three times, reflecting dedication, consistent performance, and a strong grasp of core concepts.
            </Text>
          </Box>

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
            <Icon as={FaMedal} w={12} h={12} color="#2b6cb0" />
            <Heading as="h2" size="lg" mt={4} color="#2b6cb0">
              2nd Place in Coding Competition
            </Heading>
            <Text fontSize="md" color="gray.600" mt={2}>
              Secured the 2nd place in a competitive coding event, demonstrating problem-solving skills and proficiency in coding under pressure.
            </Text>
          </Box>

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
            <Icon as={FaCertificate} w={12} h={12} color="#2b6cb0" />
            <Heading as="h2" size="lg" mt={4} color="#2b6cb0">
              Solved 1000+ DSA Problems
            </Heading>
            <Text fontSize="md" color="gray.600" mt={2}>
              Completed over 1000 Data Structures and Algorithms problems, enhancing problem-solving skills and algorithmic thinking.
            </Text>
          </Box>

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
            <Icon as={FaUserTie} w={12} h={12} color="#2b6cb0" />
            <Heading as="h2" size="lg" mt={4} color="#2b6cb0">
              Resolved 500+ DSA Doubts as Mentor
            </Heading>
            <Text fontSize="md" color="gray.600" mt={2}>
              Assisted and resolved over 500 doubts related to Data Structures and Algorithms as a mentor, helping peers and contributing to their learning.
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Achievement;
