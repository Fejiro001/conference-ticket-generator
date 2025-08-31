import logo from "./assets/images/logo-full.svg";
import iconInfo from './assets/images/icon-info.svg';

function App() {
  return (
    <>
      {/* LOGO */}
      <img width="209" height="30" src={logo} alt="coding Conference Logo" />
      {/* TEXT HEADING */}
      <div>
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p>Secure your spot at next year's biggest coding conference.</p>
      </div>
      {/* FORM */}
      <form>
        <div>
          <label htmlFor="avatar">Upload Avatar</label>
          <input id="avatar" name="avatar" type="file" accept="image/*" required />
          <span>
            <img src={iconInfo} alt="Info icon" />
            Upload your photo (JPG or PNG, max size: 500KB).</span>
        </div>

        <div>
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" name="fullName" type="text" required />
        </div>

        <div></div>
      </form>
    </>
  );
}

export default App;
