import React from 'react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const Navigation: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav>
      <ul>
        <li><button onClick={() => onNavigate("sectionId")}>Projects</button></li>
        {/* Additional navbar items */}
      </ul>
    </nav>
  );
};

export default Navigation;