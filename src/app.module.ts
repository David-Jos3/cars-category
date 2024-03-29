import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [CarModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
