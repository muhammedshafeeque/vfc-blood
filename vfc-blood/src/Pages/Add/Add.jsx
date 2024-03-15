import React from 'react';
import { Box, FormControl, FormLabel, Input, Button, Stack, Select } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import LocationAutocomplete from '../../Components/LocationAutoCompleate/LocationAutoCompleate';

function DonateForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: 'John Doe',
      dob: '1992-01-01', // Example date of birth
      weight: 68,
      blood: 'A+',
      location: 'New York',
      mobile: '1234567890',
      lastDonate: '2023-03-14',
      status: 'Active'
    },
    form: 'donateForm' // Set form name to "donateForm"
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Enter name" {...register('name')} />
          </FormControl>
          <FormControl id="dob" isRequired>
            <FormLabel>Date of Birth</FormLabel>
            <Input type="date" {...register('dob')} />
          </FormControl>
          <FormControl id="weight" isRequired>
            <FormLabel>Weight</FormLabel>
            <Input type="number" placeholder="Enter weight" {...register('weight')} />
          </FormControl>
          <FormControl id="blood" isRequired>
            <FormLabel>Blood Type</FormLabel>
            <Select placeholder="Select blood type" {...register('blood')}>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </Select>
          </FormControl>
          <FormControl id="location" isRequired>
            <FormLabel>Location</FormLabel>
            <LocationAutocomplete
              value={register('location').value}
              onChange={(value) => register('location').onChange(value)}
            />
          </FormControl>
          <FormControl id="mobile" isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input type="tel" placeholder="Enter mobile number" {...register('mobile')} />
          </FormControl>
          <FormControl id="lastDonate" isRequired>
            <FormLabel>Last Donation Date</FormLabel>
            <Input type="date" {...register('lastDonate')} />
          </FormControl>
          <FormControl id="status" isRequired>
            <FormLabel>Status</FormLabel>
            <Input type="text" placeholder="Enter status" {...register('status')} />
          </FormControl>
          <Button type="submit" colorScheme="blue">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
}

export default DonateForm;
