import React, { useEffect, useState } from 'react'
import axios from '../../Api/Api'
import { Text } from '@chakra-ui/react'
import './Home.scss'
import { useNavigate } from 'react-router-dom'
function Groups() {
    const [groupe,setGroupe]=useState()
    const navigate=useNavigate()
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
    const navigateToBlood=(blood)=>{
        navigate(`/blood-list/${blood.name}`)
    }
  return (
    <div className='blood_card_area'>
        {groupe&&groupe.map((g)=>{
            return <div className='blood_card'  key={g._id} onClick={(e)=>{
                e.preventDefault()
                navigateToBlood(g)
            }}>
                <Text textAlign={'center'} fontSize={'30px'} fontWeight={'bold'}> {g.name}Ve</Text>
            </div>
        })}
    </div>
  )
}

export default Groups