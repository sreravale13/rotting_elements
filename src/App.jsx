import { useState, useEffect } from 'react'
import './App.css'
import Form from 'react-bootstrap/Form';
import Board from './Board';
import BoardArrange from './BoardArrange';

function App() {
  const board = 3;
  const [input, setInput] = useState(board);
  const [loadBoard, setLoadBoard] = useState("init");

  function updateLoadBoard(e) {
    setLoadBoard("updated");
    //e.preventDefault();
    // setTimeout(() => {
    //   setLoadBoard(false);
    // }, 1000);
  };

  if (loadBoard=="loading") {
    return <>Loading...</>
  };

  return (
    <div className="comic-neue-regular-italic comic-neue-bold ">
      { (
        <section id="center" onClick={()=>updateLoadBoard()}
        >
          Select the cells and click the button to see the rotting process in action. <br />
           {loadBoard=="init" && <BoardArrange inp={parseInt(board)} />}
          {/* {loadBoard=="updated" && <Board inp={parseInt(board)} />} */}
         
        </section>
      )}
    </div>
  )
}

export default App