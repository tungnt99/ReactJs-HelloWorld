import React from 'react';
import UseState from './components/UseState/Vidu1'
import TwoWayBinding from './components/UseState/TwoWayBinding'
import Nav from './view/Nav/Nav'
import TodoList from './components/UseState/TodoList';
import Home from './components/Home/Home';
import Redirect from './view/Redirect/Redirect';
import ListProducts from './view/Products/ListProducts';
import ProductDetail from './view/Products/ProductDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
        <Nav/>
        <div className='content'>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/usestate" element={<UseState/>}/>
              <Route exact path="/twowaybinding" element={<TwoWayBinding/>}/>
              <Route exact path="/todo" element={<TodoList/>}/>
              <Route exact path="/redirect" element={<Redirect/>}/>
              <Route exact path="/products" element={<ListProducts/>}/>
              <Route exact path="/products/:id" element={<ProductDetail/>}/>

          </Routes>

        </div>
    </div>
    </Router>

    
  );
}

export default App;
