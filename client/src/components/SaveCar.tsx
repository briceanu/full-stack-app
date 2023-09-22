import { useState } from 'react';
import style from '../style/saveCar.module.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { saveCar } from '../apiFunctions';

export interface Data {
  year: number;
  status: string;
  color: string;
  type: string;
  description: string;
  brand: string;
}
const SaveCar = () => {
  const [formData, setFormData] = useState({
    year: 2010,
    color: 'red',
    brand: 'audi',
    type: 'sedan',
  });

  const [formDataTypeInput, setFormDataTypeInput] = useState({
    status: '',
  });
  const [formDataTypeTextarea, setFormDataTypeTextarea] = useState({
    description: '',
  });

  const queryClient = useQueryClient();

  const saveCarData = useMutation(
    async (userData: Data) => {
      await saveCar(
        userData.year,
        userData.color,
        userData.status,
        userData.description,
        userData.brand,
        userData.type
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['cars']);
      },
    }
  );
  const { status } = formDataTypeInput;
  const { year, color, brand, type } = formData;
  const { description } = formDataTypeTextarea;

  const handleSubmit = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();
    const selectedYear = parseInt(year.toString(), 10);
    // console.log(typeof selectedYear);
    try {
      await saveCarData.mutateAsync({
        year: selectedYear,
        color,
        status,
        description,
        brand,
        type,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeInputForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormDataTypeInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormDataTypeTextarea((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={`${style.color} ${style.select__wrapper}`}>
          <p>Color</p>
          <select name='color' onChange={handleChange} value={formData.color}>
            <option value='red'>red</option>
            <option value='yellow'>yellow</option>
            <option value='black'>black</option>
            <option value='pink'>pink</option>
            <option value='blue'>blue</option>
            <option value='brown'>brown</option>
          </select>
          <span></span>
        </div>
        <div className={`${style.year} ${style.select__wrapper}`}>
          <p>Year</p>
          <select name='year' value={formData.year} onChange={handleChange}>
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
          <span></span>
        </div>
        <div className={`${style.brand} ${style.select__wrapper}`}>
          <p>Brand</p>
          <select name='brand' value={formData.brand} onChange={handleChange}>
            <option value='audi'>Audi</option>
            <option value='seat'>Seat</option>
            <option value='mercedes'>Mercedes</option>
            <option value='volvo'>Volvo</option>
            <option value='dacia'>Dacia</option>
            <option value='bmw'>BMW</option>
          </select>
          <span></span>
        </div>
        <div className={`${style.type} ${style.select__wrapper}`}>
          <p>Type</p>
          <select name='type' value={formData.type} onChange={handleChange}>
            <option value='sedan'>Sedan</option>
            <option value='hatchback'>Hatchback</option>
            <option value='sport'>Sport</option>
            <option value='off_road'>off road</option>
          </select>
          <span></span>
        </div>
        <div>
          <label>
            <input
              type='radio'
              name='status'
              value='damaged'
              onChange={handleChangeInputForm}
            />
            Damaged
          </label>
          <label>
            <input
              type='radio'
              name='status'
              value='road worthy'
              onChange={handleChangeInputForm}
            />
            road worthy
          </label>
        </div>
        <div>
          <textarea
            placeholder='short description'
            name='description'
            cols={30}
            rows={10}
            value={formDataTypeTextarea.description}
            onChange={handleChangeTextarea}
          ></textarea>
        </div>
        <button type='submit'>saveawd</button>
      </form>
    </>
  );
};

export default SaveCar;
