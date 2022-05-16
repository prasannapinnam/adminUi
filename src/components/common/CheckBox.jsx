import React, { useEffect } from "react";

function CheckBox({ item, handleCheck }) {
  useEffect(() => {
    console.log(item);
  }, [item]);

  return item.checked ? (
    <input
      className="form-check-input checked"
      type="checkbox"
      onClick={handleCheck}
    />
  ) : (
    <input className="form-check-input" type="checkbox" onClick={handleCheck} />
  );
}

export default CheckBox;
