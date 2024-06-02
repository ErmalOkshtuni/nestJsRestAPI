import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Query } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/CreateCat.dto";
import mongoose from "mongoose";
import { UpdateCatDto } from "./dto/UpdateCat.dto";
import { Cat } from "src/schemas/Cats.schema";

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService){}

    @Post()
    createCat(@Body() createCatDto: CreateCatDto) {
        //console.log(createCatDto);
        return this.catsService.createCat(createCatDto);
    }

    @Get()
    getCats(){
        return this.catsService.getCats();
    }

    @Get(":id")
    async getCatById(@Param("id") id:string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException("Cat not found", 404);
        const findCat = this.catsService.getCatById(id);
        if (!findCat) throw new HttpException("Cat not found", 404);
        return findCat;
    }

    @Patch(":id")
    async updateCat (@Param("id") id: string,  @Body() updateCatDto: UpdateCatDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException("Invalid ID", 400);
        const updateCat = await this.catsService.updateCat(id, updateCatDto);
        if(!updateCat) throw new HttpException("Cat not found", 404);
        return updateCat;
    }

    @Delete(":id")
    async deleteCat (@Param("id") id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException("Cat not found", 404);
        const deletedCat = await this.catsService.deleteCat(id);
        if(!deletedCat) throw new HttpException("Cat not found", 404);
    }

    @Get('search/by-name')
    async searchByName(@Query('name') name: string): Promise<Cat[]> {
        return this.catsService.searchCatsByName(name);
    }

}