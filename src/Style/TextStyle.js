import styled from 'styled-components';

export const LogoGreen = styled.div`
  font-size: 40px;
  color: black;
  font-family: 'poppins', 'sans-serif';
  font-weight: 600;
`;

export const LogoWhite = styled.div`
  font-size: 40px;
  color: white;
  font-family: 'poppins', serif;
  font-weight: 600;
`;

export const LabelWhite = styled.div`
  font-size: 18px;
  color: black;
  font-family: 'poppins', serif;
  font-weight: 500;

  a,
  button {
    color: black;
    text-decoration: none;
    background: none;
    border: none;
    font-size: inherit;
    font-family: 'poppins', serif;
    font-weight: inherit;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus,
    &[data-state='open'] {
      color: #c0392b;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 2px;
      outline: none;
    }
  }
`;

export const LabelHederSection = styled.div`
  font-size: 40px;
  color: black;
  font-family: 'poppins', 'sans-serif';
  text-transform: capitalize;
  font-weight: 600;
`;

export const LabelHederGardianSection = styled.div`
  font-size: 40px;
  font-family: 'poppins', 'sans-serif';
  font-weight: 600;
  background: linear-gradient(to right, #c0392b, #000000, #005307);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Label_White = styled.div`
  font-size: 22px;
  color: white;
  font-family: 'poppins', serif;
  font-weight: 400;
`;

export const Label_Black = styled.div`
  font-size: 22px;
  color: black;
  font-family: 'poppins', serif;
  font-weight: 500;
`;

export const Label_BlackBold = styled.div`
  font-size: 24px;
  color: black;
  font-family: 'poppins', serif;
  font-weight: 600;
`;

export const TextSmall = styled.div`
  font-size: 20px;
  color: black;
  font-family: 'poppins', serif;
  font-weight: 400;
`;

export const TextSmallWhite = styled.div`
  font-size: 20px;
  color: white;
  font-family: 'poppins', serif;
  font-weight: 400;
`;

export const TextSmallBlack = styled.div`
  font-size: 20px;
  color: black;
  font-family: 'poppins', serif;
  font-weight: 500;
`;

export const TextExtraSmallBlack = styled.div`
  font-size: 17px;
  color: black;
  font-family: 'poppins', serif;
  font-weight: 400;
`;

export const TextExtraExtraSmallBlack = styled.div`
  font-size: 15px;
  color: black;
  font-family: 'poppins', serif;
  font-weight: 400;
`;
