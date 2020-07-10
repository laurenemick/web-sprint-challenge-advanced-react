// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValues) => {
    const [values, setValues] = useLocalStorage(key, initialValues);
    console.log({ values });
  
    const handleChanges = e => {
      console.log(e.target);
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    // const clearForm = e => {
    //   e.preventDefault();
    //   setValues(initialValues);
    // };
  
    return [values, handleChanges];
  };
  