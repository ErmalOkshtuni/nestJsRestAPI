import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Dog, DogSchema} from "src/schemas/Dogs.schema";
import { DogsService } from "./dogs.service";
import { DogsController } from "./dogs.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Dog.name,
            schema: DogSchema,
            },
        ]),
    ],
    providers: [DogsService],
    controllers: [DogsController],
})
export class DogsModule {

}