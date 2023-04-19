const StepTwo = ({formData, setFormData, onNext, onPrevious}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext();
  };

  return (
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
      <button type="submit">Next</button>
    </form>
  );
};

export default StepTwo;
