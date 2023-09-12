import { CarCardProps } from './components/CarCard';

const API = 'http://localhost:3001';

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
