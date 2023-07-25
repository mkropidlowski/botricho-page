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

export enum BREAKPOINT {
    "MAX-LG" = "(max-width: 992px)",
    "MAX-MD" = "(max-width: 768px)",
    "MAX-SM" = "(max-width: 576px)",
}
