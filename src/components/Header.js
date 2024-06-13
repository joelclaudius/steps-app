import logo from "./logo.svg";
function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
