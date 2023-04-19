import { useCallback } from 'react';

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
      <h1>Three steps left to find your cosmic match</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Real name
          <input
            type="text"
            name="realName"
            value={formData.realName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date of birth
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Hour of birth
          <input
            type="time"
            name="hourOfBirth"
            value={formData.hourOfBirth}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Place of birth
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={onPrevious}>Previous</button>
        <button type="submit" disabled={!isFormValid}>
          Next
        </button>
      </form>
    </div>
  );
};

export default StepTwo;
