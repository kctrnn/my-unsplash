import { SearchOutline } from 'react-ionicons';
import styled from 'styled-components';
import Logo from '../../my_unsplash_logo.svg';

const Container = styled.div`
  display: flex;
  align-items: center;

  padding-top: 1rem;
  padding-bottom: 5rem;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
`;

const LogoContainer = styled.div`
  padding-right: 2rem;

  img {
    width: 10rem;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;

  border: 1px solid #bdbdbd;
  border-radius: 0.75rem;

  svg {
    vertical-align: middle;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  border: none;
  margin-left: 1rem;
  padding-right: 1rem;

  color: #333;
  line-height: calc(19 / 14);

  ::placeholder {
    color: #bdbdbd;
    font-size: 0.875rem;
  }
`;

export const Header = ({ onAddPhotoClick }) => {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>

      <Search>
        <SearchOutline color={'#BDBDBD'} height="18px" width="18px" />

        <SearchInput type="text" placeholder="Search by name" />
      </Search>

      <ButtonContainer onClick={onAddPhotoClick}>
        <button className="btn btn-primary">Add a photo</button>
      </ButtonContainer>
    </Container>
  );
};
