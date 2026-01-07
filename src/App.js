import Header from './components/Header/Header.jsx';
import Dashboard from './pages/Dashboard.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
