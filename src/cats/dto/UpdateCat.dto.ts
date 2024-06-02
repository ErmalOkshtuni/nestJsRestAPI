import { IsArray, IsNotEmpty } from "class-validator";

export class UpdateCatDto {
    
    @IsNotEmpty()
    name: string;

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