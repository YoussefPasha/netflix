import React from "react";
import {
  Pane,
  Image,
  Item,
  Title,
  SubTitle,
  Container,
  Inner,
} from "./styles/jumbotron";
export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item direction={direction}>
      <Inner>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ ...restProps }) {
  return <Pane {...restProps}></Pane>;
};

Jumbotron.Title = function JumbotronTitle({ ...restProps }) {
  return <Title {...restProps}></Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ ...restProps }) {
  return <SubTitle {...restProps}></SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
