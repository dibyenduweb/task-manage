
// // App.js
// import React, { useState, useEffect } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import TodoBox from './page/Dashboard/Drag&Drop/TodoBox';



// const App = () => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API endpoint
//     fetch('https://task-management-server-flame-one.vercel.app/addtask')
//       .then((response) => response.json())
//       .then((data) => {
//         // Process the API data and update the state
//         const apiCards = data.map((item, index) => ({
//           id: index + 1,
//           title: item.title,
//           description: item.description,
//           date: item.deadline,
//           action: 'Delete',
//           status: 'todo', // You can set the initial status as needed
//         }));
//         setCards(apiCards);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

//   const moveCard = (cardId, newStatus) => {
//     const updatedCards = cards.map((card) =>
//       card.id === cardId ? { ...card, status: newStatus } : card
//     );
//     setCards(updatedCards);
//   };

//   const filterCardsByStatus = (status) => cards.filter((card) => card.status === status);

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="App grid grid-cols-3">
//         <TodoBox title="To-do" status="todo" cards={filterCardsByStatus('todo')} moveCard={moveCard} />
//         <TodoBox title="Ongoing" status="ongoing" cards={filterCardsByStatus('ongoing')} moveCard={moveCard} />
//         <TodoBox title="Completed" status="completed" cards={filterCardsByStatus('completed')} moveCard={moveCard} />
//       </div>
//     </DndProvider>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import TodoBox from './page/Dashboard/Drag&Drop/TodoBox';
// import useAuth from './Hooks/useAuth';

// const App = () => {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { user } = useAuth();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://task-management-server-flame-one.vercel.app/addtask');
//         const data = await response.json();

//         const apiCards = data.map((item, index) => ({
//           id: index + 1,
//           title: item.title,
//           description: item.description,
//           date: item.deadline,
//           priority: item.priority,
//           userEmail: item.email,
//           status: 'todo',
//         }));

//         setCards(apiCards);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const moveCard = (cardId, newStatus) => {
//     const updatedCards = cards.map((card) =>
//       card.id === cardId ? { ...card, status: newStatus } : card
//     );
//     setCards(updatedCards);
//   };

//   const filterCardsByStatus = (status) => {
//     // Filter cards by status and user email
//     return cards.filter((card) => card.status === status && card.userEmail === user.email);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="App grid grid-cols-3">
//           <TodoBox title="To-do" status="todo" cards={filterCardsByStatus('todo')} moveCard={moveCard} />
//           <TodoBox title="Ongoing" status="ongoing" cards={filterCardsByStatus('ongoing')} moveCard={moveCard} />
//           <TodoBox title="Completed" status="completed" cards={filterCardsByStatus('completed')} moveCard={moveCard} />
//         </div>
//       )}
//     </DndProvider>
//   );
// };

// export default App;


// main code 

