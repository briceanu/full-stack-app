import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  description: string;
}
