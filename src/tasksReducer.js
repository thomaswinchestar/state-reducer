export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added":
      {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      break;
    case "changed":
      {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      break;
    case "deleted":
      {
        return tasks.filter((t) => t.id !== action.id);
      }
      break;
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
