import React from 'react';

interface NavbarProps {
    onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
    return (
        <>
            <li><button onClick={() => onNavigate("sectionId")}>Tale</button></li>
        </>
    );
};

export default Navbar;