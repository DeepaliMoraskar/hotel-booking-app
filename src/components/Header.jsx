import styled  from 'styled-components';


const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding: 1.5rem 4rem;
    border-bottom: 1px solid var(--color-grey-100);
`

export default function Header() {
  return (
    <StyledHeader>Header</StyledHeader>
  );
}
