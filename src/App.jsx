// Bringing in the required import from 'react-router-dom'
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Main.css';


function App() {
  const currentPage = useLocation().pathname;
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header currentPage={currentPage} />
      <div className="app-page">
        <main className="mx-3">
          <Outlet />
        </main>
        <Nav />
      </div>
            
      <Footer />
    </>
  );
}

export default App;