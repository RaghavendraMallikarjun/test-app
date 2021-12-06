import React, { useState, useRef, useEffect,useForceUpdate } from "react";
import ReactDOM from "react-dom";


function App() {

  const fileInput = useRef(null);

  useEffect(e => {
    window.addEventListener("keyup", clickFileInput);
    return () => window.removeEventListener("keyup", clickFileInput);
  });

  function clickFileInput(e) {
    if (fileInput.current.nextSibling.contains(document.activeElement)) {
      // Bind space to trigger clicking of the button when focused
      if (e.keyCode === 32) {
        fileInput.current.click();
      }
    }
  }

  function fileNames() {
    const { current } = fileInput;

    if (current && current.files.length > 0) {
      let messages = [];
      for (let file of current.files) {
        messages = messages.concat(<p key={file.name}>{file.name}</p>);
      }
      return messages;
    }
    return null;
  }


  function onSubmit(e) {
    e.preventDefault();
    const data =fileInput.current.files;
    var w = window.open(data[0].name); //Required full file path.
    console.log(w);
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          id="file"
          type="file"
          ref={fileInput}
          // The onChange should trigger updates whenever
          // the value changes?
          // Try to select a file, then try selecting another one.
          multiple
        />
        <label htmlFor="file">
        </label>
        {fileNames()}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;