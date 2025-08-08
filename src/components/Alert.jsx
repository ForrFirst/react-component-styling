// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Alert(props) {
    return <button 
    css={css
      `padding: 20px;
      display: flex;
      background-color:${props.bgcolor};
      border-radius: 4px;
      color: #444444;
      font-size: 16px;
      border: none;
      width: 650px;
      margin-bottom: 40px;
      font-weight: 700;
      justify-content: start;
      `}>
          {props.text}
      </button>;
}
