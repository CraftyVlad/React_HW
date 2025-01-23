import React, { useReducer } from 'react';

// 1. Створіть форму з двома полями введення: одне для введення імені користувача, інше для введення його електронної пошти. Вико­ристо­вуйте use­Reducer() для збереження цих даних і відображення їх на сторінці.

const initialState = {
  username: '',
  email: '',
};

function formReducer(state, action) {
  switch (action.type) {
    case 'set_username':
      return { ...state, username: action.payload };
    case 'set_email':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export default function UserForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleUsernameChange = (e) => {
    dispatch({ type: 'set_username', payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: 'set_email', payload: e.target.value });
  };

  return (
    <div>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={state.username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </div>
      </form>
      <div>
        <h2>Entered data:</h2>
        <p><strong>Name:</strong> {state.username}</p>
        <p><strong>Email:</strong> {state.email}</p>
      </div>
    </div>
  );
}
