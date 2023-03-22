import React, { useEffect } from "react";
import Aos from "aos";

import Routes from "./Routes";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <Routes />;
}

export default App;
