import s from "@emotion/styled";
import { css } from '@emotion/react';
export const CardWrapper = s.div `
display: flex;
align-items: center;
flex-direction: column;
margin: 0 auto;
margin-top: 100px;
max-width: 380px;
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
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
z-index: 0;
`
export const Avatar = s.img `
    position: absolute;
    top: 278px;
`
export const CardAvatar = s.img `
    border-radius: 50%;
    position: absolute;
    top: 8.5px;
`
export const Eclipse = s.div`
    position: absolute;
    top: -5px;
    right: 50%;
    transform: translate(50%,-50%);
    width: 80px;
    height: 80px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ebd8ff;
    box-shadow: 0 4.39163px 4.39163px #0000000f, inset 0 -2.19582px 4.39163px #ae7be3, inset 0 4.39163px 3.29372px #fbf8ff;
    border-radius: 50%;
`
export const AvatarWrapper = s.div `
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const TweetsTitle = s.p `
margin: 70px 0 0 0;
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
width: 220px;
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