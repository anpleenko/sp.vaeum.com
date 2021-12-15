import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background: #fff;
  height: 40px;
  border-bottom: 1px solid #eee;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const LogoStyled = styled.span`
  float: left;
  height: 20px;
  background: #333;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  color: #fff;
  padding: 0 10px;
  border-radius: 30px;
  font-size: 13px;
  line-height: 20px;
`;
