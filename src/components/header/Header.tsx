import Login from "./Login";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between w-full">
      <Logo />

      <h1 className="text-gradient text-6xl">Top Practices</h1>

      <Login />
    </header>
  );
};
export default Header;
