import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import styled from 'styled-components'

const LogoWrapper = styled.figure`
  display: flex;
  align-items: center;

  margin: 0;
  padding: 0;

  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 160px;
  height: auto;

  object-fit: contain;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 130px;
  }

  @media (max-width: 480px) {
    width: 110px;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to ='/'><LogoImg src={logo} alt='Logo do Task Flow'/></Link>
    </LogoWrapper>
  )
}

export default Logo