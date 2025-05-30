import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUser } from "react-icons/hi2";

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.8rem;
`;

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    text-align: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3rem;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-600);
  }
`;

export default function MainNav() {
  return (
    <nav>
      <StyledNavList>
        <li>
          <StyledLink to="/Dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/Bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/Cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/Users">
            <HiOutlineUser />
            <span>Users</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/Settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledLink>
        </li>
      </StyledNavList>
    </nav>
  );
}
