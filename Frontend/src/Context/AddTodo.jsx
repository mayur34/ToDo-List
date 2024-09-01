import { createContext, useState } from "react";

export const AddTodoContext = createContext();

const AddTodoProvider = (props) => {
  const [list, setList] = useState([]);

  return (
    <AddTodoContext.Provider value={[list, setList]}>
      {props.children}
    </AddTodoContext.Provider>
  );
};
export default AddTodoProvider;
