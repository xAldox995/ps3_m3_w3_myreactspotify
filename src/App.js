
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css';

import Sidebar from './components/SibeBar';
import PlayerControls from './components/PlayerComp';
import MusicSection from './components/MusicSection';

function App() {
  return (
    <div>
      <header>
        <Sidebar />
      </header>
      <main>
        <MusicSection />
      </main>
      <footer>
        <PlayerControls />
      </footer>
    </div>
  );
}

export default App;
