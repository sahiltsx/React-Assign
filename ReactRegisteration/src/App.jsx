
import { useState } from 'react';
import './App.css';

export default function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    setSuccess('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (form.name.trim().length < 3) {
      newErrors.name = 'Name must have at least 3 characters.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (form.password.length < 8) {
      newErrors.password = 'Password must have at least 8 characters.';
    }

    if (!/[A-Z]/.test(form.password) ||
        !/[0-9]/.test(form.password)) {
      newErrors.password =
        'Include at least one uppercase letter and one number.';
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess('Registration form validated successfully!');

      setForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  }

  return (
    <main className="registration-page">
      <form className="register-card" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p className="subtitle">Register to get started</p>

        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter full name"
        />
        {errors.name && <small>{errors.name}</small>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        {errors.email && <small>{errors.email}</small>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Minimum 8 characters"
        />
        {errors.password && <small>{errors.password}</small>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter password"
        />
        {errors.confirmPassword && (
          <small>{errors.confirmPassword}</small>
        )}

        <button type="submit">Register</button>

        {success && <p className="success">{success}</p>}
      </form>
    </main>
  );
}