import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setPropTypes } from 'recompose';
import { darken, transitions } from 'polished';

const enhance = setPropTypes({
  children: PropTypes.node.isRequired,
});

const StyledLink = styled(Link)`
  ${transitions('all 0.2s ease-in')}
  text-decoration: none;
  padding: 5px;
  :hover {
    background-color: lavender;
    color: ${darken(0.4, 'lavender')};
  }
`;

const LinkComponent = enhance(({ children }) => <StyledLink to="/">{children}</StyledLink>);

export default LinkComponent;
