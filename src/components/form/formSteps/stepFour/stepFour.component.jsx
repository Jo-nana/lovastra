import { useState, useCallback } from "react";
import Button from "../../../button/button.component";

import strings from '../../../../string'

import './stepFour.styles.scss';

const StepFour = ({ formData, setFormData, onPrevious }) => {
  const [picture, setPicture] = useState(null);
  const [tags, setTags] = useState([]);

  // handle picture change
  const handlePictureChange = useCallback((event) => {
    setPicture(event.target.files[0]);
  }, []);

  // handle tag selection by creating a new array of tags
  const handleTagClick = useCallback((tag) => {
    setTags((prevTags) => {
      // if the tag is already selected, remove it
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        // if the maximum number of tags (5) has been reached, do not add more
        if (prevTags.length >= 5) {
          return prevTags;
        } else {
          return [...prevTags, tag];
        }
      }
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = { ...formData, picture, tags };
    setFormData(newFormData);
  };

  // variables to handle strings group
  const string = strings.fourthStepForm;
  const tagsArray = Object.values(string.tags); // get the value of the tags objects and create an array
  const generalString = strings.general

   // split the header text for styling
   const headerText =  string.headerText;
   const firstWord = headerText.split(' ')[0]; // target the first word of the sentence
   const restOfString = headerText.slice(firstWord.length +1); // give the rest of the sentence


  return (
    <div className="four-step-container">
      <h1>
        <span className="highlighted-text">{firstWord}</span> {restOfString}
      </h1>
      <form onSubmit={handleSubmit} className="profile-tag-container">
        <label className='upload-button'>
          <input type="file" accept="image/*" onChange={handlePictureChange} />
          <p>{string.profilePictureText}</p>
        </label>
        <label className="tag-form">
          <p>{string.interestText}</p>
          <div className="tag-container">
            {tagsArray.map((tag) => (
              <button
                key={tag}
                className={`tag-button ${tags.includes(tag) ? "selected" : ""}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </label>
      </form>
      <span className="form-buttons">
        <Button buttonType="secondary" onClick={onPrevious}>
          {generalString.previousButtonText}
        </Button>
        <Button type="submit">
          {generalString.submitButtonText}
        </Button>
      </span>
    </div>
  );
};

export default StepFour;
