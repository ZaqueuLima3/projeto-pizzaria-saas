import styled from "styled-components";
import { Input } from "@rocketseat/unform";

const FormInput = styled(Input).attrs({
  autocomplete: "off"
})`
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  padding-left: var(--spacing-small);
  padding-right: var(--spacing-small);
  margin-bottom: var(--spacing-small);

  background-color: var(--color-white);
  border-radius: var(--radius-small);
  color: var(--color-lighter);
  border: 1px solid transparent;
  font-size: var(--size-small);

  transition: border-color 200ms linear;

  &::placeholder {
    font-weight: bold;

    color: var(--color-lighter);
  }

  &:focus,
  &:hover {
    border: 1px solid var(--color-third);
  }
`;

export default FormInput;
