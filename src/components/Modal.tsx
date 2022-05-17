import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useModal } from "../contexts/ModalContext";

interface ModalProps {
    title: string;
    subtitle: string;
    isDelete: boolean;
    type: 'warning' | 'error' | 'success' | 'delete';
}

export function ModalBase({title, subtitle, isDelete, type}:ModalProps){

    const {onClose, isOpen} = useModal()

    return (
        <Modal isCentered onClose={onClose} size="lg" motionPreset="slideInBottom" isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton onClick={onClose} />
                <ModalBody>
                    {subtitle}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}