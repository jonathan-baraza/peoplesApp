import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
function App() {
  return (
    <div className="mains bg-success">
      <div className="cover m-0 p-0">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
