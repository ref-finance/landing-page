import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '~src/components/navbar';
import Footer from '~src/components/footer';
import HomePage from '~src/pages/home';
import HiringPage from '~src/pages/hiring';

const App = () => {
  return (
    <Router>
      <div className="App bg-black min-h-screen">
        <header className="h-20">
          <Navbar />
        </header>
        <Switch>
          <Route path="/hiring" component={HiringPage} />
          <Route path="/" component={HomePage} />
        </Switch>
        <footer className="Home_footer flex justify-center">
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
