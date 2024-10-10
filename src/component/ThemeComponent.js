import React, { useState } from 'react';
import { useTheme } from './ThemeContext'; // Ensure correct import path
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ThemeComponent = () => {
    const { theme, toggleTheme } = useTheme(); // Ensure useTheme is defined

    const [activeButton, setActiveButton] = useState(''); // Track the active button color

    const handleButtonClick = (color) => {
        setActiveButton(color); // Set the active button color
        toggleTheme(); // Optional: toggle the overall theme if needed
    };

    return (
        <div style={{ background: theme.background, color: theme.foreground, padding: '20px' }}>
            <h1>Theme Component</h1>
            
            <button
                className={`btn ${activeButton === 'white' ? 'btn-secondary' : 'btn-outline-secondary'}`}
                onClick={() => handleButtonClick('white')}
            >
                Toggle Theme
            </button>
            <button
                className={`btn ${activeButton === 'blue' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => handleButtonClick('blue')}
            >
                Toggle Theme
            </button>
        </div>
    );
};

export default ThemeComponent;
