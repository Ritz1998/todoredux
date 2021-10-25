import React  from "react";
import { connect } from "react-redux";
// import { connect } from "react-redux";
// import { addTodos,removeTodos,updateTodos,completeTodos } from "../Redux/reducer.js";

// import {useSelector} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        Todolist: state,
    };
  };
  
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       addTodo: (obj) => dispatch(addTodos(obj)),
//       removeTodo:(id)=>dispatch(removeTodos(id)),
//       updateTodo:(obj)=>dispatch(updateTodos(obj)),
//       completeTodo:(obj)=>dispatch(completeTodos(obj)),
//     };
//   };
const Heading=(props)=> {

//    const heading= useSelector((state)=>state)
//    console.log(heading);

   
    return (
        <div>
            {/* {heading.Heading} */}
            {props.Todolist}
           <h1 className="Heading">ToDO App</h1>

        </div>
    )
}

export default connect(mapStateToProps)(Heading) 
