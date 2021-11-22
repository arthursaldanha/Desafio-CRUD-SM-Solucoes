import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import { Home, Create, Update } from "./pages/index";

// Components
import { Footer, Navbar } from "./components";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastrar-cliente" component={Create} />
        <Route path="/atualizar-cliente/:id" component={Update} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
