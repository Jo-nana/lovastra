import { useState, useCallback } from "react";
import Button from "../../../button/button.component";


import './stepFour.styles.scss';

const StepFour = ({ formData, setFormData, onNext, onPrevious }) => {
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
        return [...prevTags, tag];
      }
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = { ...formData, picture, tags };
    setFormData(newFormData);
    onNext();
  };

  return (
    <div className="step-four-container">
      <h1>
        <span className="highlighted-text">One</span> step left to find your cosmic match
      </h1>
      <form onSubmit={handleSubmit} className="profile-tag-container">
        <label className='upload-button'>
          <input type="file" accept="image/*" onChange={handlePictureChange} />
          <p>Add you profil picture</p>
        </label>
        <label className="tag-form">
          Select interests (up to 5)
          <div className="tag-container">
            {["✈️ Travel", "🍔 Food", "🎶 Music", "⚽️ Sports", "👗 Fashion", "📚 Books", "🎬 Movies", "🎨 Art", "💻 Tech", "🐱 Animals", "🌳 Nature"].map((tag) => (
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
          Previous
        </Button>
        <Button type="submit">
          Submit
        </Button>
      </span>
    </div>
  );
};

export default StepFour;
