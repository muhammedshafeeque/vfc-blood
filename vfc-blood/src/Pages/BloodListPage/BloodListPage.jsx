import React, { useEffect, useState } from "react";
import BloodLis from "../../Components/BloodList/BloodLis";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import axios from '../../Api/Api'
function BloodListPage() {
  let { groupName } = useParams();
  const [donors,setDonors]=useState()
  useEffect(()=>{
fetchDonor()
  },[])
 const  fetchDonor=async()=>{
  try {
    let {data} =await  axios.get(`/user/donors?groupName=${groupName}`)
    setDonors(data)
  } catch (error) {
    console.log(error)
  }

  }
  return (
    <div>
      <Box width={"100%"} mt={5}>
        <Text className="blood_head">{groupName} ve Blood</Text>
      </Box>
      {donors&&<BloodLis data={donors}  />}
      
    </div>
  );
}

export default BloodListPage;
