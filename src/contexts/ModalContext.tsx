import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface ModalContextProps {
    children: ReactNode
}

type ModalContextData = UseDisclosureReturn

const ModalContext = createContext({} as ModalContextData)

export function ModalContextProvider({children}: ModalContextProps){

    const discouver = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        discouver.onClose()
    }, [router.asPath])

    return (
        <ModalContext.Provider value={discouver}>
            {children}
        </ModalContext.Provider>
    )
}


export const useModal = () => useContext(ModalContext)