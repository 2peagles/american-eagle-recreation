import './App.css';
import { Head } from './components/Navbar/Head';
// import { Hero } from './components/Hero/Hero';
import NavBar from './components/Navbar/NavBar';
import { Search } from './components/Navbar/Search';
// import {Cards } from './components/Cards/Cards';


function App() {
  return (
    <div>
      <Head/>
      <Search/>
      <NavBar/>
      {/* <Cards/> */}
      {/* <Hero/> */}
    </div>
  );
}

export default App;
