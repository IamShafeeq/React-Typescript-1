

import useFetch from "./CustomHook2"
// Define the type of data we expect from the API
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}




const UseCustomHook1: React.FC = () => {
  const [data] = useFetch<Todo[]>("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <h2>Fetched Todos</h2>
      {data &&
        data.map((item) => (
          <p key={item.id}>
            {item.id}. {item.title}
          </p>
        ))}
    </>
  );
};

export default UseCustomHook1;
