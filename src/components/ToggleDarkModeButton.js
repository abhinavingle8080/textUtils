import React, {useState} from 'react'

export default function ToggleDarkModeButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Step 2: Create a function to toggle between light and dark modes
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Step 4: Define CSS classes or styles based on the current mode
    const containerStyles = {
        backgroundColor: isDarkMode ? '#000000' : '#fff',
        color: isDarkMode ? '#fff' : '#000000',
        transition: 'background-color 0.3s, color 0.3s',
        minHeight: '100vh',
        padding: '20px',
    };

    return (
            <button onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
    );
}


