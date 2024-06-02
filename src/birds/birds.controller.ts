import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Query } from "@nestjs/common";
import { BirdsService } from "./birds.service";
import { CreateBirdDto } from "./dto/CreateBird.dto";
import mongoose from "mongoose";
import { UpdateBirdDto } from "./dto/UpdateBird.dto";
import { Bird } from "src/schemas/Birds.schema";

@Controller('birds')
export class BirdsController {

    constructor(private birdsService: BirdsService){}

    @Post()
    createBird(@Body() createBirdDto: CreateBirdDto) {
        //console.log(createBirdDto);
        return this.birdsService.createBird(createBirdDto);
    }

    @Get()
    getBirds(){
        return this.birdsService.getBirds();
    }

    @Get(":id")
    async getBirdById(@Param("id") id:string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException("Bird not found", 404);
        const findBird = this.birdsService.getBirdById(id);
        if (!findBird) throw new HttpException("Bird not found", 404);
        return findBird;
    }

    @Patch(":id")
    async updateBird (@Param("id") id: string,  @Body() updateBirdDto: UpdateBirdDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException("Invalid ID", 400);
        const updateBird = await this.birdsService.updateBird(id, updateBirdDto);
        if(!updateBird) throw new HttpException("Bird not found", 404);
        return updateBird;
    }

    @Delete(":id")
    async deleteBird (@Param("id") id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException("Bird not found", 404);
        const deletedBird = await this.birdsService.deleteBird(id);
        if(!deletedBird) throw new HttpException("Bird not found", 404);
    }

    @Get('search/by-name')
    async searchBirdByName(@Query('name') name: string): Promise<Bird[]> {
        return this.birdsService.searchBirdsByName(name);
    }

}