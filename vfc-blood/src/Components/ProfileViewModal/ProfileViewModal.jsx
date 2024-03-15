import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, Tbody, Td, Tr, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

function ProfileViewModal({ children , data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalMargin = useBreakpointValue({ base: "20px", sm: "0" }); // Adjust the margin as needed

  const handleRowClick = () => {
    onOpen();
  };

  return (
    <>
      {children(handleRowClick)}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={modalMargin}> {/* Apply margin */}
          <ModalHeader>{data.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple" size="sm">
              <Tbody>
                {Object.entries(data).map(([key, value]) => (
                  <Tr key={key}>
                    <Td>{key}</Td>
                    <Td>{value}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green">Call</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfileViewModal;
