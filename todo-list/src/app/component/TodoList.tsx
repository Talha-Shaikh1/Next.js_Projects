'use client'
import {useState} from 'react'

interface Todo{
    id: number;
    text: string;
    compeleted: boolean;
}

const TodoList = () =>
{
    const [todos , setTodos] = useState <Todo[]>([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        if(inputValue.trim() === "") return;
        setTodos([
            ...todos,
            {id: Date.now(), text: inputValue, compeleted:false},
        ])

        setInputValue("");
    }

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo)=>
            todo.id === id? {...todo, compeleted: !todo.compeleted} : todo
        )
    )
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo)=> todo.id !== id))
    };

    return(
        <div className='flex flex-col min-h-screen'>
            <header className='bg-blue-700 text-white py-4'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h1 className='text-3xl font-serif '>TodoList by Talha Shaikh</h1>
                    <p className='font-serif mt-3'>Organize your work with our Next.js Todo List App.</p>
                </div>
            </header>

            <main className='flex-grow flex items-center justify-center'>
                <div className='max-w-md mx-auto p-4 bg-slate-300 round-lg shadow-md'>
                    <div className='mb-4'>
                        <div className='flex'>
                            <input 
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} 
                            className='flex-grow p-2 border border-grey-400 rounded-;g'
                            placeholder='Add a new task ....'/>
                            <button
                            onClick={addTodo}
                            className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-sky-400'>
                                Add
                            </button>
                        </div>
                    </div>
                    <ul className='space-y-2'>
                        {todos.map ((todo) => (
                            <li key={todo.id}
                            className={`flex items-center justifi-between p-2 border border-slate-400 rounded-lg ${
                                todo.compeleted ? "bg-lime-400 line-through":  "bg-sky-100 "}`}>
                                    <span>{todo.text}</span>
                                    <div>
                                        <button
                                        onClick={() => toggleTodo(todo.id)}
                                        className='text-white px-2 py-1 text-sm bg-orange-500 rounded-lg hover:bg-amber-300 ml-20'>
                                            {todo.compeleted ? "Undo" : "Compelete"}
                                        </button>


                                        <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className='text-whit px-2 py-1 text-sm bg-orange-500 rounded-lg hover:bg-grey-300 ml-3'>
                                            Delete
                                        </button>

                                    
                                    </div>
                                </li>
                        ))}

                    </ul>
                </div>
            </main>
        </div>
    )
}

export default TodoList