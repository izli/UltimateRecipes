import React, { useState } from "react";

type Hook = (name: string, time: number) => void;

const useRecipeForm: Hook = (callback: any) => {
  const [details, setDetails] = useState({});

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.persist();
    setDetails((details) => ({
      ...details,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    details,
  };
};

export default useRecipeForm;
