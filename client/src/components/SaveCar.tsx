import style from '../style/saveCar.module.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { saveCar } from '../apiFunctions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export interface Data {
  year: number;
  status: string;
  color: string;
  type: string;
  description: string;
  brand: string;
}

const showToastSuccessMessage = () => {
  toast('Car saved !', {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    className: `${style.toast__message__success}`,
  });
};
const showToastErrorMessage = (error: any) => {
  toast.error(`Could not save! ${error}`, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    className: `${style.toast__message__error}`,
  });
};

const SaveCar = () => {
  const [isTextareaEmpty, setIsTextareaEmpty] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Data>({
    mode: 'all',
  });

  const queryClient = useQueryClient();

  const saveCarData = useMutation(
    async (userData: Data): Promise<void> => {
      const selectedYear = parseInt(userData.year.toString(), 10);
      const { year, status, color, type, description, brand } = userData;
      await saveCar(year, status, color, type, description, brand);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['cars']);
      },
    }
  );
  //formData is all the data in the form
  //handleChange and state is stored in ...register function
  const onSubmit: SubmitHandler<Data> = async (
    formData: Data
  ): Promise<void> => {
    try {
      await saveCarData.mutateAsync(formData);
      reset();
      setIsTextareaEmpty(!isTextareaEmpty);
      showToastSuccessMessage();
    } catch (error) {
      console.error('Error:', error);
      showToastErrorMessage(error);
    }
  };

  const handleTextareaInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const trimmedValue = event.target.value.trim();
    // Remove whitespace characters
    const nonWhitespaceCharacters = trimmedValue.replace(/\s/g, '');
    if (nonWhitespaceCharacters.length >= 10) {
      setIsTextareaEmpty(false);
    } else {
      setIsTextareaEmpty(true);
    }
  };
  return (
    <>
      {/* handleSubmit calls onSubmit function */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${style.color} ${style.select__wrapper}`}>
          <p>Color</p>
          {/* register is a replacement for name="color" */}
          <select {...register('color', { required: 'Color is Required...' })}>
            <option value=''>Select Color</option>
            <option value='red'>red</option>
            <option value='yellow'>yellow</option>
            <option value='black'>black</option>
            <option value='pink'>pink</option>
            <option value='blue'>blue</option>
            <option value='brown'>brown</option>
          </select>
          <p className={style.error}>{errors.color?.message}</p>
          <span></span>
        </div>
        <div className={`${style.year} ${style.select__wrapper}`}>
          <p>Year</p>
          <select
            {...register('year', {
              required: {
                value: true,
                message: 'Year is Required...',
              },
              valueAsNumber: true,
            })}
          >
            <option value=''>Select Year</option>
            <option value='2010'>2010</option>
            <option value='2011'>2011</option>
            <option value='2012'>2012</option>
            <option value='2013'>2013</option>
            <option value='2013'>2013</option>
            <option value='2014'>2014</option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017'>2017</option>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
          </select>
          <p className={style.error}>{errors.year?.message}</p>
          <span></span>
        </div>
        <div className={`${style.brand} ${style.select__wrapper}`}>
          <p>Brand</p>
          <select {...register('brand', { required: 'Brand is Required...' })}>
            <option value=''>Select Brand</option>
            <option value='audi'>Audi</option>
            <option value='seat'>Seat</option>
            <option value='mercedes'>Mercedes</option>
            <option value='volvo'>Volvo</option>
            <option value='dacia'>Dacia</option>
            <option value='bmw'>BMW</option>
          </select>
          <p className={style.error}>{errors.brand?.message}</p>
          <span></span>
        </div>
        <div className={`${style.type} ${style.select__wrapper}`}>
          <p>Type</p>
          <select
            {...register('type', {
              required: 'Type is Required...',
            })}
          >
            <option value=''>Select Type</option>
            <option value='sedan'>Sedan</option>
            <option value='hatchback'>Hatchback</option>
            <option value='sport'>Sport</option>
            <option value='off_road'>off road</option>
          </select>
          <p className={style.error}>{errors.type?.message}</p>
          <span></span>
        </div>
        <div>
          <label>
            <input
              type='radio'
              value='damaged'
              {...register('status', { required: 'Select a status' })}
            />
            Damaged
          </label>
          <label>
            <input
              type='radio'
              value='road worthy'
              {...register('status', { required: 'Select a status' })}
            />
            road worthy
          </label>
          <p className={style.error}>{errors.status?.message}</p>
        </div>
        <div>
          <textarea
            className={!isTextareaEmpty ? style.valid : undefined}
            {...register('description', {
              minLength: {
                value: 10,
                message: 'add at least 10 letters',
              },
              required: 'Please add a short description',
              validate: (value) => {
                const trimmedValue = value.trim();
                // Remove whitespace characters
                const nonWhitespaceCharacters = trimmedValue.replace(/\s/g, '');
                if (nonWhitespaceCharacters.length < 10) {
                  return 'Please add at least 10 non-whitespace characters';
                }
                return true;
              },
            })}
            cols={30}
            rows={10}
            placeholder='short description'
            //triggers the handleTextareaInput when you insert data
            onInput={handleTextareaInput}
          ></textarea>
          <p className={isTextareaEmpty ? style.error : undefined}>
            {errors.description?.message}
          </p>
        </div>
        <button disabled={isSubmitting} type='submit'>
          save
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default SaveCar;
