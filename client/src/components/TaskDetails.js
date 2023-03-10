const taskDetails = ({ task }) => {
  return (
    <div className='task-details'>
      <h4>{task.task}</h4>
      <p>{task.createdAt}</p>
    </div>
  );
};

export default taskDetails;
