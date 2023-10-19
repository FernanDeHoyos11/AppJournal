import { useEffect, useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onReset = () => {
    setFormState(initialForm);
  };

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  const onInputChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onReset,
  };
};
