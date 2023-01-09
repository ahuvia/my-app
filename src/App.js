import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import JsQr from "./JsQr";
import Map from "./Map";
const tiny = require("@ahuvia/tiny");

function App() {
  let date = new Date().toLocaleString()
  return (
    <div>
   <BrowserRouter>
      <nav>
      <div style={{color:'green', textAlign:'center'}}>{date}</div>
        <ul>
          <li><Link to="/map">map</Link></li>
          <li><Link to="/scanQr">scanQr</Link></li>
        </ul>
      </nav>
   <Switch>
   <Route path="/map">
   <Map/>
   </Route>
   <Route path="/scanQr">
     <JsQr />
     </Route>
   </Switch>
   </BrowserRouter>
        {/* <Switch>
      <Router history={}>
        <Route path="/" element={<Layout />}/>
          <Route path="Map" element={<Map />} />
          <Route path="JsQr" element={<JsQr />} />
      </Router>
        </Switch> */}
   
    </div>
  );
}

export default App;
