import React from 'react';
import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 10%;
`;

const Spinner = ({ isLoading, color, size }) => {
  return (
            <MoonLoader loading={isLoading} css={override} size={size} color={color} />

  );
};

export default Spinner;
