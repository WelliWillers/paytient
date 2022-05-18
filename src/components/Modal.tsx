import { Button, Heading, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text } from "@chakra-ui/react";
import { RiAlertLine, RiCheckboxCircleLine, RiCloseCircleLine, RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
import { useModal } from "../contexts/ModalContext";

export function ModalBase(){

    const { isOpen, onClose, modalParts, toggleConfirm } = useModal()

    return (
        <Modal isCentered onClose={onClose} size="lg" onEsc={onClose} motionPreset="slideInBottom" isOpen={isOpen}>  
            <ModalOverlay />
            <ModalContent borderRadius={25} w="700px" maxWidth="90%" py="10">
                <ModalCloseButton onClick={onClose} />
                <ModalBody p="12" display="flex" alignItems="center" textAlign="center" justifyContent="center" flexDirection="column">
                    {
                        modalParts.isDelete && <Icon as={RiCloseCircleLine} fontSize="70" color="red" /> 
                    }{
                        modalParts.type === 'success' && <Icon as={RiCheckboxCircleLine} fontSize="70" color="green" />
                    }{
                        modalParts.type === 'warning' && <Icon as={RiAlertLine} fontSize="70" color="orange" />
                    }
                    <Heading fontSize="30">{modalParts.title}</Heading>
                    <Text>{modalParts.subtitle}</Text>
                </ModalBody>
                <ModalFooter display="flex" justifyContent="center" gap="3">
                    <Button leftIcon={<Icon as={RiCloseLine} fontSize="18" />} onClick={onClose}>Fechar</Button>
                    {
                        modalParts.isDelete && <Button bgColor="red" color="white" leftIcon={<Icon as={RiDeleteBin6Line} fontSize="18" />} onClick={toggleConfirm}>Deletar</Button>
                    }                    
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}