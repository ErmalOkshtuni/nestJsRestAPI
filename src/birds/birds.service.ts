import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Bird } from "src/schemas/Birds.schema";
import { CreateBirdDto } from "./dto/CreateBird.dto";
import { UpdateBirdDto } from "./dto/UpdateBird.dto";

@Injectable()
export class BirdsService {
    constructor(@InjectModel(Bird.name) private birdModel: Model<Bird>){}

    createBird(createBirdDto: CreateBirdDto) {
        const newBird = new this.birdModel(createBirdDto);
        return newBird.save();
    }

    getBirds () {
        return this.birdModel.find();
    }

    getBirdById (id: string) {
        return this.birdModel.findById(id);
    }

    updateBird (id: string, updateBirdDto: UpdateBirdDto) {
        return this.birdModel.findByIdAndUpdate(id, updateBirdDto);
    }

    deleteBird (id: string) {
        return this.birdModel.findByIdAndDelete(id);
    }

    searchBirdsByName(name: string) {
        return this.birdModel.find({ name: new RegExp(name, 'i') }); 
    }
}