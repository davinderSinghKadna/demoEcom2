import React from 'react';
import Amplify, {Auth, API} from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut,AmplifySignUp,AmplifySignIn, AmplifyConfirmSignUp, AmplifyForgotPassword, withAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import { propTypes } from 'react-bootstrap/esm/Image';

Amplify.configure(awsconfig);

const AuthStateApp = (props) => {
    const [authState, setAuthState] = React.useState("signin");
    const [user, setUser] = React.useState();
    const [username, setUsername] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState(); 
    const [authCode, setAuthCode] = React.useState(); 
    const [firstname, setFirstname] = React.useState(); 
    const [lastname, setLastname] = React.useState(); 
    const [phonenumber, setPhonenumber] = React.useState(); 
    const [billingaddress, setBillingaddress] = React.useState(); 
    const [shippingAddress, setShippingAddress] = React.useState();
    const [clientId, setClientId] = React.useState(); 
    const [errorMessage, setErrorMessage] = React.useState();
       
    React.useEffect(() => {
      console.log(authState);
      //console.log("var-",this.props.color);
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
           // setUser(authData);
          //  setAuthState(props.color);
            console.log('authState :-- ',authState)
            console.log("var-",user);
        });
    }, []);

  
    const signUp = (event) => {
      event.preventDefault();
      const { user1 } =  Auth.signUp({username, password, attributes: {email}}).then( data => {
        setClientId(data.userSub)
        console.log("data",data.userSub)
        setUser(user)   
         setAuthState(AuthState.ConfirmSignUp)
        return Auth.currentUserPoolUser( );
    } ).catch(err => setErrorMessage(err.message));
    }

 const confirmSignUp = (event) => {
 console.log('code :-- ',authCode)
 const { user1 }=Auth.confirmSignUp(username, authCode);
 setUser(user1)
 setAuthState(AuthState.SignIn);
  API.post('userservices','/createusers',{
   body:{
    id:clientId,
    firstname:firstname,
    lastname:lastname,
    username:username,
    contactno:phonenumber
   }
 })
}

    const signIn = (event) => {
      event.preventDefault();
       try {
      const { user1 } =  Auth.signIn({username, password});
      setUser(user1)   
         setAuthState(AuthState.SignedIn)
      }catch(error){
        console.log('error signing up:', error);
      } 
    }
    
    if(authState === AuthState.SignedIn){
      return (
        <div className="App">
            <div>Hello You Loged in ! {user}</div>
            
             <AmplifySignOut/>
           </div>
      ) 
    }else if(authState === AuthState.ConfirmSignUp ){
      return (
        <div className="App">
          <AmplifyConfirmSignUp user={user} slot="confirm-sign-up" headerText={"Enter verification code"} usernameAlias="username" handleSubmit={confirmSignUp}
          formFields={[
            {
              type: "username",
              label: "username",
              placeholder: "username",
              required: true,
              handleInputChange: (event, cb) => {
                cb(event);
                setUsername(event.target.value)
              },
            },
            {
              type: "code",
              label: "authCode",
              placeholder: "authCode",
              required: true,
              handleInputChange: (event, cb) => {
                cb(event);
                setAuthCode(event.target.value)
              },
            },          
          ]}
          /> 
          </div>)
    }
    else if(authState === AuthState.SignIn){
      return (
        <div className="App">
         <AmplifyAuthenticator>
           <AmplifySignIn/>
           </AmplifyAuthenticator>
            </div>)
    }
    else if(authState === AuthState.ForgotPassword){
      return (
        <div className="App">
         <AmplifyForgotPassword></AmplifyForgotPassword>
            </div>)
    }
    else{
      return (
        <div className="App">
          <p>{errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null}</p>
          <AmplifySignUp slot="sign-up" handleSubmit={signUp}
          formFields={[
              {
                type: "username",
                label: "username",
                placeholder: "Please Enter Username",
                required: true,
                handleInputChange: (event, cb) => {
                  cb(event);
                  setUsername(event.target.value)
                },
              },
              {
                type: "email",
                label: "email",
                placeholder: "Please Enter Email",
                required: true,
                handleInputChange: (event, cb) => {
                  cb(event);
                  if(event.target.value===null){
                    setErrorMessage("Plesae Enter Email");
                  }else{
                    setEmail(event.target.value)
                  }
                },
              },
              {
                type: "password",
                label: "password",
                placeholder: "Please Enter Password",
                required: true,
                handleInputChange: (event, cb) => {
                  cb(event);
                  setPassword(event.target.value)
                },
              },
              {
                type: "phone_number",
                label: "Phone",
                placeholder: "Please Enter Phone no",
                required: false,
                handleInputChange: (event, cb) => {
                  cb(event);
                  setPhonenumber(event.target.value)
                },
              },
              {
                type: "Firstname",
                label: "Firstname",
                placeholder: "Please Enter Firstname",
                required: false,
                handleInputChange: (event, cb) => {
                  cb(event);
                  setFirstname(event.target.value)
                },
              },
              {
                type: "Lastname",
                label: "Lastname",
                placeholder: "Please Enter Lastname",
                required: false,
                handleInputChange: (event, cb) => {
                  cb(event);
                  setLastname(event.target.value)
                },
              },
              {
                type: "BillingAddress",
                label: "BillingAddress",
                placeholder: "Please Enter Billing Address",
                required: false,
                handleInputChange: (event, cb) => {
                  cb(event);
                  setBillingaddress(event.target.value)
                },
              },
              {
                type: "ShippigAddress",
                label: "ShippigAddress",
                placeholder: "Please Enter Shipping Address",
                required: false,
                handleInputChange: (event, cb) => {
                  cb(event);
                  setShippingAddress(event.target.value)
                },
              },
            ]} 
          />
          </div>
      );
    }
    console.log("user",user)
}
console.log("AuthState",AuthState)

//export default withAuthenticator(AuthStateApp, {initialAuthState: 'signin'});
export default AuthStateApp
//export withAuthenticator(App, {initialAuthState: 'signin'});