import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";

interface Props {
  children?: ReactNode;
}

const Content = ({ children }: Props) => <Container>{children}</Container>;
export default Content;
