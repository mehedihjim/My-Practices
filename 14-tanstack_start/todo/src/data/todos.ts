import { createServerFn } from '@tanstack/start'

// Types
export type Todo = {
  id: number
  title: string
}

// Sample Data (this will be in-memory on the server)
const todos: Todo[] = [
  { id: 1, title: 'Learn TanStack Start' },
  { id: 2, title: 'Build a Todo App' },
  { id: 3, title: 'Write an article about it' },
]

// CRUD Operations wrapped as server functions
export const getTodos = createServerFn('GET', async () => {
  return todos
})

export const getTodoById = createServerFn('GET', async (id: number) => {
  return todos.find((todo) => todo.id === id)
})

export const addTodo = createServerFn('POST', async (title: string) => {
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
  }
  todos.push(newTodo)
  return newTodo
})

export const updateTodo = createServerFn(
  'POST',
  async (data: { id: number; title: string }) => {
    const todo = todos.find((todo) => todo.id === data.id)
    if (todo) {
      todo.title = data.title
      return todo
    }
    return null
  },
)

export const deleteTodo = createServerFn('POST', async (id: number) => {
  const index = todos.findIndex((todo) => todo.id === id)
  if (index !== -1) {
    return todos.splice(index, 1)[0]
  }
  return null
})
