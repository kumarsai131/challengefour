import "./styles.css";
export default function Operations({ state, setState, task, subTask }) {
  function toggle(task, subTask, index) {
    let newObj = Object.assign({}, state);
    newObj[task][index][subTask] = !newObj[task][index][subTask];
    setState(newObj);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "60vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 250,
        }}
      >
        <h4>Not Yet Completed</h4>
        {subTask.map((e, index) => {
          let x = Object.keys(e);
          if (!e[x[0]])
            return (
              <>
                <p
                  key={x[0]}
                  onClick={(e) => toggle(task, x[0], index)}
                  className="notTrue"
                >
                  {x[0]}
                </p>
              </>
            );
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h4>Completed</h4>
        {subTask.map((e, index) => {
          let x = Object.keys(e);
          if (e[x[0]])
            return (
              <>
                <p
                  key={x[0]}
                  onClick={(e) => toggle(task, x[0], index)}
                  className="true"
                >
                  {x[0]}
                </p>
              </>
            );
        })}
      </div>
    </div>
  );
}
