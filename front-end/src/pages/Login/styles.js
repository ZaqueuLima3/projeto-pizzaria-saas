import styled from "styled-components";

import image from "../../assets/images/Background/Pizza@1x.png";

export const Container = styled.div`
  height: 100vh;
  flex: 1;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Bg = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(255, 255, 255, 0)
  );
`;

export const Form = styled.form`
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input:nth-child(2) {
    margin-top: var(--spacing-medium);
  }
  input:nth-child(3) {
    margin-bottom: var(--spacing-medium);
  }
`;
