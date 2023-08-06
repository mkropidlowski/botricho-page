export interface BE_Services {
    id?: string;
    title?: string;
    image?: string;
    description?: string;
    category?: string;
    subCategoryName?: string;
}

export interface BE_Category {
    id?: string;
    name?: string;
    image?: string;
}

export interface BE_SubCategory {
    id?: string;
    subName?: string;
    mainCategory?: string;
    slugName?: string;
}
