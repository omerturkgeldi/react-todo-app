import React, { useState } from "react";
import "./TodoItem.css";
import Button from "../Button/Button.js";

function Todo(props) {
  function deleteItem(e) {
    if (e.target.type === "button") {
      console.log(e.target);
      console.log(props.todo);
      console.log(props.id);
      console.log(props.todo[0].id);
      console.log(e);
      console.log(props);

      // props.todo.map(xxx => console.log(xxx.id))

      // const newArray =props.todo.filter((todo) => {
      //   props.todo.map(xxx => {
      //     return  xxx.id === props.id ;
      //   })
      //   // return todo.props.id !== props.id;
      // });

      const yenidizi = [1,2,3,4]
      console.log(yenidizi);
      const newArray = props.todo.filter((xxx) => {
        if (xxx.id !== props.id) {
          console.log("zaaaa");
          if(xxx.id){
            yenidizi.push(xxx.id)
            return xxx.id;

          }
        }
      });
      props.setState({
        todos: newArray,
      })
      console.log(yenidizi);

      console.log(newArray);
      // props.todo.filter( (element) => {
      //   console.log(element);
      // })
    }
  }

  const [line, setLine] = useState(false);

  const { content } = props;
  return (
    <div>
      <div
        onClick={(e) => deleteItem(e)}
        className="todoDiv"
        key={props.id}
        // onClick={() => setLine(!line)}
        // style={{ textDecoration: line ? "line-through" : "none" }}
        // className={line ? "done todoDiv" : "todoDiv"}
      >
        <span
          // className="content"
          onClick={() => setLine(!line)}
          className={line ? "done content" : "todoDiv content"}
        >
          {content}
        </span>
        <Button
          key={props.id}
          data-key={props.id}
          onClick={(e) => deleteItem(e)}
        ></Button>
      </div>
    </div>
  );
}

export default Todo;
