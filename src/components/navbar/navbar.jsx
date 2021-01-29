import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        AGNE cha hopp
                    </Link>
                    <p>count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>add</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
