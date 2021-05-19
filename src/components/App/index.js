import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Schedule from "../Schedule";
import Team from "../Team";
import NotFound from "../NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Schedule} />
          <Route path="/team" component={Team} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
