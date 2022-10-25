interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users"
};

// error!!!
// Cannot assign to 'title' because it is a read-only property.ts(2540)
// todo.title = "hello"