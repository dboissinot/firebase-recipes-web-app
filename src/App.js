import './App.css';
import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";

//import 'firebase/compat/firestore';

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Firebase Recipes Didier</h1>
        <LoginForm existingUser={user}></LoginForm>
      </div>
    </div>
  );
}

export default App; 
