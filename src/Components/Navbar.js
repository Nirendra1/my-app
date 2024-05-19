import React from 'react';
import styled from 'styled-components';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';



const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: red;
  color: #fff;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  padding-left: 5px;
  width: 200px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LeftSection>
        <DashboardIcon />
        <NotificationsIcon />
        <AddIcon />
      </LeftSection>
      <RightSection>
        <SearchBar>
          <SearchIcon />
          <SearchInput placeholder="Search..." />
        </SearchBar>
        <ProfileImage src="https://via.placeholder.com/40" alt="Profile" />
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;
