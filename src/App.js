import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Testimonials from "./Pages/Testimonials/Testimonials";
import LocalPicks from "./Pages/LocalPicks/LocalPicks";
import Florida from "./Pages/Florida/Florida";
import Ontario from "./Pages/Ontario/Ontario";
import FeaturedListing from "./Pages/FeaturedListing/FeaturedListing";
import PropertyListing from "./Pages/PropertyListing/PropertyListing";
import Property from "./Pages/Property/Property";
import City from "./Pages/City/City";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./partials/_common.scss";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/testimonials' component={Testimonials} />
        <Route path='/localpicks' component={LocalPicks} />
        <Route path='/florida' component={Florida} />
        <Route path='/ontario' component={Ontario} />
        <Route path='/featured' exact component={FeaturedListing} />
        <Route path='/featured/property/:id' component={PropertyListing} />
        <Route path='/property/:boardId/:property' component={Property} />
        <Route path='/city/:city' component={City} />
      </Switch>
      <Footer /> */}
    </Router>
  );
}

export default App;
