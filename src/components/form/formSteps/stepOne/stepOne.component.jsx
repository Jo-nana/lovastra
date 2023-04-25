import { useCallback } from "react";
import Button from '../../../button/button.component';

import strings from '../../../../string'

import './stepOne.styles.scss';


const StepOne = ({formData, setFormData, onNext}) => {

  // useCallback is used to prevent the function from being recreated on every render
  const handleInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    },
    [setFormData]
  );

  // Prevents the default action of the event from happening
  const handleSubmit = (event) => {
    event.preventDefault();
    onNext();
  };

  // If all the fields are filled, the button is enabled
  const isFormValid =
  formData.username && formData.email && formData.password;


  // variables to handle strings group
  const string = strings.firstStepForm
  const generalString = strings.general

  // split the header text for styling
  const headerText =  string.headerText;
  const firstWord = headerText.split(' ')[0]; // target the first word of the sentence
  const restOfString = headerText.slice(firstWord.length +1); // give the rest of the sentence

  return (
    <div>
      <h1>
        <span className="highlighted-text">{firstWord}</span> {restOfString}
      </h1>
      <form onSubmit={handleSubmit} className='form-step-container'>
        <label className='label-container'>
          {string.usernameText}
          <input
            type="text"
            name="username"
            placeholder="John2023"
            value={formData.username}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <label className='label-container'>
          {string.emailText}
          <input
            type="text"
            name="email"
            placeholder="John@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <label className='label-container'>
          {string.passwordText}
          <input
            type="password"
            placeholder="********"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
          />
      </label>
      <span className="next-button">
        <Button type="submit" disabled={!isFormValid}>
          {generalString.nextButtonText}
        </Button>
      </span>
      </form>
    </div>
  );


};

export default StepOne;
