import { observer } from "mobx-react-lite";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { counterStore } from "../../../stores/counterStore";

const MobxPage = observer(() => {
  return (
    <Box p={8}>
      <Heading mb={4} color="purple.400">
        MobX Demo
      </Heading>

      <Text mb={6} color="gray.400">
        Ejemplo simple de estado reactivo usando MobX.
      </Text>

      <Box
        bg="gray.800"
        p={6}
        rounded="xl"
        maxW="300px"
        border="1px solid"
        borderColor="gray.700"
      >
        <Stack gap={5}>
          <Text fontSize="4xl" fontWeight="bold" textAlign="center">
            {counterStore.count}
          </Text>

          <Flex gap={3}>
            <Button
              colorScheme="purple"
              onClick={() => counterStore.increment()}
            >
              +
            </Button>

            <Button
              colorScheme="red"
              onClick={() => counterStore.decrement()}
            >
              -
            </Button>

            <Button
              colorScheme="gray"
              onClick={() => counterStore.reset()}
            >
              Reset
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
});

export default MobxPage;