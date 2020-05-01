import React, { useState } from "react";

const InputElement = () => {

  const [inputText, setInputText] = useState("");
  const [histiryList, setHistoryList] = useState([]);

  return <div>
    <input
      onChange={(e) => {
        setInputText(e.target.value)
        setHistoryList([...histiryList, e.target.value])
      }}
      placeholder="Enter some text"
    />
    <br />
    {inputText}
    <ul>
      {histiryList.map((rec) => {
        return <div>{rec}</div>
      })}
    </ul>
  </div>
}

export default InputElement;