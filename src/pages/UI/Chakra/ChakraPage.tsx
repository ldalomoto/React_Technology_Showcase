import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Badge,
  Flex,
  Icon,
} from "@chakra-ui/react";

import { FiCode, FiLayout, FiZap } from "react-icons/fi";

export default function ChakraPage() {
  return (
    <Box
      minH="100vh"
      bg="gray.900"
      color="white"
      p={8}
    >
      {/* Header */}
      <Box mb={10}>
        <Badge colorScheme="purple" mb={3}>
          React + Chakra UI
        </Badge>

        <Heading
          mb={4}
          bgGradient="linear(to-r, cyan.300, purple.400)"
          bgClip="text"
        >
          Chakra UI Demo
        </Heading>

        <Text color="gray.400" maxW="600px">
          Ejemplo moderno y simple usando Chakra UI con cards,
          botones y diseño responsive.
        </Text>
      </Box>

      {/* Buttons */}
      <Stack direction="row" gap={4} mb={10}>
        <Button colorScheme="cyan">
          Primary
        </Button>

        <Button variant="outline" colorScheme="whiteAlpha">
          Secondary
        </Button>
      </Stack>

      {/* Cards */}
      <Flex gap={6} wrap="wrap">
        {/* Card 1 */}
        <Box
          bg="whiteAlpha.100"
          border="1px solid"
          borderColor="whiteAlpha.200"
          w="250px"
          borderRadius="md"
          overflow="hidden"
          p={4}
        >
          <Icon as={FiCode} boxSize={8} color="cyan.300" mb={4} />
          <Heading size="md" mb={2}>
            Clean Code
          </Heading>
          <Text color="gray.400">
            Componentes reutilizables y fáciles de mantener.
          </Text>
        </Box>

        {/* Card 2 */}
        <Box
          bg="whiteAlpha.100"
          border="1px solid"
          borderColor="whiteAlpha.200"
          w="250px"
          borderRadius="md"
          overflow="hidden"
          p={4}
        >
          <Icon as={FiLayout} boxSize={8} color="purple.300" mb={4} />
          <Heading size="md" mb={2}>
            Responsive
          </Heading>
          <Text color="gray.400">
            Diseño adaptable usando las utilidades de Chakra UI.
          </Text>
        </Box>

        {/* Card 3 */}
        <Box
          bg="whiteAlpha.100"
          border="1px solid"
          borderColor="whiteAlpha.200"
          w="250px"
          borderRadius="md"
          overflow="hidden"
          p={4}
        >
          <Icon as={FiZap} boxSize={8} color="yellow.300" mb={4} />
          <Heading size="md" mb={2}>
            Fast UI
          </Heading>
          <Text color="gray.400">
            Desarrollo rápido con componentes listos para usar.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}