import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbBar from './components/pages/header';
import List from './components/pages/TaskList/List';
import TaskForm from './components/pages/taskform';
import Home from './components/pages/home';
import './components/css/style.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/taskform' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
