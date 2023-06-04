import styled from '@emotion/styled';
import background from '../../images/background.png';
import Button from '@mui/joy/Button';

export const UserCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 380px;
  height: 460px;
  background: url(${background}) no-repeat,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-position: top 28px center, center center;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 214px;
    left: 0;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const AvatarFrame = styled.div`
  position: absolute;
  left: 150px;
  top: 178px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  overflow: hidden;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  transition: transform 300ms ease;
  &:hover,
  &:focus {
    transform: scale(1.5);
  }
`;

export const AvatarThumb = styled.div`
  width: 62px;
  height: 62px;
  overflow: hidden;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;

export const Description = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowButton = styled(Button)`
  width: 196px;
  height: 50px;
  margin-top: 26px;
  margin-bottom: 36px;
  background-color: ${({ following }) =>
    following === 'true' ? '#5CD3A8' : '#EBD8FF'};
  color: #373737;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: background-color 250ms ease;

  &:active {
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25) inset;
  }

  &:hover,
  &:focus {
    background-color: ${({ following }) =>
      following === 'true' ? '#4BAF90' : '#d4b8fa'};
  }
`;
