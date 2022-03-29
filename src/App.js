import React,{useEffect} from 'react'
import {Routes,Route,Link,useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
import clsx from 'clsx'
import styles from './App.module.scss'
import GlobalStyle from './components/GlobalStyles/GlobalStyle'
import Nav from './components/Nav/Nav'
import NavPc from './components/Nav/NavPc';
import Banner from './components/Banner/Banner' 
import Footer from './components/Footer/Footer'
import Home from './components/Router/Home/Home';
import Introduce from './components/Router/Introduce/Introduce'
import NotFound from './components/Router/NotFound/NotFound'
import Advertising from './components/advertising/Advertising'
import Banggia from './components/Router/Banggia/Banggia'
import Dichvu from './components/Router/Dichvu/Dichvu'
import NewFooter from './components/NewFooter/NewFooter'
import HomeNew from './components/HomeNew/HomeNew'
import LienHe from './components/Router/LienHe/LienHe' 
import Backtotop from './components/BacktoTop/Backtotop'
import $ from 'jquery'
function App() {
   
  const history = useNavigate() 

  useEffect(() => {
    console.log('change')
    
    $("html, body").animate({ scrollTop: 230 }, "300");
  },[history]) 
   
  return (
  
    
    <GlobalStyle>
    <Nav />
    <NavPc />
    <Banner />
    <div className={clsx(styles.page,'grid wide')}>
    <Routes>
    <Route  path="/" element={<HomeNew />}/>
    <Route  path="/gioithieu" element={<Introduce />}/>
    <Route  path="/banggia"  element={<Banggia />}/>
    <Route  path="/dichvu"  element={<Dichvu />}/>
    <Route  path="/contact"  element={<LienHe />}/>
    
    <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
    {/* <Footer/> */}
    <NewFooter />
    <Backtotop />
    <Advertising /> 
   
    
  
    </GlobalStyle>
   
  );
}

export default App;
