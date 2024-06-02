import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Dog {

    @Prop()
    name: string;

    @Prop()
    breed_group: string;
    
    @Prop()
    size: string;

    @Prop()
    lifespan: string;

    @Prop()
    origin: string;

    @Prop()
    temparament: string;

    @Prop([String])
    colors: String[];

    @Prop()
    description: string;
    
    @Prop()
    image: string;

}

export const DogSchema = SchemaFactory.createForClass(Dog);