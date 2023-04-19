import React, { useState } from 'react';
import StepOne from '../formSteps/stepOne/stepOne.component';
import StepTwo from '../formSteps/stepTwo/stepTwo.component';

import './signUpForm.styles.scss';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    realName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    hourOfBirth: '',
    placeOfBirth: ''
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
      <h1>Four steps left to find your cosmic match</h1>
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
      {/* add more steps here */}
    </div>
  );
}

export default SignUpForm;
