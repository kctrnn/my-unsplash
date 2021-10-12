import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;

  background-color: rgba(0, 0, 0, 0.1);

  opacity: ${(props) => (props.isShow ? 1 : 0)};
  visibility: ${(props) => (props.isShow ? 'visible' : 'hidden')};

  transition: all 200ms ease-in-out;

  & > div {
    transform: ${(props) => (props.isShow ? 'translate(-50%, -50%)' : 'translate(-50%, -100%)')};
  }
`;

const Content = styled.div`
  width: 620px;
  border-radius: 0.75rem;
  padding: 1.5rem 2rem;

  background-color: #fff;

  position: absolute;
  left: 50%;
  top: 50%;

  transition: transform 400ms ease-in-out;

  @media screen and (max-width: 767px) {
    width: 500px;
  }

  @media screen and (max-width: 575px) {
    width: 80%;
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
  line-height: calc(33 / 24);
`;

const Form = styled.form`
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-top: 1.2rem;

  label {
    display: inline-block;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  input {
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #4f4f4f;
    border-radius: 0.75rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ::placeholder {
      font-size: 0.875rem;
      line-height: calc(19 / 16);
      color: #bdbdbd;
    }
  }
`;

const Action = styled.div`
  text-align: right;

  & > *:last-child {
    margin-left: 0.5rem;
  }
`;

export const Modal = ({ title, onCloseModalClick, isDeleteMode = false, isShow }) => {
  return (
    <Container isShow={isShow} onClick={onCloseModalClick}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>

        <Form>
          <FormGroup>
            <label htmlFor="label">Label</label>
            <input type="text" id="label" placeholder="Toronto skyline at sunset" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="photoUrl">Photo URL</label>
            <input
              type="text"
              id="photoUrl"
              placeholder="https://images.unsplash.com/photo-1634003308715-7f3b46638942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
            />
          </FormGroup>
        </Form>

        <Action>
          <button className="btn" onClick={onCloseModalClick}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Action>
      </Content>
    </Container>
  );
};
