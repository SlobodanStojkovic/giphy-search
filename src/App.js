import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { PageNavigation } from './components/PageNavigation/PageNavigation';


function App() {

  const [clickedPage, setClickedPage] = useState(1);

  return (
    <div className="App">
      <Header/>
      <PageNavigation  clickedPage={clickedPage} setClickedPage={setClickedPage}/>
      <Main  clickedPage={clickedPage} setClickedPage={setClickedPage}/>
      <Footer />
    </div>
  );
}

export default App;
