import { IsArray, IsNotEmpty } from "class-validator";

export class CreateDogDto {
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    breed_group: string;

    @IsNotEmpty()
    size: string;

    @IsNotEmpty()
    lifespan: string;

    @IsNotEmpty()
    origin: string;

    @IsNotEmpty()
    temparament: string;

    @IsNotEmpty()
    @IsArray()
    colors: string[];

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    image: string;
}