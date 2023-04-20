import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import AIHistory from "./components/AIHistory";
import Technologies from "./components/Technologies";
import UseCases from "./components/UseCases";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-purple-500">
      <Header />
      <Introduction />
      <AIHistory />
      <Technologies />
      <UseCases />
      <Footer />
    </div>
  );
};

export default App;