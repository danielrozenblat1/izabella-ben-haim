import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import AboutMe from './components/me/Me';
import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';
import { useEffect, useState } from 'react';
import FifthScreen from './screens/FifthScreen';
import FixedFirstScreen from './screens/FixedFirstScreen';

function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  {/* <FirstScreen scrolled={scrolled}/> */}
  <FixedFirstScreen/>
  <SecondScreen/>
  <ThirdScreen/>
  <AboutMe/>
  <ForthScreen/>
  <FifthScreen/>
  <ByMe/>
  </>
}

export default App;
