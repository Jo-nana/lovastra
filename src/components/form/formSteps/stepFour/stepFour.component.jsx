import { useState, useCallback } from "react";

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
    <div>
      <h1>One step left to find your cosmic match</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Profile Picture
          <input type="file" accept="image/*" onChange={handlePictureChange} />
        </label>
        <label>
          Select interests (up to 5)
          {["travel", "food", "music", "sports", "fashion", "books", "movies", "art", "technology", "animals", "nature"].map((tag) => (
            <button
              key={tag}
              className={tags.includes(tag) ? "selected" : ""}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </label>
        <button type="button" onClick={onPrevious}>
          Previous
        </button>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StepFour;
