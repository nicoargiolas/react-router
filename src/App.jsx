// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import ArticlesList from "./pages/ArticlesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/posts" element={<ArticlesList />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App