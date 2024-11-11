import React from 'react';
import './Spinner.scss'; 

const Spinner: React.FC = () => {
  return (
    <div className="custom-spinner">
      <div className="inner-circle"></div>
      <div className="rotating-border"></div>
    </div>
  );
};

export default Spinner;
