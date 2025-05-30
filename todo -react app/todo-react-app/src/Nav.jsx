import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '19px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: '#8cfad0', fontSize: '20px', fontWeight: 'bold' }}>TODO</div>
      <div>
        <a href="/" style={{ color: '#8cfad0', textDecoration: 'none', marginRight: '15px' }}>Home</a>
        <a href="/add-item" style={{ color: '#8cfad0', textDecoration: 'none' }}>Add Item</a>
      </div>
    </nav>
  );
};

export default Navbar;