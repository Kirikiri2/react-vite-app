import logo from "/logo.svg";
import Button from "./Button";
import ANavTeg from "./ANavTeg";
import { uiNameANavTeg } from "./data";

export default function Header() {
  return (
    <header className="container mx-auto flex justify-between items-center p-4">
      <div className="logo">
              <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-between gap-10 items-center">
        <ANavTeg {...uiNameANavTeg[0]} />
        <ANavTeg {...uiNameANavTeg[1]} />
        <ANavTeg {...uiNameANavTeg[2]}/>
      </div>
      <div className="button">
        <Button text="Связаться"/>
      </div>
    </header>
  );
};

