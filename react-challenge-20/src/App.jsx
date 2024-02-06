// activity 22

// import PortfolioContainer from "./components/PortfolioContainer";

// const App = () => <PortfolioContainer />;

// export default App;

//activity 23--

// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <> //empty div acts as a placeholder called react fragment
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;