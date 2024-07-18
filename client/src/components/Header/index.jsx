//import { CloseSVG } from "../../assets/images"; 
//import MegaMenu1 from "../MegaMenu1";
//import { Img, SelectBox, Input, Text } from "./..";
import React, { useState } from 'react';
const dropDownOptions = [
    { label: "Option1", value: "option1" }, 
    { label: "Option2", value: "option?" },
    { label: "Option3", value: "option3" },
] ;
const Header = ({...props }) =>{
    const [searchBarValue, setSearchBarValue] = useState ('');
    const [menuOpen, setMenuOpen] = useState(false);

return(
    <header {...props} className={'${props,className) relative'}> 
        <div className="flex w-full flex-col items-center">
            <div className="flex justify-center self-stretch bg-gray-100 py-[30px] sm:py-5">
                <div className="container-xs flex items-center justify-between gap-5 md: flex-col md:p-5">
                    <div className="flex">
                        <ul className="flex items-center gap-7 sm:flex-col">
                            <li>
                                <a href="#">
                                    <Text as="p" className="tracking-I-0.18px]">
                                        TRANG CHỦ
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Text as="p" className="tracking-I-0.18px]">
                                        VỀ CHÚNG TÔI
                                    </Text>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
)
}
export default Header;