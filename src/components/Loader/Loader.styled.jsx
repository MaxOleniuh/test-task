import s from "@emotion/styled"
export const LoaderWrapper = s.div `
     position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background-color: rgba(255,255,255,0.7);
`