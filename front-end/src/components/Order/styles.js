import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: var(--size-small);
  border-radius: var(--radius-medium);
  margin-top: var(--size-small);
  box-shadow: 1px 2px 35px 1px var(--color-lighter);
`;

export const HeaderOrder = styled.div`
  padding-bottom: var(--size-small);
  border-bottom: 1px solid var(--color-lighter);
`;

export const TitleOrder = styled.h3`
  font-size: var(--size-medium);
  padding-bottom: var(--spacing-small);
`;

export const TimeOrder = styled.div`
  font-size: var(--size-base);
`;

export const PriceOrder = styled.div`
  font-size: var(--size-medium);
  font-weight: bold;
  padding-top: var(--spacing-small);
`;

export const BodyOrder = styled.div`
  flex: 1;
  min-height: 150px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-lighter);
`;

export const FooterOrder = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  p {
    color: var(--color-base);
    font-size: var(--size-small);

    span {
      font-weight: bold;
    }
  }
`;
