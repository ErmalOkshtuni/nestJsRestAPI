import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Query } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { CreateDogDto } from "./dto/CreateDog.dto";
import mongoose from "mongoose";
import { UpdateDogDto } from "./dto/UpdateDog.dto";
import { Dog } from "src/schemas/Dogs.schema";

@Controller('dogs')
export class DogsController {

    constructor(private dogsService: DogsService){}

    @Post()
    createDog(@Body() createDogDto: CreateDogDto) {
        //console.log(createDogDto);
        return this.dogsService.createDog(createDogDto);
    }

    @Get()
    getDogs(){
        return this.dogsService.getDogs();
    }

    @Get(":id")
    async getDogById(@Param("id") id:string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException("Dog not found", 404);
        const findDog = this.dogsService.getDogById(id);
        if (!findDog) throw new HttpException("Dog not found", 404);
        return findDog;
    }

    @Patch(":id")
    async updateDog (@Param("id") id: string,  @Body() updateDogDto: UpdateDogDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException("Invalid ID", 400);
        const updateDog = await this.dogsService.updateDog(id, updateDogDto);
        if(!updateDog) throw new HttpException("Dog not found", 404);
        return updateDog;
    }

    @Delete(":id")
    async deleteDog (@Param("id") id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException("Dog not found", 404);
        const deletedDog = await this.dogsService.deleteDog(id);
        if(!deletedDog) throw new HttpException("Dog not found", 404);
    }

    @Get('search/by-name')
    async searchByName(@Query('name') name: string): Promise<Dog[]> {
        return this.dogsService.searchDogsByName(name);
    }

}