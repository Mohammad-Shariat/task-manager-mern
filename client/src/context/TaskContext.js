import { createContext, useReducer } from 'react';

export const TasksContext = createContext();

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASK':
      return {
        tasks: action.payload,
      };
    case 'CREATE_TASK':
      return {
        tasks: [action.payload, ...state.tasks],
      };
    default:
      return state;
  }
};

export const TasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, {
    tasks: null,
  });

  //   dispatch({ type: 'SET_TASKS', payload: [{}, {}] });

  return (
    <TasksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
