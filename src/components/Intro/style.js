import styled from 'styled-components';

export const Paragraph = styled.p`
  max-width: 70%;
  text-align: justify;
  margin: 0 auto;
  letter-spacing: 1.25px;
  line-height: 1.75;
  margin-bottom: 24px;
  font-size: 18px;

  @media screen and (max-width: 425px) {
    max-width: 100%;
    font-size: 16px;
  }
`;

export const Info = styled.div`
  margin: 36px auto;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  max-width: 70%;
  margin: 0 auto;
  margin-bottom: 8px;

  @media screen and (max-width: 425px) {
    max-width: 100%;
    font-size: 16px;
  }
`;

export const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #145c8d;
  text-align: left;
  min-width: 125px;

  @media screen and (max-width: 425px) {
    min-width: 100px;
    font-size: 16px;
  }
`;

export const InfoContent = styled.div`
  font-size: 16px;
  text-align: left;
`;

export const Signature = styled.p`
  max-width: 70%;
  margin: 0 auto;
  letter-spacing: 1.25px;
  line-height: 1.75;
  margin-bottom: 24px;
  font-size: 18px;
  text-align: right;

  & img {
    vertical-align: middle;
    margin: 0 5px;

    @media screen and (max-width: 425px) {
      max-width: 80px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 425px) {
    max-width: 100%;
    font-size: 16px;
    letter-spacing: 1px;
  }
`;
