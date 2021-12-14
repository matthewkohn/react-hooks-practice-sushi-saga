import React, { useState } from "react";

function SushiWallet({onAddMoney}) {
  const [value, setValue] = useState(0);
  
  function handleSubmit(e) {
    e.preventDefault();
    onAddMoney(value);
    setValue(0);
  }

  function handleChange(e) {
    const value = parseInt(e.target.value, 10);
    setValue(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={value} onChange={handleChange} />
      <button type="submit">Add $ to Budget</button>
    </form>
  );
}

export default SushiWallet;