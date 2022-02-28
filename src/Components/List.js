import { useState } from "react";
import Operations from "./Operations";
export default function List() {
  const [state, setState] = useState({
    "Organize closet": [
      { "Donate old clothes and shoes": false },
      { "Buy new shelf": false },
      { "Put in shelf by color": true },
    ],
    "Finish homework": [
      { "Finish math homework": false },
      { "Finish science homework": false },
      { "Finish Reactjs homework": true },
    ],
    "Achieve nirvana": [
      { "Meditate a little": true },
      { "Gain some wisdom": false },
    ],
  });
  return (
    <>
      {Object.entries(state).map(([task, subTask]) => {
        return (
          <div
            style={{
              diplay: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={task}
          >
            <h3>{task.toUpperCase()}</h3>
            <div
              style={{
                diplay: "flex",
              }}
            >
              <Operations
                state={state}
                setState={setState}
                subTask={subTask}
                task={task}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
