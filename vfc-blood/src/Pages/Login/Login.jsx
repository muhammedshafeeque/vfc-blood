import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate()

  const onSubmit = (data) => {
    if(data.userName=== 'admin'&& data.password=== '123'){
      navigate('/admin')
    }
  };

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      boxShadow="lg"
      mt="20"
      display={'flex'}
      justifyContent={'center'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="4">
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="text" {...register('userName')} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" {...register('password')} />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default Login;
