import Logs from './components/changelogs';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="main-title">
          <h1>Cronos</h1>
          <h2>Changelog</h2>
        </div>

        <Logs />
      </main>
    </>
  );
}
