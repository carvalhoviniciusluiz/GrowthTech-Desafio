import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50vh;
`;

export const LoadingIcon = styled(AiOutlineLoading3Quarters).attrs({
  size: 60,
})`
  color: #ff8200;
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
