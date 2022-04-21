import Todo from "../features/todos/Todo";

export default function Home() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
      <div>Welcome Home!</div>
      <Todo />
    </main>
  );
}
