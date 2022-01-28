import React from "react";
import emojipedia from "../emojipedia";
import Term from "./Term";

function CreateEmot(emot) {
  return (
    <Term
      key={emot.id}
      name={emot.name}
      emoji={emot.emoji}
      desc={emot.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(CreateEmot)}

        {/* <Term
          emoji={emojipedia[0].emoji}
          name={emojipedia[0].name}
          desc={emojipedia[0].meaning}
        />

        <Term
          emoji={emojipedia[1].emoji}
          name={emojipedia[1].name}
          desc={emojipedia[1].meaning}
        />

        <Term
          emoji={emojipedia[2].emoji}
          name={emojipedia[2].name}
          desc={emojipedia[2].meaning}
        /> */}

        {/* <div className="term">
          <dt>
            <Emoji emoji={emojipedia[0].emoji} />
            <Name name={emojipedia[0].name} />
          </dt>
          <Desc desc={emojipedia[0].meaning} />
        </div>

        <div className="term">
          <dt>
            <Emoji emoji={emojipedia[1].emoji} />
            <Name name={emojipedia[1].name} />
          </dt>
          <Desc desc={emojipedia[1].meaning} />
        </div>

        <div className="term">
          <dt>
            <Emoji emoji={emojipedia[2].emoji} />
            <Name name={emojipedia[2].name} />
          </dt>
          <Desc desc={emojipedia[2].meaning} />
        </div> */}
      </dl>
    </div>
  );
}

export default App;
