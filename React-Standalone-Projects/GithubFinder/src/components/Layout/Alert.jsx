import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="alert alert-error mb-4">
        <strong>{alert?.msg}</strong>
      </div>
    )
  );
}

export default Alert;
