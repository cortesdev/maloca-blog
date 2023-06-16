
const ColorsMenu = ({
    handleColorChange,
    handleShow,
    show,
    selectedColor,
    colorMap
}) => {

    return (
        <div>
            <div className="dropdown">
                <div
                    onClick={handleShow}
                    className={`cursor-pointer dropdown-selected-color bg-${selectedColor === -1 ? 'transparent' : colorMap[selectedColor].name}`}
                ></div>
            </div>

            <ul className={`dropdown-content ${show ? 'show' : 'noShow'}`}>
                {colorMap.map((color, index) => (
                    <li key={index} className='hover:bg-[#00000070] rounded-[10px]'>
                        <button
                            onClick={() => handleColorChange(index)}
                            className={`cursor-pointer p-3 flex gap-4 items-center dropdown-option ${selectedColor === index ? 'selected' : ''}`}
                        >
                            <div
                                style={{ backgroundColor: `#${color.name}` }}
                                className={` rounded-[8px] w-[30px] h-[30px] dropdown-color flex `}>
                            </div>

                            <p style={{ color: `#${color.name}` }}>
                                #{color.name}
                            </p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


// <li>
// <button
//     onClick={() => handleColorChange('#0077ff70')}
//     className={`flex dropdown-option ${selectedColor === '#0077ff70' ? 'selected' : ''}`}
// >
//     <div className={`dropdown-color bg-[#0077ff70]`}>
//     </div>
//     #0077ff70
// </button>

// </li>

export default ColorsMenu;
