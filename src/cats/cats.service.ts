import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cat } from "src/schemas/Cats.schema";
import { CreateCatDto } from "./dto/CreateCat.dto";
import { UpdateCatDto } from "./dto/UpdateCat.dto";

@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private catModel: Model<Cat>){}

    createCat(createCatDto: CreateCatDto) {
        const newCat = new this.catModel(createCatDto);
        return newCat.save();
    }

    getCats () {
        return this.catModel.find();
    }

    getCatById (id: string) {
        return this.catModel.findById(id);
    }

    updateCat (id: string, updateCatDto: UpdateCatDto) {
        return this.catModel.findByIdAndUpdate(id, updateCatDto);
    }

    deleteCat (id: string) {
        return this.catModel.findByIdAndDelete(id);
    }

    searchCatsByName(name: string) {
        return this.catModel.find({ name: new RegExp(name, 'i') }); 
    }
}