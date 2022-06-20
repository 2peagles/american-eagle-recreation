import './App.css';
import { Promobar } from './components/Navbar/PromoBar/Promobar';
// import { Hero } from './components/Hero/Hero';
import { Search } from './components/Navbar/Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs } from './components/Navbar/componenthome/Tabs';

function App() {
  return (
    <div>
      <Promobar/>
      <Search/>
      <Tabs/>
      {/* <Hero/> */}
    </div>
  );
}

export default App;
