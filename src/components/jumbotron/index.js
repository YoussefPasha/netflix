import React from 'react';

import { Pane, Image, Item, Title, SubTitle, Container, Inner } from './styles/jumbotron';

export default function Jumbotron({ children, direction, ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ ...restProps }) {
  return <Pane {...restProps} />;
};

Jumbotron.Title = function JumbotronTitle({ ...restProps }) {
  return <Title {...restProps} />;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ ...restProps }) {
  return <SubTitle {...restProps} />;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
