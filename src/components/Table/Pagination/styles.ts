import styled from 'styled-components';

export const PaginationWrapper = styled.nav`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding-right: 8px;
  padding-left: 8px;
  width: 100%;
`;

export const PageList = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  white-space: nowrap;
`;

export const Button = styled.button`
  position: relative;
  display: block;
  user-select: none;
  border: none;
`;

const Span = styled.span`
  flex-shrink: 1;
  user-select: none;
`;

export const Range = styled(Span)`
  margin: 0 24px;
`;
