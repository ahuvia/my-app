import { Route, Switch, Routes, Router } from "react-router-dom";
import JsQr from "./JsQr";
import Map from "./Map";
import Layout from "./Layot";
const tiny = require("@ahuvia/tiny");

function App() {
  
  return (
    <div>
   
        {/* <Switch>
      <Router history={}>
        <Route path="/" element={<Layout />}/>
          <Route path="Map" element={<Map />} />
          <Route path="JsQr" element={<JsQr />} />
      </Router>
        </Switch> */}
    <Map/>
    </div>
  );
}

export default App;
