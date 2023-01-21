import styled from "styled-components";
import React from "react";

const Button = () => <button>Package Button</button>;

export default styled(Button)`
  color: red;
  border-radius: 4px;
  font-weight: 400;
`;
