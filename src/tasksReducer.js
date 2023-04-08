function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_A':
      return { ...state, toggleA: action.payload };
    case 'TOGGLE_B':
      return { ...state, toggleB: action.payload };
    case 'TOGGLE_C':
      return { ...state, toggleC: action.payload };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, { toggleA: false, toggleB: false, toggleC: false });

const handleToggleA = () => {
  dispatch({ type: 'TOGGLE_A', payload: !state.toggleA });
};

const handleToggleB = () => {
  dispatch({ type: 'TOGGLE_B', payload: !state.toggleB });
};

const handleToggleC = () => {
  dispatch({ type: 'TOGGLE_C', payload: !state.toggleC });
};
