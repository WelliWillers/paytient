import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ModalContextProps {
    children: ReactNode
}

type ModalProviderContextProps = {
    isOpen: boolean
    isConfirm: boolean
    onClose: () => void
    toggleIsOpen: () => void
    setModalParts: any
    modalParts: ModalPartsProps
    toggleConfirm: () => void
}

type ModalPartsProps = {
    title: string;
    subtitle: string;
    isDelete?: boolean;
    type: 'warning' | 'success';
}

const ModalContext = createContext({} as ModalProviderContextProps)
export function ModalContextProvider({children}: ModalContextProps){

    const [ modalParts, setModalParts ] = useState<ModalPartsProps>({} as ModalPartsProps)

    const [ isOpen, setIsOpen ] = useState(false)
    const [ isConfirm, setIsConfirm ] = useState(false)

    function onClose(){
        setIsOpen(false)
    }
    
    function toggleIsOpen(){
        setIsOpen(!isOpen)
    }
    
    function toggleConfirm() {
        setIsOpen(false)
        setIsConfirm(!isConfirm)
    }

    return (
        <ModalContext.Provider value={{isOpen, isConfirm, toggleConfirm, toggleIsOpen, onClose, setModalParts, modalParts}}>
            {children}
        </ModalContext.Provider>
    )
}

//hook do modal
export const useModal = () => useContext(ModalContext)