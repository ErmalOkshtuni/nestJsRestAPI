import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateBirdDto {
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    species: string;

    @IsNotEmpty()
    family: string;

    @IsNotEmpty()
    habitat: string;

    @IsNotEmpty()
    place_of_found: string;

    @IsNotEmpty()
    diet: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    weight_kg: number;

    @IsNotEmpty()
    @IsNumber()
    height_cm: number;

    @IsNotEmpty()
    image: string;
}