
import {Routes,Route,Link} from 'react-router-dom'
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
function App() {
  return (
  
    
    <GlobalStyle>
    <Nav />
    <NavPc />
    <Banner />
    
    <div className={clsx(styles.page,'grid wide')}>
    <Routes>
    <Route  path="/" element={<Home />}/>
    <Route  path="/gioithieu" element={<Introduce />}/>
    <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
    <Footer/>
   
    
  
    </GlobalStyle>
   
  );
}

export default App;
