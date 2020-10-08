import { useHistory } from "react-router-dom";
import {useState} from 'react'

const useSignUpForm = (callback) => {

    const history = useHistory();
    
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
        if (event.email != "webmaster@sireadvertising.com" && event.password != "password"){
            alert('credentials not valid')
          }
          else{
           
         
           history.push('/schedule');
          }
      }
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
  }

  export default useSignUpForm