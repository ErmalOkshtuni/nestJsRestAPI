import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Dog } from "src/schemas/Dogs.schema";
import { CreateDogDto } from "./dto/CreateDog.dto";
import { UpdateDogDto } from "./dto/UpdateDog.dto";

@Injectable()
export class DogsService {
    constructor(@InjectModel(Dog.name) private dogModel: Model<Dog>){}

    createDog(createDogDto: CreateDogDto) {
        const newDog = new this.dogModel(createDogDto);
        return newDog.save();
    }

    getDogs () {
        return this.dogModel.find();
    }

    getDogById (id: string) {
        return this.dogModel.findById(id);
    }

    updateDog (id: string, updateDogDto: UpdateDogDto) {
        return this.dogModel.findByIdAndUpdate(id, updateDogDto);
    }

    deleteDog (id: string) {
        return this.dogModel.findByIdAndDelete(id);
    }

    searchDogsByName(name: string) {
        return this.dogModel.find({ name: new RegExp(name, 'i') });
    }
}