import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

export default function IconImage({source, size, round, style, ...rest}) {
  return (
    <Image source={source} size={size} round={round} style={style} {...rest} />
  );
}

const Image = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => (props.round ? props.size / 2 : 0)}px;
`;

IconImage.propTypes = {
  source: PropTypes.object.isRequired,
  size: PropTypes.number,
  round: PropTypes.bool,
};

IconImage.defaultProps = {
  size: 24,
  round: false,
};
