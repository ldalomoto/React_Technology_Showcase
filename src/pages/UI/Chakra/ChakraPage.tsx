import { Box, Heading, Text, Button, Stack, Badge } from "@chakra-ui/react";

export default function ChakraPage() {
  return (
    <Box p={8}>
      <Heading color="blue.400" mb={4}>
        Chakra UI Demo
      </Heading>

      <Text mb={6} color="gray.400">
        Ejemplo básico de componentes usando Chakra UI dentro del proyecto React Technology Showcase.
      </Text>

      <Stack direction="row" gap={3} mb={6}>
        <Badge colorScheme="blue">React</Badge>
        <Badge colorScheme="purple">Chakra UI</Badge>
        <Badge colorScheme="green">UI Library</Badge>
      </Stack>

      <Stack gap={4} maxW="400px">
        <Button colorScheme="blue">Primary Button</Button>
        <Button colorScheme="gray">Secondary Button</Button>
        <Button colorScheme="red">Danger Button</Button>
      </Stack>
    </Box>
  );
}