import { Button } from "@chakra-ui/react";

interface PaginationProps {
    number: number;
    isCurrent?: boolean; 
}

export function PaginationItem({isCurrent, number}: PaginationProps) {
    if(isCurrent) {
        return (
            <Button fontSize="xs" w="4" colorScheme="primary.normal" disabled _disabled={{bgColor: 'primary.normal', cursor: 'gray.900'}} size="sm">
                {number}
            </Button>
        )
    }

    return (
        <Button fontSize="xs" bg="gray.200" w="4" _hover={{bgColor: 'primary.hover', color: 'white'}} size="sm">
            {number}
        </Button>
    )
}