import { FormControl, FormLabel, Input as ChakraInput, InputLeftElement, InputGroup, InputProps as ChakraInputProps, Icon} from "@chakra-ui/react";
import { ElementType } from "react";


interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    icon?: ElementType
}

export function Input ({name, label, icon, ...rest }: InputProps) {
    return (
        <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
                
            <InputGroup>
                {
                    icon && (
                        <InputLeftElement
                            h="100%"
                            pointerEvents='none'
                            fontSize='1.2em'
                            children={<Icon size="lg" p="0" m="0" as={icon} />}
                        />
                    )
                }
                
                <ChakraInput
                    {...rest} 
                    name={name}
                    id={name} 
                    focusBorderColor='primary.normal'
                    bgColor='gray.50'
                    variant="outline"
                    fontSize="14"
                    _hover={
                        {
                            bgColor: 'gray.50'
                        }
                    }
                    size="lg"
                />
            </InputGroup>

        </FormControl>
    )
}