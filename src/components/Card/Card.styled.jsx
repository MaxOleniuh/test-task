import s from "@emotion/styled";
import { css } from '@emotion/react';
export const CardWrapper = s.div `
display: flex;
align-items: center;
flex-direction: column;
width: 380px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`
export const Image = s.img `
    margin: 28px 36px 18px 36px;
`
export const Line = s.div `
width: 100%;
height: 8px;
background: #EBD8FF;
z-index: 0;
`
export const Eclipse = s.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;  
  width: 64px;
  height: 64px;
  border-radius: 50%;   
  border:8px solid #EBD8FF;
  top: 177px;
  background: #5736A3;
`;
export const TweetsTitle = s.p `
margin: 70px 0 0 0;
width: 132px;
height: 24px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`

export const FollowersTitle = s.p `
margin: 16px 0 26px 0;
width: 214px;
height: 24px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`

export const Button = s.button `
cursor: pointer;
margin-bottom: 36px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;
width: 196px;
height: 50px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3px;
border: none;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
&:hover {
    background: #e2d0f5;
}
 ${props =>
    props.isFollowed &&
    css`
      background: #5CD3A8;
      &:hover {
        background: #51ba94;
    }
    `}
`