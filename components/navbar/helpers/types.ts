export interface NavbarProps {
    links?: NavbarProps[];
    className?: string;
    text?: string;
}

export interface MenuLinksProps {
    id?: string;
    text?: string;
    redirectToComponent: boolean;
    scrollIntoTop: boolean;
}
