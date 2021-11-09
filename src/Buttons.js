import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { handlePage, page, numPages, loading } = useGlobalContext();
  return (
    <div className="btn-container">
      <button
        disabled={loading}
        className="btn"
        onClick={() => handlePage("decrease")}
      >
        {"<<<<"}
      </button>
      <p>
        {page + 1} / {numPages}
      </p>
      <button
        disabled={loading}
        className="btn"
        onClick={() => handlePage("increase")}
      >
        {">>>>"}
      </button>
    </div>
  );
};

export default Buttons;
