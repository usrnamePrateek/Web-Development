import logo from "../assets/investment-calculator-logo.png";
import UserInput from "./UserInput";
export default function Header() {
  return (
    <>
      <header id="header">
        <img src={logo} alt="Logo showing a money bag" />
        <h1>React Investment Calculator</h1>
      </header>
    </>
  );
}
