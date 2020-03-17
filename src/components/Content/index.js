import React from 'react';
import { StyledContent } from './styles';
import Menu from './Components/Menu/index';
import Article from './Components/Article/index';

const Content = () => {
  return (
    <StyledContent>
      <Menu />
      <Article />
    </StyledContent>
  );
};

export default Content;