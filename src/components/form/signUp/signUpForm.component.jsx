import React, { useState } from 'react';
import StepOne from '../formSteps/stepOne/stepOne.component';
import StepTwo from '../formSteps/stepTwo/stepTwo.component';
import StepThree from '../formSteps/stepThree/stepThree.component';
import StepFour from '../formSteps/stepFour/stepFour.component';

import './signUpForm.styles.scss';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    realName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    hourOfBirth: '',
    placeOfBirth: '',
    gender: '',
    lookingFor: '',
    relationshipType: '',
    picture: null,
    tags: [],
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="form-container">
      {currentStep === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
      {currentStep === 3 && (
        <StepThree
          formData={formData}
          setFormData={setFormData}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
      {currentStep === 4 && (
        <StepFour
          formData={formData}
          setFormData={setFormData}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
}

export default SignUpForm;
