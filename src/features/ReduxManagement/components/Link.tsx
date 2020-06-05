import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface LinkProps {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}

const Link: FC<LinkProps> = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
