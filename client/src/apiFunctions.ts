import { CarCardProps } from './components/CarCard';
import { Data } from './components/SaveCar';
const API = 'http://localhost:3002';

export const fetchCars = async (): Promise<CarCardProps[]> => {
  try {
    const carsData = await fetch(`${API}/cars`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!carsData.ok) {
      const errorData = await carsData.json();
      throw new Error(errorData.message);
    }
    const cars = await carsData.json();
    return cars;
  } catch (error) {
    throw error;
  }
};
export const deleteCar = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return;
  } catch (error) {
    throw error;
  }
};

export const saveCar = async (
  year: number,
  status: string,
  color: string,
  type: string,
  description: string,
  brand: string
): Promise<Data> => {
  try {
    const data = await fetch(`${API}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        year,
        status,
        color,
        type,
        description,
        brand,
      }),
    });
    if (!data.ok) {
      const errorData = await data.json();
      console.error('Server Error:', errorData);
      throw errorData.message.at(0);
    }
    const responseData = await data.json();
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
