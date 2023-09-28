export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="https://picsum.photos/300/300"
            alt="logo"
          />
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
