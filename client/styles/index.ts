import NextLink from "next/link";
import styled from "styled-components";

export const Link = styled(NextLink)({
  textDecoration: "none",
});

const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
