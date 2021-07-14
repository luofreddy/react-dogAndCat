/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
const IconBlock = styled.div`
  display: inline-block;
  font-size: xx-large;
  color: #704e1d;
  cursor: pointer;
  margin-left: 1rem;
  :hover{
    color: #462e0d;
  }
`
const Btn = ({Icon}) => {
  return (
  <IconBlock>
    <Icon/>
  </IconBlock>
    
    
  );
};

export default Btn;