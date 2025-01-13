import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import UserAuth from './Context/UserAuth';

function App() {
  return (

    <UserAuth>
      <LoginForm />
      <SignUpForm />
    </UserAuth>



  );
}

export default App;
