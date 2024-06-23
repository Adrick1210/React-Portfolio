import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Story from './components/Story/Story'
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Story />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
