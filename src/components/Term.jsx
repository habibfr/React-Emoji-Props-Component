import React from "react";
import Emoji from "./Emoji";
import Name from "./Name";
import Desc from "./Description";

function Term(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emoji={props.emoji} />
        <Name name={props.name} />
      </dt>
      <Desc desc={props.desc} />
    </div>
  );
}

export default Term;
