import { Controller, Get, Post, Body } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './entities/car.entity';

@Controller()
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post('/savecar')
  create(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return this.carService.create(createCarDto);
  }

  @Get('/cars')
  findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.carService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
  //   return this.carService.update(+id, updateCarDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.carService.remove(+id);
  // }
}
