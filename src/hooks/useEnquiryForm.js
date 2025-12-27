import { useState } from 'react';

export const useEnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus({
        success: true,
        message: 'Your enquiry has been submitted successfully! We will get back to you soon.'
      });
      
      // Return the form data in case the parent component needs it
      return { success: true, data: formData };
    } catch (error) {
      const errorMessage = 'Failed to submit enquiry. Please try again.';
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      service: '',
      message: ''
    });
    setSubmitStatus({ success: null, message: '' });
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm
  };
};
