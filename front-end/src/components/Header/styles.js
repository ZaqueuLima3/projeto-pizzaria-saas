import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: var(--color-primary);
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const LogoTitle = styled.p`
  font-size: var(--size-medium);
  font-weight: bold;
  margin-left: var(--spacing-medium);
`;

export const AdminInfos = styled.div`
  display: flex;
  color: white;
`;
export const Admin = styled.div`
  text-align: right;
  border-right: 1px solid var(--color-lighter);
  padding-right: var(--spacing-medium);
  color: white;
`;

export const AdminName = styled.p`
  font-size: var(--size-medium);
  font-weight: bold;
`;

export const Bag = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: var(--spacing-medium);
  background: var(--color-secondary);
  border-radius: 20px;
`;

export const NewOrder = styled.div`
  height: 12px;
  width: 12px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 6px;
  background: #ff0;
`;
