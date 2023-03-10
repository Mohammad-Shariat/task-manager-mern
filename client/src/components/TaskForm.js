import { useState } from 'react';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    const newTask = { task };

    const response = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTask('');
      setError(null);
      console.log('new task added', json);
    }
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Task</h3>

      <label>Task Title</label>
      <input type='text' onChange={e => setTask(e.target.value)} value={task} />
      <button>Add Task</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default TaskForm;
