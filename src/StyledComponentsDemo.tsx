import React, { FC } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`

const Button = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`

const Demo: FC = () => {
  return (
    <div>
      <p>styled components demo</p>
      <Wrapper>
        <Title>Hello World, this is my first styled component!</Title>
        <Button>Normal Button</Button>
        <Button $primary>Primary Button</Button>
      </Wrapper>
    </div>
  )
}

export default Demo
