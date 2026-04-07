import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    // later we will send this to backend

    try {
      const res = await axios.post(
        'http://localhost:8000/api/v1/user/login-user',
        formData
      );

      console.log('response from backend=', res.data.data);

      alert('User Logged In Successfully');
    } catch (error) {
      console.log('Error occured while login', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-gradient">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[350px]">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <button
            type="submit"
            className="bg-brand-gradient text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
