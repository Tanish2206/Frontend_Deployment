export const validateForm = (formData) => {
    const validationErrors = {};
  
    for (const field in formData) {
      const value = formData[field].trim();
      if (!value) {
        validationErrors[field] = `${getFieldName(field)} is required`;
      } else if (!isValidValue(value, field)) {
        validationErrors[field] = `Invalid ${getFieldName(field)}`;
      }
    }
  
    return validationErrors;
  };
  
  export const getFieldName = (field) => {
    return field.charAt(0).toUpperCase() + field.slice(1);
  };
  
  export const isValidValue = (value, field) => {
    if (field === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    } else if (field === "mobile") {
      const phoneNumberRegex = /^\d{10}$/;
      return phoneNumberRegex.test(value);
    } else if (field === "firstName" || field === "lastName") {
      return value.length >= 2;
    }
    return true;
  };
  
  export const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber.trim()) {
      return "Phone number is required";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      return "Invalid phone number";
    }
    return "";
  };
  
 export const validateName = (formData) => {
    if (formData?.name?.trim() === '') {
      return 'Name is required';
    }
    return '';
  };

 export const validateEmail = (formData) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      return 'Please enter a valid email';
    }
    return '';
  };

  export const validatePhone = (formData) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData?.mobile)) {
      return 'Please enter a valid phone number';
    }
    return '';
  };

  export const validateMessage = (formData) => {
    if (formData.message.trim() === '') {
      return 'Message is required';
    }
    return '';
  };
  // Additional validation functions can be added here
  