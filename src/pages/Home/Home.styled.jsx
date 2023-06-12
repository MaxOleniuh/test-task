import s from "@emotion/styled";
import background from "../../images/background.jpg"
export const Title = s.h1 `
    background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff8a00),
    to(#e52e71)
  );
  background: linear-gradient(176deg, #0075c9, #76c2b6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
`
export const Image = s.img`
    width: 100%;
    heigth: 100%;
`
export const HomeWrapper = s.div`
background-image: url(${background});
`