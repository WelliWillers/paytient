import {FormControl, FormLabel, InputGroup, InputProps, Select, InputLeftElement, Icon} from '@chakra-ui/react'
import { ElementType } from 'react';

interface SelectProps extends InputProps{
    name: string;
    label?: string;
    icon?: ElementType;
}

export function SelectBase({name, label, icon, ...rest}:SelectProps) {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
                
            <InputGroup>
                {
                    icon && (
                        <InputLeftElement
                            h="100%"
                            pointerEvents='none'
                            fontSize='1.2em'
                            children={<Icon size="lg" color="primary.normal" p="0" m="0" as={icon} />}
                        />
                    )
                }

                <Select>
                    <option value='m'>Masculino</option>
                    <option value='f'>Feminino</option>
                </Select>
            </InputGroup>
        </FormControl>
    )
}