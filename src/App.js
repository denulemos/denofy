import firebase from './utils/Firebase';
import "firebase/auth";

function App() {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
  });  

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
