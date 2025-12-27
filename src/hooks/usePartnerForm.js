import { useState } from 'react';

export const usePartnerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    website: '',
    aboutBusiness: '',
    solutions: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { checked, value } = e.target;
    setFormData(prev => ({
      ...prev,
      solutions: checked
        ? [...prev.solutions, value]
        : prev.solutions.filter(s => s !== value)
    }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission logic
      console.log('Form submitted:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      company: '',
      email: '',
      website: '',
      aboutBusiness: '',
      solutions: []
    });
    setSubmitStatus(null);
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    resetForm
  };
};
