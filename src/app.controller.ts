import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpCode } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }
}
