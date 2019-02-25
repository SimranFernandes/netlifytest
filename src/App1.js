import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "jquery/dist/jquery";
import Header from "./Components/menuPage/headermenu";
import "axios/dist/axios";

class App1 extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App1;
