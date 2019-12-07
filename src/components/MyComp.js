import React from 'react';
import type { ComponentType, Node } from 'react';

type MyCompProps = {
  name: string,
  age?: number,
  children: React.node
}

MyComp.defaultProps = {
  name: "Caroline",
  children: <div>default children</div>
}

function MyComp(props:MyCompProps) {
  return (
    <div>{props.children}</div>
  )
};

export default MyComp;
