import { useState, useEffect } from "react";

function Acc(props) {
  // unload props
  const todo = props.todo;

  //states
  const [toggle, setToggle] = useState("none");

  useEffect(() => {
    console.log(toggle)
  }, [toggle])

  return (
    <div style={{ disply: "flex", outline: "1px solid", margin: "20px" }}>
      <div onClick={() => {setToggle(toggle === "block" ? "none" : "block")}}>
        <p className="AccordianToggle" style={{ backgroundColor: "#EEE" }}>id: {todo["id"]}</p>
      </div>
      <div style={{ display: toggle }}>
        {Object.entries(todo).join(", ")}
      </div>
    </div>
  )
}

export default function Accordian() {
  // states
  const [api, setApi] = useState([]);
  const [header, setHeader] = useState([]);


  useEffect(() => {
    if (api && api.length > 0) {
      setHeader(Object.keys(api[0]))
    }
  }, [api])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setApi(json))
  }, [])

  return (
    <div style={{ maxWidth: "1200px", margin: "auto" }}>
      {Object.values(api).map((x) => {return <Acc todo={x} />})}
    </div>
  );
}
