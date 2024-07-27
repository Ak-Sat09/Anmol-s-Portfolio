import React from 'react';
import { Box, Container, Heading, Text, Stack, SimpleGrid } from '@chakra-ui/react';

const Education = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" textAlign="center" mb={10} color="#2b6cb0">
        Education
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* DAV Pg College */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            DAV PG College, Karnal (Haryana)
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={2}>
            <strong>BCA (Bachelor of Computer Applications)</strong>
          </Text>
          <Text fontSize="md" color="gray.500">
            CGPA: 8.06 / 10
          </Text>
          <Text fontSize="md" color="gray.500">
            Duration: 2021 - 2024
          </Text>
        </Box>

        {/* Government Sr. Sec. School */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Government Sr. Sec. School, Gudha (Karnal)
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={2}>
            <strong>12th Grade</strong>
          </Text>
          <Text fontSize="md" color="gray.500">
            Percentage: 83.3%
          </Text>
          <Text fontSize="md" color="gray.500">
            Year: 2021
          </Text>
        </Box>

        {/* Rishikul Sr. Sec. School */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Rishikul Sr. Sec. School, Gharaunda (Karnal)
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={2}>
            <strong>10th Grade</strong>
          </Text>
          <Text fontSize="md" color="gray.500">
            Percentage: 79%
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Education;
