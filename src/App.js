import styled from '@emotion/styled';
import Header from './container/Header';
import Home from './container/Home';
import Login from './container/Login';
import Fotter from './container/Fotter'
import {AiOutlineUp} from 'react-icons/ai'
import { useEffect,useRef } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const GoToTop=styled.div`
  position: fixed;
  width: 2rem;
  height: 2rem;
  right: 1rem;
  bottom: 1rem;
  border: .1rem solid#543B17;
  border-radius: 50%;
  font-size: medium;
  text-align: center;
  line-height: 2.1rem;
  & svg{
    transition: .3s;
  }

  :hover{
    cursor: pointer;
    background-color: #543B17;
    & svg{
      color:#ddd;
  }
    
  }
`
function App() {
  const topDistanceOver150=useRef(false)
  useEffect(()=>{
    window.addEventListener('scroll',function(e){
      if(window.scrollY>115)
      topDistanceOver150.current=true
      else
      topDistanceOver150.current=false
      console.log(topDistanceOver150.current)
    })
  })
  const gototop = (e)=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header topDistanceOver150={topDistanceOver150}></Header>
        <Switch> 
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Fotter></Fotter>
        <GoToTop onClick={gototop}><AiOutlineUp /></GoToTop>  
      </Router>
      
      
    </div>
  );
}

export default App;
