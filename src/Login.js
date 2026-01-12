import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserName }) => {
  const [name, setName] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setUserName(name.trim());
      navigate('/');
    }
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>Unveil hidden Locations!</h2>

        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          style={{
            ...styles.input,
            borderColor: isInputFocused ? '#007bff' : '#ccc',
            boxShadow: isInputFocused ? '0 0 5px #007bff' : 'none',
            outline: 'none',
            transition: 'all 0.3s ease',
          }}
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            backgroundColor: isButtonHovered ? '#0056b3' : '#007bff',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    backgroundImage:
      "url('https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  form: {
    backgroundColor: 'rgba(36, 92, 87, 0.95)', // slightly transparent for style
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    width: '350px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: '750',
    color: '#333',
  },
  input: {
    width: '90%',
    padding: '12px',
    marginBottom: '24px',
    border: '2px solid #ccc',
    borderRadius: '12px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    color: '#fff',
    backgroundColor: 'yellow',
    border: 'none',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    userSelect: 'none',
  },
};

export default Login;