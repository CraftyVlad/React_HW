import { useState } from 'react'
import './App.css'

// Створіть реєстраційну форму. Користувач має ввести:
// нік,
// електронну адресу,
// стать,
// вік.
// Використовуйте можливості React для роботи з формами. Використовуйте React для валідації введених значень.

function App() {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    gender: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const sentErrors = {};

    if (!formData.nickname) {
      sentErrors.nickname = "Nickname is required";
    } else if (formData.nickname.length < 3) {
      sentErrors.nickname = "Nickname needs to be 3 letters minimum";
    }

    if (!formData.email) {
      sentErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      sentErrors.email = "Invalid email";
    }

    if (!formData.gender) {
      sentErrors.gender = "Gender is required";
    }

    if (!formData.age) {
      sentErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age < 1 || formData.age > 150) {
      sentErrors.age = "Enter age from 1 to 150";
    }

    setErrors(sentErrors);
    return Object.keys(sentErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(JSON.stringify(formData, null, 2));
      setFormData({ nickname: "", email: "", gender: "", age: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nickname:
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </label>
        {errors.nickname && <p style={{ color: "red" }}>{errors.nickname}</p>}
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Choose gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
      </div>

      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App
