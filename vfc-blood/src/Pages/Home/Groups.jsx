import React, { useEffect, useState } from 'react'
import axios from '../../Api/Api'
import { Text } from '@chakra-ui/react'
function Groups() {
    const [groupe,setGroupe]=useState()
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        try {
            let groups=await axios.get('core/blood-group')
            setGroupe(groups.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        {groupe&&groupe.map((g)=>{
            return <div key={g._id}>
                <Text> {g.name}</Text>
            </div>
        })}
    </div>
  )
}

export default Groups