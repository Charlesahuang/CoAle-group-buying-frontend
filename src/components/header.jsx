import React, { useEffect, useState } from 'react';
// import { FaHeart, FaOpencart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const TopBar = ({ }) => {
  const location = useLocation();
  const [Pagename, setPagename] = useState()
  useEffect(() => {
    const currentPath = location.pathname;
    const cleanedPath = currentPath.startsWith('/') ? currentPath.slice(1) : currentPath;
    setPagename(cleanedPath)
    return () => {
    };
  }, [location]);
  return (
    <div className="header_top-bar">
      <h2 className="header_page-title">{Pagename}</h2>
    </div>
  );
};

export default TopBar;
