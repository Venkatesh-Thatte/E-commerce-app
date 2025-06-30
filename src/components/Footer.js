const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Get to Know Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press Releases</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Make Money with Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Sell on Amazon</a>
            </li>
            <li>
              <a href="#">Affiliate Marketing</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Let Us Help You</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Returns Centre</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Amazon Clone by Venkatesh. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
