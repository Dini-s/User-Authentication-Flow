
import './App.css';

import UserAuth from './Context/UserAuth';
import HomePage from './Components/HomePage';

function App() {
  return (

    <UserAuth>

      <HomePage />
    </UserAuth>



  );
}

export default App;
