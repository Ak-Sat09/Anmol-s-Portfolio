import React from 'react';
import { Box, Container, Heading, Text, Link, Button, VStack, Flex } from '@chakra-ui/react';
import { AiOutlineDownload } from 'react-icons/ai';

const Resume = () => {
  return (
    <Container maxW="container.lg" py={12}>
      <Heading as="h1" size="2xl" textAlign="center" mb={10} color="#2b6cb0">
        Resume
      </Heading>
      <VStack spacing={8} align="stretch">
        {/* Resume Overview */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg", bg: "gray.50" }}
          transition="all 0.3s"
          bg="white"
          textAlign="center"
        >
          <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
            Overview
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={4}>
            I am a highly motivated and skilled software engineer with a strong background in backend and frontend development. I have experience in various technologies and tools, including Java, Spring Boot, React.js, Node.js, and more. I am passionate about building innovative solutions and continuously improving my skills.
          </Text>
          <Text fontSize="md" color="gray.500">
            - Bachelor of Computer Applications (BCA) from DAV PG College, Karnal
          </Text>
          <Text fontSize="md" color="gray.500">
            - Experience in developing web applications and handling complex projects
          </Text>
        </Box>

        {/* Download Resume */}
        <Flex justify="center">
          <Box
            p={6}
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: "lg", bg: "gray.50" }}
            transition="all 0.3s"
            bg="white"
            textAlign="center"
          >
            <Heading as="h2" size="lg" color="#2b6cb0" mb={4}>
              Download My Resume
            </Heading>
            <Text fontSize="md" color="gray.500" mb={6}>
              Click the button below to download my resume in PDF format.
            </Text>
            <Link href="https://docs.google.com/document/d/1Wn2SCvZlh4q-cidKnoXXnWgVpxiRk4-JL-h1IImirqk/edit?usp=sharing" isExternal>
              <Button
                rightIcon={<AiOutlineDownload />}
                colorScheme="teal"
                variant="solid"
                size="lg"
              >
                Download Resume
              </Button>
            </Link>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Resume;
