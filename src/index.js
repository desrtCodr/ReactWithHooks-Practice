import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

/*
  Instructions:
    Assume you're creating an app that allows the user to
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
*/

function App() {
  const [post, setPost] = React.useState("");
  const [length, setLength] = React.useState(0);

  const fieldUpdate = (e) => {
    setLength(e.target.value.length);
    setPost(e.target.value);
  };
  React.useEffect(() => {
    document.title = `${240 - length} characters left`;
  }, [length]);

  return (
    <div className="App">
      <title>"You hae 240 characters left."</title>
      <textarea
        type="text"
        value={post}
        placeholder="Update your status, max 240 charaters"
        onChange={(e) => {
          fieldUpdate(e);
        }}
      />
      <button
        disabled={length === 0 || length > 240 ? true : false}
        onClick={(e) => {
          console.log(post);
          setPost("");
          setLength(0);
        }}
      >
        Post Status
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
