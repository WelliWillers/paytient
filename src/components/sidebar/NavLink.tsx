import { Fade, Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

interface NavLinkProps extends LinkProps {
    icon?: ElementType;
    children: string;
}

export function NavLink({icon, children, ...rest}:NavLinkProps){
    
    const {isOpen} = useSidebarDrawer()

    return (
        <Link display="flex" alignItems="center" {...rest}>
            <Icon as={icon} fontSize="20"/>
            { 
                isOpen && (
                    <Fade in={isOpen}>
                        <Text ml="4" fontWeight="medium">{children}</Text>
                    </Fade>
                )
            }
        </Link>
    )
}