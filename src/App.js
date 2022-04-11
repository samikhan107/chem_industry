import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
        <Switch>
        <Route exact path="/"> <Home /></Route>
            <Route exact path="/about"> <About /></Route>
            <Route exact path="/services"> <Services /></Route>
            <Route exact path="/products"> <Products /></Route>
            <Route exact path="/contact"> <Contact /></Route>
            
        </Switch>
      <Footer />
    </>
  );
}

export default App;
