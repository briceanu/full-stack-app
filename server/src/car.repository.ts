import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car/entities/car.entity';
import { CreateCarDto } from './car/dto/create-car.dto';
import { NotFoundException } from '@nestjs/common';

export class CarRepository extends Repository<Car> {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {
    super(
      carRepository.target,
      carRepository.manager,
      carRepository.queryRunner,
    );
  }

  async createCar(createCarDto: CreateCarDto): Promise<Car> {
    const { brand, status, color, type, year, description } = createCarDto;
    const car = this.create({
      color,
      year,
      brand,
      type,
      status,
      description,
    });

    const saveCar = await this.save(car);
    return saveCar;
  }

  async findAllCars(): Promise<Car[]> {
    const cars = await this.carRepository.find();
    if (cars.length === 0) {
      throw new NotFoundException('No cars avalilable to be displayed');
    }

    return cars;
  }
}
