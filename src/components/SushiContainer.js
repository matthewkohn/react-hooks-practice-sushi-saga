import React, { useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushiList, onEatSushi }) {
  const [sushiIdx, setSushiIdx] = useState(0);

  const sushis = sushiList
    .slice(sushiIdx, sushiIdx + 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushiItem={sushi} onEatSushi={onEatSushi} />
    ))

  function handleClickMore() {
    setSushiIdx((sushiIdx) => (sushiIdx + 4) % sushiList.length);
  }
  
  return (
    <div className="belt">
      {sushis}
      <MoreButton onClickMore={handleClickMore}/>
    </div>
  );
}

export default SushiContainer;
