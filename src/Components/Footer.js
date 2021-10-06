import React from 'react';

export const Footer = () => {
  let footerStyle = {
    bottom: '0'
  };

  return (
    <>
      <footer style={footerStyle} className="py-4 bg-dark text-light text-center">
        <div style={{ color: '#DDD' }}>Copyright &copy; Sarthak Arora</div>
      </footer>
    </>
  );
};
