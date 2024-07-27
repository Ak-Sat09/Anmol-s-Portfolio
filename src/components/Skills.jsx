import React from 'react';
import { Box, Container, Heading, Text, Stack, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaDatabase, FaServer, FaReact, FaCode, FaCloud, FaTools } from 'react-icons/fa'; 

const Skills = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" textAlign="center" mb={10} color="#2b6cb0">
        Skills
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {/* Strongest Areas */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Strongest Areas
          </Heading>
          <Text fontSize="md" color="gray.600">
            <strong>Data Structure & Algorithms</strong>
          </Text>
        </Box>

        {/* Backend Development */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Backend Development
          </Heading>
          <Stack spacing={3}>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaServer} mr={2} color="#2b6cb0" />
              Java (Spring Boot)
            </Text>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaServer} mr={2} color="#2b6cb0" />
              Node.js
            </Text>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaServer} mr={2} color="#2b6cb0" />
              Express.js
            </Text>
          </Stack>
        </Box>

        {/* Frontend Development */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Frontend Development
          </Heading>
          <Stack spacing={3}>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaReact} mr={2} color="#2b6cb0" />
              React.js
            </Text>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaReact} mr={2} color="#2b6cb0" />
              Chakra UI
            </Text>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaReact} mr={2} color="#2b6cb0" />
              Tailwind CSS
            </Text>
          </Stack>
        </Box>

        {/* Database Technologies */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Database Technologies
          </Heading>
          <Stack spacing={3}>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaDatabase} mr={2} color="#2b6cb0" />
              MongoDB
            </Text>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaDatabase} mr={2} color="#2b6cb0" />
              MySQL
            </Text>
          </Stack>
        </Box>

        {/* APIs */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            APIs
          </Heading>
          <Stack spacing={3}>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaCode} mr={2} color="#2b6cb0" />
              RESTful APIs
            </Text>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaCode} mr={2} color="#2b6cb0" />
              APIs integration (e.g., Cloudinary, Razorpay)
            </Text>
          </Stack>
        </Box>
 

        {/* Tools */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Tools
          </Heading>
          <Stack spacing={3}>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaTools} mr={2} color="#2b6cb0" />
              Git
            </Text>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaTools} mr={2} color="#2b6cb0" />
              Docker
            </Text>
            <Text fontSize="md" color="gray.600">
              <Icon as={FaTools} mr={2} color="#2b6cb0" />
              Postman
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Skills;
