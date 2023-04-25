import { useCallback } from "react";
import { Fragment }  from "react";

import Button from "../../../button/button.component";
import strings from '../../../../string'

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


  // variables to handle strings group
  const string = strings.thirdStepForm
  const genderSelection = string.genderSelection
  const lookingForSelection = string.lookingForSelection
  const relationshipSelection = string.relationshipSelection
  const generalString = strings.general

  // split the header text for styling
  const headerText =  string.headerText;
  const firstWord = headerText.split(' ')[0]; // target the first word of the sentence
  const restOfString = headerText.slice(firstWord.length +1); // give the rest of the sentence

  // authorise to go to the next step if form is filled
  const isFormValid =
    formData.gender && formData.lookingFor && formData.relationshipType;

  return (
    <div>
      <h1>
        <span className="highlighted-text">{firstWord}</span> {restOfString}
      </h1>
      <form onSubmit={handleSubmit} className='form-step-container'>
        <Fragment>
          <label className='label-container'>
            {string.genderText}
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="">{string.selectText}</option>
              <option value="male">{genderSelection.maleSelectionText}</option>
              <option value="female">{genderSelection.femaleSelectionText}</option>
              <option value="other">{genderSelection.otherSelectionText}</option>
            </select>
          </label>

          <label className='label-container'>
          {string.lookingForText}
            <select
              name="lookingFor"
              value={formData.lookingFor}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="">{string.selectText}</option>
              <option value="men">{lookingForSelection.menSelectionText}</option>
              <option value="women">{lookingForSelection.womenSelectionText}</option>
              <option value="both">{lookingForSelection.bothSelectionText}</option>
            </select>
          </label>

          <label className='label-container'>
            {string.relationshipText}
            <select
              name="relationshipType"
              value={formData.relationshipType}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="">{string.selectText}</option>
              <option value="friendship">{relationshipSelection.friendshipSelection}</option>
              <option value="romance">{relationshipSelection.romanceSelection}</option>
              <option value="casual">{relationshipSelection.casualSelection}</option>
              <option value="serious">{relationshipSelection.seriousSelection}</option>
            </select>
          </label>
        </Fragment>

        <span className="form-buttons">
          <Button buttonType="secondary" onClick={onPrevious}>
            {generalString.previousButtonText}
          </Button>
          <Button type="submit" disabled={!isFormValid}>
            {generalString.nextButtonText}
          </Button>
        </span>
      </form>
    </div>
  );
};

export default StepThree;
