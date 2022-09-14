import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import SideBar from './components/SideBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-salmon'>
          Projeto Mentoria.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Aprendendo React.
        </a>
      </header> */}
    </div>
  );
}

export default App;
