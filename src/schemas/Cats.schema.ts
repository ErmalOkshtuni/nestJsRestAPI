import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Cat {

    @Prop()
    name: string;

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

export const CatSchema = SchemaFactory.createForClass(Cat);