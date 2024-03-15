import { Box, Text } from '@chakra-ui/react';
import Table from 'react-bootstrap/Table';
import "./BloodList.scss";
import ProfileViewModal from '../../Components/ProfileViewModal/ProfileViewModal';
import FloatingActionButton from '../../Components/FloatingAcrtionButton/FlotingButton';

function BloodLis() {
    const profileData = {
        name: "John Doe",
        Age: 30,
        Wight:68,
        blood: "A+",
        location: "New York",
        mobile: "1234567890",
        lastDonate: "2023-03-14",
        status: "Active",
      }
  return (
    <div className="blood_list">
      <Box  width={'100%'} mt={5}>
        <Text className="blood_head">A+ve Blood</Text>
      </Box>
      
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
          <ProfileViewModal data={profileData}>
            {(onRowClick) => (
              <tr onClick={onRowClick}>
                <td>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    Muhammed Shafeeque P
                  </Text>
                </td>
                <td>A +ve</td>
                <td>8075806497</td>
                <td>Vazhakkili</td>
              </tr>
            )}
          </ProfileViewModal>
        </tbody>
      </Table>
      <FloatingActionButton/>
    </div>
  );
}

export default BloodLis;
