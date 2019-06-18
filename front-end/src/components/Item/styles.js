import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-right: 15px;

  border: 1px solid var(--color-lighter);
  border-radius: var(--radius-small);
`;

export const Img = styled.img`
  height: 60px;
  width: 60px;
`;

export const Descriptions = styled.div`
  margin-left: var(--spacing-small);
`;

export const Title = styled.p`
  font-size: var(--size-small);
  margin-bottom: 5px;
`;

export const SubTitle = styled.p``;
