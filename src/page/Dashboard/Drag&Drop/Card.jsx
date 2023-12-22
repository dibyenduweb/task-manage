
// TodoCard.js
// import React from 'react';
// import { useDrag } from 'react-dnd';

// const TodoCard = ({ id, title, description, date, action, status }) => {
//   const [, drag] = useDrag({
//     type: 'CARD',
//     item: { id, status },
//   });

//   return (
//     <div ref={drag} className="card">
//       <div className="card-header">
//         <h3>{title}</h3>
//       </div>
//       <div className="card-body">
//         <p>Description: {description}</p>
//         <p>Date: {date}</p>
//         <p>Action: {action}</p>
//         <p>Status: {status}</p>
//       </div>
//     </div>
//   );
// };

// export default TodoCard;

// /* eslint-disable react/prop-types */
// import React from 'react';
// import { useDrag } from 'react-dnd';

// const TodoCard = ({ id, title, description, date, priority, status, index, moveCard }) => {
//   const [, drag] = useDrag({
//     type: 'CARD',
//     item: { id, status, index },
//   });

//   return (
//     <div ref={drag} className="card">
//       <div className="card-header">
    
//       </div>
//       <div className="card w-96 bg-base-100 shadow-xl">
//   <div className="card-body">
//     <h2 className="card-title">Title: {title}</h2>
//     <p>Description: {description}</p>
//         <p>Date: {date}</p>
//         <p>Priority: {priority}</p>
//         <p>Status: {status}</p>

//     <div className="card-actions justify-center">
//       <button className="btn btn-sm btn-primary">Delete</button>
//     </div>
//   </div>
// </div>

//     </div>
//   );
// };

// export default TodoCard;



// // TodoCard.js
// import React from 'react';
// import { useDrag } from 'react-dnd';

// const TodoCard = ({ _id, title, description, date, priority, status, index, moveCard, onDelete }) => {
//   const [, drag] = useDrag({
//     type: 'CARD',
//     item: { id, status, index },
//   });

//   const handleDelete = () => {
//     fetch(`https://task-management-server-flame-one.vercel.app/addtask/${_id}`, {
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(() => {
//         onDelete(_id);
//       })
//       .catch((error) => {
//         console.error('Error deleting data:', error);
//       });
//   };

//   return (
//     <div ref={drag} className="card">
//       <div className="card-header"></div>
//       <div className="card w-96 bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="card-title">Title: {title}</h2>
//           <p>Description: {description}</p>
//           <p>Date: {date}</p>
//           <p>Priority: {priority}</p>
//           <p>Status: {status}</p>
//           <div className="card-actions justify-end">
//             <button className="btn btn-sm btn-primary" onClick={handleDelete}>
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoCard;



import React from 'react';
import { useDrag } from 'react-dnd';

const TodoCard = ({ id, title, description, date, priority, status, index, moveCard }) => {
  const [, drag] = useDrag({
    type: 'CARD',
    item: { id, status, index },
  });

  return (
    <div ref={drag} className="card">
      <div className="card-header">
    
      </div>
      {/* <div className="card-body">
    
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Date: {date}</p>
        <p>Action: {action}</p>
        <p>Status: {status}</p>
      </div> */}
      
      <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Title: {title}</h2>
    <p>Description: {description}</p>
        <p>Date: {date}</p>
        <p>Priority: {priority}</p>
        <p>Status: {status}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm btn-primary">Delete</button>
    </div>
  </div>
</div>


    </div>
  );
};

export default TodoCard;