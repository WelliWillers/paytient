import { Fade, Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
    icon?: ElementType;
    children: string;
    label?: string;
    href: string;
}

export function NavLink({icon, children, label, href = '#', ...rest}:NavLinkProps){
    
    const {isOpen} = useSidebarDrawer()

    return (
        <ActiveLink href={href} passHref >
            <Link display="flex" alignItems="center" justifyContent={isOpen ? 'start' : 'center'} {...rest}>
                <Icon as={icon} fontSize="20"/>
                { 
                    isOpen && (
                        <Fade in={isOpen}>
                            <Text ml="4" fontWeight="medium">{children}</Text>
                        </Fade>
                    )
                }
            </Link>
        </ActiveLink>
    )
}