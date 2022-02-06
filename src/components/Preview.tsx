import React from "react";
import { useRunner, UseRunnerProps } from "react-runner";
import { styled } from "@storybook/theming";

const Error = styled.pre`
  background: #fcc;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 1rem;
  color: #f00;
  white-space: pre-wrap;
`;

export const Preview = (props: UseRunnerProps) => {
  const { element, error } = useRunner(props);

  return (
    <>
      {element}
      {error && <Error>{error}</Error>}
    </>
  );
};
