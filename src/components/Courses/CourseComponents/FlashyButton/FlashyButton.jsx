

{/* PopUp from with right handside */}
import React, { useState } from "react";
import PopUpForm from "../../../Forms/PopUpForm/PopUpForm"; // Ensure correct path

export default function FlashyButton() {
  const [showForm, setShowForm] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <div className="relative"> 
    <div className="fixed top-[70%] left-[-35px] z-50"> {/* Fixed position */}
      {/* Flashy Button */}
      <button
        className={`transition-all duration-500 bg-orange-500 rounded-lg
         hover:scale-110 text-white  shadow-lg font-bold text-lg
         animate-pulse py-1 px-2 transform -rotate-90`  }
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
       
      >
        Contact us!
      </button>

      {/* Popup Form */}
      {showForm && (
        <PopUpForm
          isOpen={showForm}
          onClose={closeForm}
          title={"Request Callback"} // You can customize this title
        />
      )}
    </div>
    </div>

  );
}


