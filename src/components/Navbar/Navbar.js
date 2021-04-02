// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLaptop } from '@fortawesome/free-solid-svg-icons'

// const Navbar = () => {
//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                 <div class="container">
//                     <Link to="/" class="navbar-brand"><FontAwesomeIcon icon={faLaptop} />Ryans Computer</Link>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//                         <div class="navbar-nav ms-auto">
//                             <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
//                             <Link to="/orders" class="nav-link">Orders</Link>
//                             <Link to="/admin" class="nav-link">Admin</Link>
//                             <Link to="/contact" class="nav-link">Contact</Link>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;



import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faMotorcycle } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light py-3 fixed-top px-3">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#"><FontAwesomeIcon className="logo" icon={faLaptop} /> <span className="brand-name">Ryans Computer</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/home" className="nav-link active" aria-current="page">HOME</Link>
                            {/* <Link to="/destination" className="nav-link">DESTINATION</Link> */}
                            {/* <Link to="/blog" className="nav-link">BLOG</Link> */}
                            <Link to="/admin" className="nav-link">ADMIN</Link>
                            <Link to="/orders" className="nav-link">ORDERS</Link>
                            <Link to="/contact" className="nav-link">CONTACT</Link>
                            {
                                loggedInUser.email ? <Link className="nav-link" id="user-name">{loggedInUser.name}</Link> : <Link to="/login" className="nav-link btn btn-info px-5">LOG IN</Link>
                            }
                            {
                                loggedInUser.email ? <button className="sign-out-btn btn-lg" onClick={() => setLoggedInUser({})}>SIGN OUT</button> : ''
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;