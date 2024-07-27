import React from 'react';
import { Box, Container, Heading, Text, VStack, Flex } from '@chakra-ui/react';
import { AiOutlineLink } from 'react-icons/ai';

const Certificates = () => {
  return (
    <Container maxW="container.lg" py={12}>
      <Heading as="h1" size="2xl" textAlign="center" mb={10} color="#2b6cb0">
        Certificates
      </Heading>
      <VStack spacing={8} align="stretch">
        
        {/* Certificate 3 */}
        {/* Certificate 4: Internship */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
          bg="white"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Software Engineering Internship
          </Heading>
          <Text fontSize="md" color="gray.600" mb={4}>
            Issued by: EDC info-net Software Solution Private Limited
          </Text>
          <Text fontSize="md" color="gray.500" mb={4}>
            Completed an internship focusing on software development, including backend and frontend technologies, with hands-on experience in building an Applicant Tracking System (ATS).
          </Text>
        </Box>

        {/* Certificate 5: Java Course */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
          bg="white"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Java Programming
          </Heading>
          <Text fontSize="md" color="gray.600" mb={4}>
            Issued by: Infonet
          </Text>
          <Text fontSize="md" color="gray.500" mb={4}>
            Completed a comprehensive course in Java programming covering object-oriented programming, data structures, and algorithms.
          </Text>
        </Box>

        {/* Certificate 6: C Programming */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
          bg="white"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            C Programming
          </Heading>
          <Text fontSize="md" color="gray.600" mb={4}>
            Issued by: Infonet
          </Text>
          <Text fontSize="md" color="gray.500" mb={4}>
            Completed an intensive course in C programming, including fundamentals, advanced topics, and hands-on projects.
          </Text>
        </Box>
        
        {/* Certificate 1 */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
          bg="white"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Full Stack Web Development
          </Heading>
          <Text fontSize="md" color="gray.600" mb={4}>
            Issued by: Infonet
          </Text>
          <Text fontSize="md" color="gray.500" mb={4}>
            Completed a comprehensive course on full stack web development including both frontend and backend technologies.
          </Text>
        </Box>

        {/* Certificate 2 */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
          bg="white"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Data Structures and Algorithms
          </Heading>
          <Text fontSize="md" color="gray.600" mb={4}>
            Issued by: Infonet
          </Text>
          <Text fontSize="md" color="gray.500" mb={4}>
            Gained in-depth knowledge and hands-on experience in data structures and algorithms.
          </Text>
        </Box>
 
      </VStack>
    </Container>
  );
};

export default Certificates;
