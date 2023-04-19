import { useCallback } from "react";

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
    <h1>Four steps left to find your cosmic match</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
      </label>
        <button type="submit" disabled={!isFormValid}>
          Next
        </button>
      </form>
    </div>
  );


};

export default StepOne;
