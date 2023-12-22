// import { useEffect, useState } from "react";

// const CardContainer = () => {
//   const [todoData, setTodoData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const todoResponse = await fetch('https://task-management-server-flame-one.vercel.app/addtask');
//         const todoData = await todoResponse.json();
//         setTodoData(todoData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <h1>To-Do</h1>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Date</th>
//                 <th>Priority</th>
//                 <th>Action</th>
//                 {/* Add other column headers based on your data structure */}
//               </tr>
//             </thead>
//             <tbody>
//               {todoData.map((todo) => (
//                 <tr key={todo._id}>
//                   <td>{todo.title}</td>
//                   <td>{todo.description}</td>
//                   <td>{todo.deadline}</td>
//                   <td>{todo.priority}</td>
//                   <td>Dlete</td>  
//                   {/* Add other columns based on your data structure */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <h1>OnGoing</h1>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Date</th>
//                 <th>Priority</th>
//                 <th>Action</th>
//                 {/* Add other column headers based on your data structure */}
//               </tr>
//             </thead>
//             <tbody>
//               {todoData.map((todo) => (
//                 <tr key={todo._id}>
//                   <td>{todo.title}</td>
//                   <td>{todo.description}</td>
//                   <td>{todo.deadline}</td>
//                   <td>{todo.priority}</td>
//                   <td>Dlete</td>  
//                   {/* Add other columns based on your data structure */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <h1>complted</h1>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Date</th>
//                 <th>Priority</th>
//                 <th>Action</th>
//                 {/* Add other column headers based on your data structure */}
//               </tr>
//             </thead>
//             <tbody>
//               {todoData.map((todo) => (
//                 <tr key={todo._id}>
//                   <td>{todo.title}</td>
//                   <td>{todo.description}</td>
//                   <td>{todo.deadline}</td>
//                   <td>{todo.priority}</td>
//                   <td>Dlete</td>  
//                   {/* Add other columns based on your data structure */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// };

// export default CardContainer;
