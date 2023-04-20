import { useCallback } from "react";
import { Fragment }  from "react";

import Button from "../../../button/button.component";

import '../stepOne/stepOne.styles.scss';

const StepThree = ({ formData, setFormData, onNext, onPrevious }) => {
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
    formData.gender && formData.lookingFor && formData.relationshipType;

  return (
    <div>
      <h1>
        <span className="highlighted-text">Two</span> steps left to find your cosmic match
      </h1>
      <form onSubmit={handleSubmit} className='form-step-container'>
        <Fragment>
          <label className='label-container'>
            Gender
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="">Please select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className='label-container'>
            What are you looking for?
            <select
              name="lookingFor"
              value={formData.lookingFor}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="">Please select</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="both">Both</option>
            </select>
          </label>

          <label className='label-container'>
            What kind of relationship are you looking for?
            <select
              name="relationshipType"
              value={formData.relationshipType}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="">Please select</option>
              <option value="friendship">Friendship</option>
              <option value="romance">Romance</option>
              <option value="casual">Casual</option>
              <option value="serious">Serious</option>
            </select>
          </label>
        </Fragment>

        <span className="form-buttons">
          <Button buttonType="secondary" onClick={onPrevious}>
            Previous
          </Button>
          <Button type="submit" disabled={!isFormValid}>
            Next
          </Button>
        </span>
      </form>
    </div>
  );
};

export default StepThree;
