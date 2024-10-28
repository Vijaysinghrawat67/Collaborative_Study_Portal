import React from 'react'

function ProfileDropdown({handleLogout}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const onLogout = () => {
      if (window.confirm("Are you sure you want to log out?")) {
        handleLogout();
      }
    };
  
    return (
      <div className="relative">
        <button onClick={toggleDropdown} className="text-gray-800">
          Profile
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              My Profile
            </Link>
            <button
              onClick={onLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }


export default ProfileDropdown