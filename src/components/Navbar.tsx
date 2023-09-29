export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="navbar-logo-image">🎯</span>
        </div>

        <ul className="navbar-links">
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
