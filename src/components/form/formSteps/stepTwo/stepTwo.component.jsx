import { useCallback } from 'react';
import Button from '../../../button/button.component';

import strings from '../../../../string';

import './stepTwo.styles.scss';

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

  // variables to handle strings group
  const string = strings.secondStepForm
  const generalString = strings.general

  // split the header text for styling
  const headerText =  string.headerText;
  const firstWord = headerText.split(' ')[0]; // target the first word of the sentence
  const restOfString = headerText.slice(firstWord.length +1); // give the rest of the sentence

  const isFormValid =
  formData.realName && formData.dateOfBirth && formData.hourOfBirth && formData.placeOfBirth;

  return (
    <div>
      <h1>
        <span className="highlighted-text">{firstWord}</span> {restOfString}
      </h1>
      <form onSubmit={handleSubmit} className='form-step-container'>
        <label className='label-container'>
          {string.realNameText}
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
          {string.dateOfBirthText}
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <label className='label-container'>
          {string.hourOfBirthText}
          <input
            type="time"
            name="hourOfBirth"
            value={formData.hourOfBirth}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <label className='label-container'>
          {string.placeOfBirthText}
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
          <Button buttonType="secondary" onClick={onPrevious}>
            {generalString.previousButtonText}
          </Button>
          <Button type="submit" disabled={!isFormValid}>
            {generalString.nextButtonText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
