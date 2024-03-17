import React from 'react';
import { Box, FormControl, FormLabel, Button, Stack, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import LocationAutocomplete from '../../Components/LocationAutoCompleate/LocationAutoCompleate';

function SearchDonorForm({ onSubmit }) {
  const { register, handleSubmit } = useForm(); // Initialize react-hook-form

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Stack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <LocationAutocomplete
        
              {...register('location')}
            />
          </FormControl>
          <FormControl id="location">
            <FormLabel>Location</FormLabel>
            <LocationAutocomplete
              // No need to manage state, react-hook-form handles it
              // value={formData.location}
              // onChange={(value) => handleChange('location', value)}
              {...register('location')}
            />
          </FormControl>
          <FormControl id="bloodGroup">
            <FormLabel>Blood Group</FormLabel>
            {/* <BloodGroupSelect
              value={formData.bloodGroup}
              onChange={(value) => handleChange('bloodGroup', value)}
            /> */}
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Search
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default SearchDonorForm;
