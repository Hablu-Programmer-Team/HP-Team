import { IFormData } from "..";

export const validateForm = (formData: IFormData) => {
  const { title, date, priority, description } = formData;
  return title.trim() === ""
    ? "Title cannot be empty!"
    : !date
    ? "Please select a valid date!"
    : !priority
    ? "Please select a priority level!"
    : description.trim().length < 10
    ? "Description must be at least 10 characters long!"
    : null;
};