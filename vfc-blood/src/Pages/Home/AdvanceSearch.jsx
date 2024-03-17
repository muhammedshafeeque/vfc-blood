import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Stack,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import LocationAutocomplete from "../../Components/LocationAutoCompleate/LocationAutoCompleate";
import axios from "../../Api/Api";
import BloodLis from "../../Components/BloodList/BloodLis";
function SearchDonorForm({ onSubmit }) {
  const [groups, setGroups] = useState([]);
  const [donor,setDonors]=useState([])
  const [skip,setSkip]=useState(0)
  const [params,setParams]=useState()
  const { register, handleSubmit, setValue } = useForm({
    form: "searchForm",
  });

  const onSubmitForm =async (data) => {

searchData(data,0)
    setSkip(0)
    setParams(data)
  };
 const searchData=async (data,skips)=>{
    setSkip(skips)
    try {
      let results=await axios.get(`user/donors?group=${data.blood}&location=${data.location?data.location._id:''}&skip=${skips}`)
      setDonors(results.data)
      if(results.data.length){
        setSkip(skips)
      }else{
        setSkip(0)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const { data } = await axios.get("/core/blood-group");
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Stack spacing={4}>
          {/* <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <LocationAutocomplete
        
              {...register('location')}
            />
          </FormControl> */}
          <FormControl id="location">
            <FormLabel>Location</FormLabel>
            <LocationAutocomplete
              value={register("location").value}
              onChange={(value) => setValue("location", value)}
            />
          </FormControl>
          <FormControl id="bloodGroup">
            <FormLabel>Blood Group</FormLabel>
            <Select placeholder="Select blood type" {...register("blood")}>
              {groups.map((g) => (
                <option key={g._id} value={g._id}>
                  {g.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Search
          </Button>
        </Stack>
      </form>
      <Box mt={5}>
      {donor.length?<BloodLis  data={donor} />:''}
      </Box>
      {donor.length?<Box display={'flex'} justifyContent={'flex-end'}>
                <Button  onClick={()=>{
                  searchData(params,skip+10)
                }}>Next</Button>
      </Box>:''}
      
    </Box>
  );
}

export default SearchDonorForm;
