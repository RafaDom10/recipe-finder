import styled from 'styled-components';

export const StyledHeader = styled.div`
  color: #F8F8F2;
  background-color: #22212C;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 rgba(97, 63, 63, 0.4);
`;

export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 18px;
  font-weight: bold;
`;

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #F8F8F2;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;
