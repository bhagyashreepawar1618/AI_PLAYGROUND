import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    profilePicture: null,
  });

  const [loading, setLoading] = useState(false); // 🔥 NEW

  const handleChange = e => {
    const { name, value, files } = e.target;

    if (name === 'profilePicture') {
      setFormData({ ...formData, profilePicture: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true); // 🔥 START LOADING

    try {
      const data = new FormData();

      data.append('fullname', formData.name);
      data.append('username', formData.username);
      data.append('email', formData.email);
      data.append('password', formData.password);
      data.append('profilePicture', formData.profilePicture);

      const res = await axios.post(
        'http://localhost:8000/api/v1/user/register-user',
        data
      );

      alert('User is registered Successfully..!!');
    } catch (err) {
      console.error(err);
      alert('Error occurred while registering user');
    } finally {
      setLoading(false); // 🔥 STOP LOADING
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-gradient">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

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
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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

          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />

          {/* 🔥 BUTTON WITH LOADING */}
          <button
            type="submit"
            disabled={loading}
            className={`py-3 rounded-lg font-semibold text-white transition ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
