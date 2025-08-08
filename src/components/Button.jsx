// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Button(props) {
  return <button 
  css={css
    `padding: 16px;
    display:block;
    align-self: center;
    background-color:${props.bgcolor};
    border-radius: 4px;
    color: white;
    font-size: 16px;
    border: none;
    width: 171.19px;
    margin: 0 auto 40px auto;
    `}>
        Large
    </button>;
}

