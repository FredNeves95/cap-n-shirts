import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  margin: 30px auto;
  @media (max-width: 1400px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    width: 100%;
  }
`;
