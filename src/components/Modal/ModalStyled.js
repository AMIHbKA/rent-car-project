import styled from 'styled-components';

export const CloseIcon = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.3529"
        d="M24 8l-16 16M8 8l16 16"
      ></path>
    </svg>
  );
};

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(62 133 243 / 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1200;
`;

export const ModalStyled = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease, transform 0.3s ease;

  &.modal-open {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CloseButton = styled(CloseIcon)`
  content: '';
  position: absolute;
  top: 14px;
  right: 14px;
  background-size: contain;
  background-repeat: no-repeat;
  stroke: #3470ff;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme?.breakpoints?.tablet || '768px'}) {
    top: 18px;
    right: 18px;
  }

  &:hover {
    stroke: #0b44cd;
  }
`;
