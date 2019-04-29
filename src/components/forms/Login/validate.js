import validateInput from '../../../utils/validateInput';

const validate = values => {
  const {
    username,
    password,
  } = values;
  const errors = {
    username: validateInput(username, ['required']),
    password: validateInput(password, ['required']),
    
  };

  return errors;
};


export default validate;