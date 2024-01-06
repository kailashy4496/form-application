import './App.css';
// import './styles/page.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// <-----------------pages------------------>
import FormLanding from './pages/FormLanding';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
