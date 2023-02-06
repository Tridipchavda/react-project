
function Header() {

  return (
    <div className="flex justify-between  bg-blue-200">
      <div className="logoAndName flex place-items-center">
        <b className="text-3xl text-blue-800 mx-5"> Post Wall</b>
      </div>
      <ul className="justify-end text-xl space-x-li flex text-blue-700">
          <li className=" py-5 px-7 cursor-pointer">Home</li>
          <li className="py-5 px-7 cursor-pointer">About</li>
          <li className="py-5 px-7 cursor-pointer">Help</li>
          <li className="py-5 px-7 cursor-pointer">Contact Us</li>
      </ul>

    </div>
  );
}

export default Header;