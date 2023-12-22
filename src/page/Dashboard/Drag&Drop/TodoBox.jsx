// // TodoBox.js
// import React from 'react';
// import { useDrop } from 'react-dnd';
// import TodoCard from './Card';


// const TodoBox = ({ title, status, cards, moveCard }) => {
//   const [, drop] = useDrop({
//     accept: 'CARD',
//     drop: (item) => moveCard(item.id, status),
//   });

//   return (
//     <div ref={drop} className="box">
//       <h2>{title}</h2>
//       {cards.map((card, index) => (
//         <TodoCard key={card.id} {...card} index={index} moveCard={moveCard} />
//       ))}
//     </div>
//   );
// };

// export default TodoBox;


// // TodoBox.js
// import React from 'react';
// import { useDrop } from 'react-dnd';
// import TodoCard from './Card';


// const TodoBox = ({ title, priority, status, cards, moveCard }) => {
//   const [, drop] = useDrop({
//     accept: 'CARD',
//     drop: (item) => moveCard(item.id, status),
//   });

//   return (
//     <div ref={drop} className="box">
//       <h2>{title}</h2>
//       {cards.map((card) => (
//         <TodoCard key={card.id} {...card} />
//       ))}
//     </div>
//   );
// };

// export default TodoBox;




import React from 'react';
import { useDrop } from 'react-dnd';
import TodoCard from './Card';


const TodoBox = ({ title, status, cards, moveCard, onDelete }) => {
  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => moveCard(item.id, status),
  });

  const handleCardDelete = (cardId) => {
    console.log('Deleting card with id:', cardId);
    onDelete(cardId);
  };

  return (
    <div ref={drop} className="box">
      <h2>{title}</h2>
      {cards.map((card) => (
        <TodoCard key={card.id} {...card} onDelete={handleCardDelete} />
      ))}
    </div>
  );
};

export default TodoBox;
