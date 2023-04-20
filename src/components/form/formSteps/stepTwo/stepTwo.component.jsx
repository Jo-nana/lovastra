import { useCallback } from 'react';
import Button from '../../../button/button.component';

import './stepTwo.styles.scss'

const StepTwo = ({formData, setFormData, onNext, onPrevious}) => {
  const handleInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    },
    [setFormData]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext();
  };

  const isFormValid =
  formData.realName && formData.dateOfBirth && formData.hourOfBirth && formData.placeOfBirth;

  return (
    <div>
      <h1>
        <span className="highlighted-text">Three</span> steps left to find your cosmic match
      </h1>
      <form onSubmit={handleSubmit} className='form-step-container'>
        <label className='label-container'>
          Real name
          <input
            type="text"
            name="realName"
            placeholder="John"
            value={formData.realName}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <label className='label-container'>
          Date of birth
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <label className='label-container'>
          Hour of birth
          <input
            type="time"
            name="hourOfBirth"
            value={formData.hourOfBirth}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <label className='label-container'>
          Place of birth
          <input
            type="text"
            name="placeOfBirth"
            placeholder="New York"
            value={formData.placeOfBirth}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <div className="form-buttons">
          <Button buttonType="secondary" onClick={onPrevious}>Previous</Button>
          <Button type="submit" disabled={!isFormValid}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
