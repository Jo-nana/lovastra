import { useCallback } from "react";
import Button from '../../../button/button.component';

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

  return (
    <div>
      <h1>
        <span className="highlighted-text">Four</span> steps left to find your cosmic match
      </h1>
      <form onSubmit={handleSubmit} className='form-step-container'>
        <label className='label-container'>
          Username
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
          Email
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
          Password
          <input
            type="password"
            placeholder="********"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
          />
      </label>
        <Button type="submit" disabled={!isFormValid}>
          Next
        </Button>
      </form>
    </div>
  );


};

export default StepOne;
