/** @jsxImportSource @emotion/react */
import Header from "./container/components/Header";
import Home from "./container/pages/Home";
import Login from "./container/pages/Login";
import Fotter from "./container/components/Fotter";
import { AiOutlineUp } from "react-icons/ai";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GoToTop } from "./container/UI";

function App() {
  const [isMenuJump, setIsMenuJump] = useState(false);
  const [windowWidthWithPC, setWindowWidthWithPC] = useState(
    document.documentElement.clientWidth > 849
  );
  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth > 849) setWindowWidthWithPC(true);
    else setWindowWidthWithPC(false);
  });

  const gototop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header
          isMenuJump={isMenuJump}
          setIsMenuJump={setIsMenuJump}
          windowWidthWithPC={windowWidthWithPC}
        ></Header>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home
                isMenuJump={isMenuJump}
                windowWidthWithPC={windowWidthWithPC}
              />
            )}
          />
          <Route path="/login" component={Login} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Fotter></Fotter>
        <GoToTop onClick={gototop}>
          <AiOutlineUp />
        </GoToTop>
      </Router>
    </div>
  );
}

export default App;
