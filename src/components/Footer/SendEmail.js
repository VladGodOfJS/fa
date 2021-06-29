import { Field, reduxForm } from "redux-form";
import { minLength, required } from "../../utilits/validators";
import { Input } from "../commons/FormControls";





const SendEmail = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit}  className="form">
      <Field
        validate={[required ,minLength]}
        className="form__input"
        placeholder={"Enter your email"}
        type="text"
        component={Input}
        name={"email"}
      />
      <button className="form__btn">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.7825 3.21745C20.6813 3.1167 20.5534 3.04695 20.4139 3.01639C20.2744 2.98584 20.1291 2.99574 19.995 3.04495L3.495 9.04495C3.3527 9.09892 3.23019 9.19491 3.14374 9.32016C3.05729 9.44542 3.01099 9.59401 3.01099 9.7462C3.01099 9.89839 3.05729 10.047 3.14374 10.1722C3.23019 10.2975 3.3527 10.3935 3.495 10.4474L9.9375 13.0199L14.6925 8.24995L15.75 9.30745L10.9725 14.0849L13.5525 20.5275C13.6081 20.667 13.7043 20.7866 13.8286 20.8709C13.953 20.9551 14.0998 21.0001 14.25 20.9999C14.4016 20.9968 14.5486 20.9479 14.6718 20.8595C14.795 20.7711 14.8885 20.6475 14.94 20.5049L20.94 4.00495C20.9911 3.87226 21.0034 3.72777 20.9755 3.58834C20.9477 3.44891 20.8807 3.32028 20.7825 3.21745Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  );
};

export  let SendEmailReduxForm = reduxForm({ form: "email" })(SendEmail);

export default SendEmail
