import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Bird, BirdSchema} from "src/schemas/Birds.schema";
import { BirdsService } from "./birds.service";
import { BirdsController } from "./birds.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Bird.name,
            schema: BirdSchema,
            },
        ]),
    ],
    providers: [BirdsService],
    controllers: [BirdsController],
})
export class BirdsModule {

}