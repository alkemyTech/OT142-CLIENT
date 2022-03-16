import { useState } from 'react';

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({
      ...form,
      data: {
        ...form.data,
        [e.target.name]: e.target.value
      }
    });
  };

  return {
    form,
    setForm,
    handleChange
  };
};

export default useForm;
