import CreateAccount from '../../Components/Login/CreateAccount'
import Login from '../../Components/Login/Login'
import './loginPage.css'
const LoginPage = () => {
   const clickHandler=(e)=>{
    console.log(e.target);
    e.target.classList.remove('active');
    if(e.target.id==='signin'){
      document.querySelector('.create').classList.add('active');
      document.querySelector('.inactive').classList.remove('inactive');
      document.querySelector('.create-page').classList.add('inactive');
    }else{
      document.querySelector('.login').classList.add('active');
      document.querySelector('.inactive').classList.remove('inactive');
      document.querySelector('.login-page').classList.add('inactive');
    }
   }
  return (
    <div className='login-container'>
        <div className="login-image">
        <div className="shadow">

        </div>
        </div>
        <div className="login-section">
            <h2 id='signin' className= 'login account' onClick={clickHandler}>
            SIGN IN
            </h2>
         <h2 id='signup' className='create account active' onClick={clickHandler}>
            SIGN UP
            </h2>
            <div className="login-page"><Login/></div>
            <div className="create-page inactive"><CreateAccount/></div>
            
           
            
        </div>


    </div>
  )
}

export default LoginPage