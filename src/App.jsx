
import './App.css';
import Navigation from './components/header/Navigation';
import Footer from './components/footer/Footer';
import Charts from './components/layout/Charts';
import Datatable from './components/layout/Datatable';
import ProgressBar from './components/layout/Progressbar';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Charts/>
      <Datatable/>
      <ProgressBar/>
      <Footer/>
    </div>
  );
}

export default App;
