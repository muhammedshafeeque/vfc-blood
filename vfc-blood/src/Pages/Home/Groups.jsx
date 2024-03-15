import React, { useEffect, useState } from 'react'
import axios from '../../Api/Api'
import { Text } from '@chakra-ui/react'
import './Home.scss'
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
    <div className='blood_card_area'>
        {groupe&&groupe.map((g)=>{
            return <div className='blood_card'  key={g._id}>
                <Text textAlign={'center'} fontSize={'30px'} fontWeight={'bold'}> {g.name}</Text>
            </div>
        })}
    </div>
  )
}

export default Groups