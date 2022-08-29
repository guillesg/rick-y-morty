export interface ImageInterface {
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
}

export interface CharactersInterface {
    gallery: ImageInterface[];
}