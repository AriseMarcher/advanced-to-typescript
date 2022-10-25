interface TodoB {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoBPreview = Omit<TodoB, "description">;

const todoB: TodoBPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770
};

type TodoCPreview = Omit<TodoB, "description" | "createdAt">;
const todoC: TodoCPreview = {
  title: 'Go to school',
  completed: false
}

// const todoB: TodoBPreview
todoB;

// const todoC: TodoCPreview
todoC;