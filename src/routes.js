import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Pages
import { Home, Create, Update, PageNotFound } from './pages/index';

// Components
import { Footer, Navbar } from './components';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastrar-cliente" component={Create} />
        <Route path="/atualizar-cliente/:id" component={Update} />
        <Route component={PageNotFound}/>
      </Switch>
      <ToastContainer />
      <Footer />
    </Router>
  );
};

export default Routes;
