// import { Router } from "express";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const Header = () => {
  return (
    <Router>
      <div className="flex justify-between items-center py-5 px-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="font-bold">NotePad</h1>
        <ul className="flex space-x-4 list-none m-0 p-0">
          <li className="hover:text-white">
            <Link to="#">Pads</Link>
          </li>
          <li className="hover:text-white">
            <Link to="#">Create New Pad</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default Header;
