import { useForm } from "react-hook-form";
import axios from "axios"; // Make sure to install axios: npm install axios

const AddTask = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send a POST request to the backend API to save the task data in MongoDB
      const response = await axios.post("http://localhost:5000/addtask", data);
      console.log("Task added successfully:", response.data);
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Create a New Task</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Task Title"
                  className="input input-bordered"
                  {...register("title", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  placeholder="Task Description"
                  className="textarea textarea-bordered"
                  {...register("description")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered"
                  {...register("deadline")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>
                <select className="select select-bordered" {...register("priority")}>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="form-control mt-4">
                <button type="submit" className="btn btn-primary">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
