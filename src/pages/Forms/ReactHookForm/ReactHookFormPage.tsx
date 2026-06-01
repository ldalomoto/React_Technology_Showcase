import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";

type FormData = {
  name: string;
  email: string;
};

export default function ReactHookFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert(`Name: ${data.name}\nEmail: ${data.email}`);
    reset();
  };

  return (
    <Box p={8}>
      <Heading mb={4} color="cyan.400">
        React Hook Form Demo
      </Heading>

      <Text mb={6} color="gray.400">
        Ejemplo simple de formulario con validaciones usando React Hook Form.
      </Text>

      <Box
        bg="gray.800"
        p={6}
        rounded="xl"
        maxW="400px"
        border="1px solid"
        borderColor="gray.700"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={5}>
            {/* Name */}
            <FormControl isInvalid={!!errors.name}>
              <FormLabel>Name</FormLabel>

              <Input
                placeholder="John Doe"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
              />

              <FormErrorMessage>
                {errors.name?.message}
              </FormErrorMessage>
            </FormControl>

            {/* Email */}
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>

              <Input
                type="email"
                placeholder="john@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
              />

              <FormErrorMessage>
                {errors.email?.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="cyan"
              loading={!!isSubmitting} // cambia de isLoading a loading
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}