import React, { Component } from 'react';
import styled from 'styled-components';

import { StyleObject } from '../../types';

interface IProps {
  style?: StyleObject;
  content: { style?: StyleObject; onClick?: React.MouseEventHandler; info?: string }[];
}

export class Menu extends Component<IProps> {
  render() {
    const { style, content } = this.props;

    return (
      <Container style={style}>
        {content.map(c => (
          <div key={c.info} className="content" style={c.style} onClick={c.onClick}>
            {c.info}
          </div>
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  position: absolute;
  background: white;
  width: 145px;
  z-index: 1000;
  border: 1px solid rgba(221, 224, 228, 0.5);
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  & .content {
    padding: 15px;
    transition: background 250ms ease-in;
    &:hover {
      background: #eeeff1;
    }
  }
`;
