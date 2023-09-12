import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { CarRepository } from 'src/car.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(
    //this InjectRepository is from typeORM
    @InjectRepository(CarRepository)
    private readonly carRepository: CarRepository,
  ) {}

  create(createCarDto: CreateCarDto): Promise<Car> {
    return this.carRepository.createCar(createCarDto);
  }

  findAll(): Promise<Car[]> {
    return this.carRepository.findAllCars();
  }
}
