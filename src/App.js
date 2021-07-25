
import Header from './container/components/Header';
import Home from './container/pages/Home';
import Login from './container/pages/Login';
import Fotter from './container/components/Fotter'
import {AiOutlineUp} from 'react-icons/ai'
import { useEffect,useRef, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GoToTop } from './container/UI'

function App() {
  const topDistanceOver150=useRef(false)
  const [isMenuJump,setIsMenuJump] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',function(e){
      if(window.scrollY>115)
      topDistanceOver150.current=true
      else
      topDistanceOver150.current=false
    })
  })
  useEffect(()=>{

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
        <Header topDistanceOver150={topDistanceOver150} isMenuJump={isMenuJump} setIsMenuJump={setIsMenuJump}></Header>
        <Switch> 
          <Route path="/" exact component={()=><Home isMenuJump={isMenuJump}/>} />
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
