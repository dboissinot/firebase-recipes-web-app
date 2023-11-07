import './App.css';
// eslint-disable-next-line no-unused-vars
import firebase from "./FirebaseConfig"
//import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

function App() {
  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Firebase Recipes Julien</h1>
      </div>
    </div>
  );
}

export default App;
