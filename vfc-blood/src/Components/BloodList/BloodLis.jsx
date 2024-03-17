import {Text } from '@chakra-ui/react';
import Table from 'react-bootstrap/Table';
import "./BloodList.scss";
import ProfileViewModal from '../ProfileViewModal/ProfileViewModal';
import FloatingActionButton from '../FloatingAcrtionButton/FlotingButton';

function BloodLis({data}) {
  return (
    <div className="blood_list">

      
      <Table striped bordered hover size="xs">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood</th>
            <th>Mobile</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((donor)=>{
            return <ProfileViewModal key={donor._id} data={donor}>
            {(onRowClick) => (
              <tr onClick={onRowClick}>
                <td>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    {donor.name}
                  </Text>
                </td>
                <td>{donor.blood}</td>
                <td>{donor.mobile}</td>
                <td>{donor.location}</td>
              </tr>
            )}
          </ProfileViewModal>
          })}
          
        </tbody>
      </Table>
      {/* <FloatingActionButton/> */}
    </div>
  );
}

export default BloodLis;
