import { useState } from "react";
import Layout from "./components/Layout/Layout";
import { pages, type View } from "./config/pages";
import "./App.css";

function App() {
  const [view, setView] = useState<View>("home");

  return (
    <Layout setView={setView}>
      {pages[view]}
    </Layout>
  );
}

export default App;