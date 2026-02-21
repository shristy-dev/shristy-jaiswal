import React from 'react';

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="animate-fade-in">{children}</div>;
};

export default AnimatedPage;
