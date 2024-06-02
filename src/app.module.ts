import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { BirdsModule } from './birds/birds.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1/nestjs"), DogsModule, CatsModule, BirdsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
