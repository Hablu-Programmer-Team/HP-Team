import { IFormData } from ".";

export const validateForm = (formData: IFormData) => {
    const { title, date, priority, description } = formData;
  
    if (title.trim() === "") {
      return "Title cannot be empty!";
    }
    if (!date) {
      return "Please select a valid date!";
    }
    if (!priority) {
      return "Please select a priority level!";
    }
    if (description.trim().length < 10) {
      return "Description must be at least 10 characters long!";
    }
  
    return null;
  };
  