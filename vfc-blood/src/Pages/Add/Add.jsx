import React, { useEffect, useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Stack, Select } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import LocationAutocomplete from '../../Components/LocationAutoCompleate/LocationAutoCompleate';
import axios  from '../../Api/Api';
function DonateForm() {
  const [groups,setGroups]=useState([])
  const { register, handleSubmit } = useForm({
    form: 'donateForm' // Set form name to "donateForm"
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };
  useEffect(()=>{
    fetchGorps()
  },[])
  const fetchGorps=async()=>{
    try {
      let {data}=await axios.get('/core/blood-group')
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }
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
              {groups.map((g)=>{
                return  <option key={g._id} value={g._id}>{g.name}</option>
              })}
             
              
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
