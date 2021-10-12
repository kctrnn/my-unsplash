import Logo from '../../my_unsplash_logo.svg';
import styled from 'styled-components';
import { SearchOutline } from 'react-ionicons';

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
  padding: 1rem;

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

export const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>

      <Search>
        <SearchOutline color={'#BDBDBD'} height="18px" width="18px" />

        <SearchInput type="text" placeholder="Search by name" />
      </Search>

      <ButtonContainer>
        <button className="btn btn-primary">Add a photo</button>
      </ButtonContainer>
    </Container>
  );
};
