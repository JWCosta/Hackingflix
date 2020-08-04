import styled from "styled-components";

const PageError = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 5px;
  background: url("../../assets/img/ops.png");
  background-size: 50% 10px;

  padding-bottom: 5px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    background-size: 200px 200px;
  }
`;

export default PageError;
