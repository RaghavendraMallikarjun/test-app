import './App.css';
import Upload from './components/Upload.js'
import File from './components/File.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <File/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
