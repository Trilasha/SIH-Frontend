import { Routes, Route } from "react-router-dom";

import { Home, Error } from "./Pages";

import { Footer, Draw } from "./Components";

const App = () => {
  return (
    <>
      <Draw />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
