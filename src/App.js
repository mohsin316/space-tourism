// imports
import { Route, Routes, useLocation} from 'react-router-dom';

// styles
import './App.css';

// pages and components
import Home from './pages/home/Home'
import Destination from './pages/destination/Destination'
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'
import Navbar from './components/Navbar';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [currentTab, setCurrentTab] = useState('home')
  // console.log(documents)
  const location = useLocation()

  const changeTab = (newTab) => {
    setCurrentTab(newTab)
    console.log(currentTab)

  }

  // const data = documents ? documents.forEach( document => document})

  return (
    <div className={`App ${currentTab}`}>
      <Navbar currentTab={currentTab} changeTab = {changeTab}/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destination changeTab = {changeTab} />}/>
          <Route path='/crew' element={<Crew changeTab = {changeTab} />}/>
          <Route path='/technology' element={<Technology changeTab = {changeTab} />}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
