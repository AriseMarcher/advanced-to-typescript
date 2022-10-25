interface TodoA {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<TodoA, "title" | "completed">;

const todoA: TodoPreview = {
  title: "Clean room",
  completed: false
}

// const todoA: TodoPreview
todoA;