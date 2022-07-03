import './index.css';
import useLocalStorage from 'use-local-storage';

function App() {
  const [theme,setTheme]=useLocalStorage('theme'?'dark':'light')

  const switchTheme=()=>{
    const newTheme =theme==='light'?'dark':'light';
    setTheme(newTheme)
  }



  return (
    <div className="app" data-theme={theme}>
     <div className='login'>
     <h1> Login </h1>
     <div className='container'>
     <div  className='top'>
     <i class="fa-brands fa-google"></i>
     <i class="fa-brands fa-facebook-square"></i>
     <i class="fa-brands fa-linkedin"></i>
     <i class="fa-brands fa-twitter-square"></i>
     <i class="fa-brands fa-apple"></i>
     </div>
     <p className='divider'><span>Or</span></p>
     <form>
     <label>E-Mail</label>
     <input type="email" placeholder='Enter your email'></input>
     <label>Password</label>
     <input type="password" placeholder='Enter your password'></input>
     <div className='remember'>
     <input type='checkbox' checked='checked'></input>
     <p> Remeber Me</p>
     </div>
     <button>Log In</button>
     </form>
     <div className='bottom'>
     <p> Forget your password ? </p>
     <a href='/' >Reset Password</a>
     </div>
     <p className='create'> Create Account</p>
     </div>
     <div className='theme-toggle'>
     <h2>Light Theme</h2>
     <i onClick={switchTheme} className='fas fa-toggle-on'/>
     </div>
     </div>
    </div>
  );
}

export default App;
