import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      let pattern = /(\+7|8)[\s(]*(\d{3})[\s)]*(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g; 
      values.number = values.number.replace(pattern, '+7 ($2) $3-$4-$5');
      callback();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;