import {useState} from "react";

function  useHeader(){
    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return {value,isHovered,isOpen,setIsHovered,setIsOpen,setValue}

}
export  default useHeader;
