export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white fixed w-full top-0 shadow-md z-10">
      <h1 className="text-2xl font-bold">Akshit.</h1>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}
