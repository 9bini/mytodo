/**
 *
 * @param {*} todos 디스패처에 등록한 콜백을 통해 데이터를 받게 된다.
 * @param {*} param1 action
 * @returns
 */
export const todoReducer = (todos, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return [...todos, { title: payload, id: todos.length, status: 'todo' }];
    case 'SET_INIT_DATA':
      return payload;
    case 'CHANGE_TODO_STATUS':
      return todos.map((todo) => {
        if (todo.id === +payload) {
          if (todo.status === 'done') todo.status = 'todo';
          else todo.status = 'done';
        }
        return todo;
      });

    default:
      break;
  }
};
