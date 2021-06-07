import React from "react";
import { MdBrightness2, MdWbSunny } from "react-icons/md";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="Header">
      <h1 className="mt-3">Notes</h1>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        <MdWbSunny size="1.3em" /> / <MdBrightness2 size="1.3em" />
      </button>
    </div>
  );
};

export default Header;
