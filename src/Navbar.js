import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import color from "./color";

const spin = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${color.primary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          display: inline-block;
          animation: 1s ${spin} linear infinite;
          font-size: 60px;
          &:hover {
            animation: 1s ${spin} linear infinite reverse;
          }
        `}
      >
        🐼
      </span>
    </header>
  );
};

export default NavBar;
