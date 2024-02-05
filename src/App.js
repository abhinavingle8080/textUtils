import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.body.style.backgroundColor = '#2b2c2c';
        } else {
            setTheme('light');
            document.body.style.backgroundColor = 'white';
        }
    }

    return (
        <>
            <Navbar title={"TextUtils"} theme={theme} toggleTheme={toggleTheme} />
            <div className="container">
                <TextForm theme={theme}/>
                <About />
            </div>
        </>
    );
}

export default App;

// import {BrowserRouter, Route, Routes,} from "react-router-dom";
// import Home from './components/Home';
// import BlogApp from "./components/BlogApp";
// import UserApp from "./components/UserApp";

// export default function App() {
//     return (<BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/blog/*" element={<BlogApp/>}/>
//                 <Route path="/users/*" element={<UserApp/>}/>
//             </Routes>
//         </BrowserRouter>);
// }