import React from 'react';
import { Box, Container, Heading, Text, VStack, Flex, Link, Button, Icon } from '@chakra-ui/react';
import { FaLaptopCode, FaShoppingCart, FaBook, FaChalkboardTeacher, FaVideo } from 'react-icons/fa';

const Project = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={10} align="center">
        <Heading as="h1" size="2xl" color="#2b6cb0" mb={6}>
          Projects
        </Heading>
        <Flex direction="column" align="center" gap={8}>
          {/* Genius Hub Project */}
          <Box
            textAlign="center"
            p={5}
            maxW="container.md"
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: 'lg', bg: 'gray.50' }}
            transition="all 0.3s"
          >
            <Icon as={FaChalkboardTeacher} w={12} h={12} color="#2b6cb0" />
            <Heading as="h2" size="lg" mt={4} color="#2b6cb0">
              Genius Hub (E-Learning)
            </Heading>
            <Text fontSize="md" color="gray.600" mt={2}>
              <strong>Skills:</strong> React, Chakra UI, Node.js, Express, Mongoose, NLP, Socket.io
            </Text>
            <Text fontSize="md" color="gray.600" mt={2}>
              <strong>Features:</strong> Quiz with AI Monitoring, AI Chat Bot, Real-Time Chatting, Individual To-Dos, CRUD operations for courses and users, Payments
            </Text>
            <Text fontSize="md" color="gray.600" mt={4}>
              Developed an e-learning platform with AI-driven quizzes, monitoring, chat bot, and real-time chatting, featuring individual profiles and personalized ToDos.
              Built the backend with Node.js and MongoDB and created a user-friendly frontend using React.js and Chakra UI.
            </Text>
            <Flex direction="row" justify="center" mt={4}>
              <Link href="https://github.com/Ak-Sat09/" isExternal>
                <Button colorScheme="teal" leftIcon={<FaLaptopCode />}>
                  Check Code
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@akumg09" isExternal>
                <Button colorScheme="blue" leftIcon={<FaVideo />}>
                  Project Video & Tutorial
                </Button>
              </Link>
            </Flex>
          </Box>

          {/* QuickUPI Project */}
          <Box
            textAlign="center"
            p={5}
            maxW="container.md"
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: 'lg', bg: 'gray.50' }}
            transition="all 0.3s"
          >
            <Icon as={FaShoppingCart} w={12} h={12} color="#2b6cb0" />
            <Heading as="h2" size="lg" mt={4} color="#2b6cb0">
              QuickUPI (UPI-Application)
            </Heading>
            <Text fontSize="md" color="gray.600" mt={2}>
              <strong>Skills:</strong> React.js, Chakra UI, Java (Spring Boot), RESTful APIs, MongoDB, UPI APIs, Razorpay
            </Text>
            <Text fontSize="md" color="gray.600" mt={2}>
              <strong>Features:</strong> Secure UPI payments, User authentication, Transaction management, Real-time notifications, Payment gateway integration
            </Text>
            <Text fontSize="md" color="gray.600" mt={4}>
              Developed a UPI application with secure payment processing and real-time notifications. Integrated UPI APIs and Razorpay for seamless transactions.
              Built the backend using Java Spring Boot and RESTful APIs.
            </Text>
            <Flex direction="row" justify="center" mt={4}>
              <Link href="https://github.com/Ak-Sat09/" isExternal>
                <Button colorScheme="teal" leftIcon={<FaLaptopCode />}>
                  Check Code
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@akumg09" isExternal>
                <Button colorScheme="blue" leftIcon={<FaVideo />}>
                  Project Video & Tutorial
                </Button>
              </Link>
            </Flex>
          </Box>

          {/* Chat Application */}
          <Box
            textAlign="center"
            p={5}
            maxW="container.md"
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: 'lg', bg: 'gray.50' }}
            transition="all 0.3s"
          >
            <Icon as={FaBook} w={12} h={12} color="#2b6cb0" />
            <Heading as="h2" size="lg" mt={4} color="#2b6cb0">
              Chat Application
            </Heading>
            <Text fontSize="md" color="gray.600" mt={2}>
              <strong>Skills:</strong> React.js, Node.js, Socket.io, Express
            </Text>
            <Text fontSize="md" color="gray.600" mt={2}>
              <strong>Features:</strong> Real-time messaging, User authentication, Chat rooms, Private messaging
            </Text>
            <Text fontSize="md" color="gray.600" mt={4}>
              Created a chat application with real-time messaging and chat rooms. Implemented user authentication and private messaging features.
            </Text>
            <Flex direction="row" justify="center" mt={4}>
              <Link href="https://github.com/Ak-Sat09/" isExternal>
                <Button colorScheme="teal" leftIcon={<FaLaptopCode />}>
                  Check Code
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@akumg09" isExternal>
                <Button colorScheme="blue" leftIcon={<FaVideo />}>
                  Project Video & Tutorial
                </Button>
              </Link>
            </Flex>
          </Box>

          {/* Quiz Application */}
          <Box
            textAlign="center"
            p={5}
            maxW="container.md"
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: 'lg', bg: 'gray.50' }}
            transition="all 0.3s"
          >
            <Icon as={FaBook} w={12} h={12} color="#2b6cb0" />
            <Heading as="h2" size="lg" mt={4} color="#2b6cb0">
              Quiz Application
            </Heading>
            <Text fontSize="md" color="gray.600" mt={2}>
              <strong>Skills:</strong> React.js, Node.js, Express, MongoDB
            </Text>
            <Text fontSize="md" color="gray.600" mt={2}>
              <strong>Features:</strong> Dynamic quizzes, User progress tracking, Admin panel for quiz management
            </Text>
            <Text fontSize="md" color="gray.600" mt={4}>
              Developed a quiz application with dynamic quizzes, user progress tracking, and an admin panel for managing quizzes.
            </Text>
            <Flex direction="row" justify="center" mt={4}>
              <Link href="https://github.com/Ak-Sat09" isExternal>
                <Button colorScheme="teal" leftIcon={<FaLaptopCode />}>
                  Check Code
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@akumg09" isExternal>
                <Button colorScheme="blue" leftIcon={<FaVideo />}>
                  Project Video & Tutorial
                </Button>
              </Link>
            </Flex>
          </Box>

          {/* AI Monitoring & ChatBot */}
          <Box
            textAlign="center"
            p={5}
            maxW="container.md"
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: 'lg', bg: 'gray.50' }}
            transition="all 0.3s"
          >
            <Icon as={FaBook} w={12} h={12} color="#2b6cb0" />
            <Heading as="h2" size="lg" mt={4} color="#2b6cb0">
              AI Monitoring & ChatBot
            </Heading>
            <Text fontSize="md" color="gray.600" mt={2}>
              <strong>Skills:</strong> React.js, Node.js, NLP, Socket.io
            </Text>
            <Text fontSize="md" color="gray.600" mt={2}>
              <strong>Features:</strong> AI-based monitoring, AI chat bot, Real-time data processing, User interaction
            </Text>
            <Text fontSize="md" color="gray.600" mt={4}>
              Created an AI monitoring system and chat bot for real-time data processing and user interaction using NLP and Socket.io.
            </Text>
            <Flex direction="row" justify="center" mt={4}>
              <Link href="https://github.com/Ak-Sat09/" isExternal>
                <Button colorScheme="teal" leftIcon={<FaLaptopCode />}>
                  Check Code
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@akumg09" isExternal>
                <Button colorScheme="blue" leftIcon={<FaVideo />}>
                  Project Video & Tutorial
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Project;
