import { deleteCar } from '../apiFunctions';
import style from '../style/cars.module.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loading from './Loading';

export interface CarCardProps {
  id: string;
  brand: string;
  color: string;
  year: number;
  description: string;
  type: string;
  status: string;
}

const CarCard: React.FC<CarCardProps> = ({
  brand,
  color,
  year,
  description,
  id,
  status,
  type,
}) => {
  const queryClient = useQueryClient();
  const deleteData = useMutation({
    mutationFn: deleteCar,
    onSuccess: () => {
      queryClient.invalidateQueries(['cars']);
    },
  });

  const isQueryLoading = queryClient.isFetching(['cars']);
  if (isQueryLoading) {
    return <Loading />;
  }
  return (
    <div className={style.car__card}>
      <h1>Brand: {brand}</h1>
      <h2>Color: {color}</h2>
      <p>Year: {year}</p>
      <p>Type: {type}</p>
      <p>Description: {description}</p>
      <p>Status: {status}</p>
      <button
        className={style.remove__btn}
        onClick={() => {
          deleteData.mutate(id);
        }}
      >
        Remove Add
      </button>
    </div>
  );
};

export default CarCard;
