import { addTodo, getTodos } from '@/data/todos'
import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: async () => getTodos(),
  component: HomePage,
})

function HomePage() {
  const todos = Route.useLoaderData()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const title = formData.get('title') as string

    addTodo(title)
    form.reset()

    // Invalidate and refetch the loader data
    await router.invalidate()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          name="title"
          placeholder="Add a new todo"
          className="border p-2 rounded flex-1"
          required
        />
        <button className="bg-blue-500 text-white px-4 rounded" type="submit">
          Add
        </button>
      </form>

      <ul className="list-disc pl-5">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
