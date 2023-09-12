import { useQuery } from '@tanstack/react-query';
import CarCard, { CarCardProps } from '../components/CarCard';
import { fetchCars } from '../apiFunctions';
import Loading from './Loading';
import style from '../style/cars.module.scss';
import ErrorPage from './ErrorPage';
const CarsPage = () => {
  const getCars = useQuery({
    queryKey: ['cars'],
    queryFn: fetchCars,
  });

  const { data: cars, isLoading, isError } = getCars;

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    const error = getCars.error as Error;
    return <ErrorPage error={error} />;
  }

  return (
    <div className={style.cars__container}>
      {cars.map((car: CarCardProps, index) => (
        <CarCard
          key={index}
          brand={car.brand}
          year={car.year}
          color={car.color}
          description={car.description}
        />
      ))}
    </div>
  );
};

export default CarsPage;
