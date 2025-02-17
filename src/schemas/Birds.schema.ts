import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Bird {

    @Prop()
    name: string;

    @Prop()
    species: string;
    
    @Prop()
    family: string;

    @Prop()
    habitat: string;

    @Prop()
    place_of_found: string;

    @Prop()
    diet: string;

    @Prop()
    description: string;

    @Prop()
    weight_kg: number;

    @Prop()
    height_cm: number;
    
    @Prop()
    image: string;

}

export const BirdSchema = SchemaFactory.createForClass(Bird);