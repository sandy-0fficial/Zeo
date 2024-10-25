import { GoogleLogin }  from 'react-google-login';
import Portal from './portal';

const oAuthKey = "925306536966-8krnsg2kdor08se5s6d47vla1pec5f2f.apps.googleusercontent.com";

const Login = () =>{

  const onSuccess = (res) =>{
     console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
     localStorage.setItem ("userid", res.profileObj.googleId);
     // here we store login details in the chrome local storage so that we can login
     localStorage.setItem("fullname", res.profileObj.name);
     window.location.href="http://localhost:3000/#/"
   window.location.reload();// Reload the page(app.js) after login is success
    
  }

  const onFailure = (res) =>{
    alert("login failed! try again...")
  }
  

  return(
    <section className='text-center edit' >
    <nav className="navbar bg-dark border-bottom border-body  p-4 h1">
    <div className="container-fluid">
    <span className="navbar-brand mb-0 h1 text-white"><h2>Rule Engine</h2></span>
    </div>
  </nav>


  <div className="container  p-5 mb-5 " >
                        <div className="row p-5"  >
                             <div className="col-lg-6 p-5 mt-5">
                              <div>
                              <p className='title text-dark'><b>Rules</b></p>
                               <p className='subtitle '> <b>Rules are the framework through which order is crafted and clarity is achieved.</b></p>
                               </div>
                             </div>
                            <div className="col-lg-4 mt-5">
                            <div className="p-4  login-box mt-4">

                                 <div className='row'>
                                   <h2 className="text-center">Login with google</h2>
                                     <hr/>
                                    <div className='mb-3 pt-4'>
                                       <p> <div id="signInButton" >
                                        <GoogleLogin 
                                          clientId = {oAuthKey}
                                          buttonText = "Login in google"
                                          onSuccess = {onSuccess}
                                          onFailure = {onFailure}
                                          cookiePolicy={'single_host_origin'}
                                        />
                                      </div></p>
                                      
                                       </div>
                                 </div>
                            </div>
                           
                         </div>
                         <div className="col-lg-2"></div>
                      </div>
                      </div>
    
     
    
  </section>
  )
}

export default Login;