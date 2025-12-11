// Validation utility functions

export const validateRequired = (value) => {
  if (!value || value.trim() === "") {
    return { valid: false, message: "This field is required" };
  }
  return { valid: true, message: "" };
};

export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return { valid: false, message: "Invalid email format" };
  }
  return { valid: true, message: "" };
};

export const validatePassword = (value) => {
  if (value.length < 8) {
    return {
      valid: false,
      message: "Password must be at least 8 characters long",
    };
  }
  if (!/[A-Z]/.test(value)) {
    return {
      valid: false,
      message: "Password must contain at least one uppercase letter",
    };
  }
  if (!/[a-z]/.test(value)) {
    return {
      valid: false,
      message: "Password must contain at least one lowercase letter",
    };
  }
  if (!/\d/.test(value)) {
    return {
      valid: false,
      message: "Password must contain at least one number",
    };
  }
  if (!/[!@#$%^&*]/.test(value)) {
    return {
      valid: false,
      message: "Password must contain at least one special character",
    };
  }
  return { valid: true, message: "" };
};

export const validateNumber = (value) => {
  if (isNaN(value) || value === "") {
    return { valid: false, message: "Must be a valid number" };
  }
  return { valid: true, message: "" };
};

export const validateField = (value, rules) => {
  for (const rule of rules) {
    const result = rule(value);
    if (!result.valid) {
      return result;
    }
  }
  return { valid: true, message: "" };
};
