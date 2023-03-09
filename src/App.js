import './App.css';
import Labs from './labs/index.js';
import HelloWorld from './labs/a6/hello-world';
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpFromBracket, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

library.add(faHeart, faComment, faArrowUpFromBracket, faRetweet);

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/labs" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
