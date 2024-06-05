import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function Header() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href='https://flowbite-react.com'>
        <img
          src='https://media0.giphy.com/media/Dwv8Wl7vI1JUuOektL/giphy.gif?cid=6c09b952x6hnij1dfkt64jbuf8zpx3v426vavnvf92t0cfs1&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'
          className='mr-3 h-6 sm:h-9'
          alt='Todo App Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          DailyDone
        </span>
      </NavbarBrand>
      <div className='flex md:order-2'>
        <Button>Sign In</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href='#' active>
          Home
        </NavbarLink>
        <NavbarLink href='#'>About</NavbarLink>
        <NavbarLink href='#'>Services</NavbarLink>
        <NavbarLink href='#'>Pricing</NavbarLink>
        <NavbarLink href='#'>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
