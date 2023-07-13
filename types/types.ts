export interface BE_Services {
    id?: string;
    name?: string;
    image?: string;
    servicesList: BE_ServicesListProps[];
}

export interface BE_ServicesListProps {
    serviceId?: string;
    serviceName?: string;
    description?: string;
}
