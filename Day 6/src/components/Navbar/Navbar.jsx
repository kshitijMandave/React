import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="">
            <h1>MovieSwap</h1>
          </div>
          <div>
            <ul className="">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>
                <button>LogIn</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
