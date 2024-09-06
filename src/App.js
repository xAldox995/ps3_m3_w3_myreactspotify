
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css';

import Sidebar from './components/SibeBar';
import PlayerControls from './components/PlayerComp';

function App() {
  return (
    <div>
      <header>
        <Sidebar />
      </header>
      <main>

      </main>
      <footer>
        <PlayerControls />
      </footer>
    </div>
  );
}

export default App;
