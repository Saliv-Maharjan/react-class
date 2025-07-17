import { NavLink } from 'react-router';

function Home(){
    return(
        <>
            <div className="hero-section">
                <h2>Welcome to the Home Page</h2>
                <p>This is the main content of this home page.</p>
                <button>Explore More</button>
            </div>

            <div className="extra-section">
                <h2> Want to be an Admin? </h2>
                <p>Head to the Admin Dashboard now.</p>
                <button><NavLink to="/admin">Admin Dashboard</NavLink></button>
            </div>          
        </>
    );
}

export default Home;