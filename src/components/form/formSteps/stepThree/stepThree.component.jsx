import { useCallback } from "react";
import { Fragment }  from "react";

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
      <h1>Two steps left to find your cosmic match</h1>
      <form onSubmit={handleSubmit}>
        <Fragment>
          <label>
            Gender
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Please select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            What are you looking for?
            <select
              name="lookingFor"
              value={formData.lookingFor}
              onChange={handleInputChange}
            >
              <option value="">Please select</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="both">Both</option>
            </select>
          </label>
          <label>
            What kind of relationship are you looking for?
            <select
              name="relationshipType"
              value={formData.relationshipType}
              onChange={handleInputChange}
            >
              <option value="">Please select</option>
              <option value="friendship">Friendship</option>
              <option value="romance">Romance</option>
              <option value="casual">Casual</option>
              <option value="serious">Serious</option>
            </select>
          </label>
        </Fragment>
        <button type="button" onClick={onPrevious}>
          Previous
        </button>
        <button type="submit" disabled={!isFormValid}>
          Next
        </button>
      </form>
    </div>
  );
};

export default StepThree;
