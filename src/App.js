import './App.css';
import { Promobar } from './components/Navbar/Promobar';
// import { Hero } from './components/Hero/Hero';
import NavBar from './components/Navbar/NavBar';
import { Search } from './components/Navbar/Search';
// import {Cards } from './components/Cards/Cards';


function App() {
  return (
    <div>
      <Promobar/>
      <Search/>
      <NavBar/>
      {/* <Cards/> */}
      {/* <Hero/> */}
    </div>
  );
}

export default App;
