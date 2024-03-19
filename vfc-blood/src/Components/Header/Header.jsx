import React from "react";
import "./Header.scss";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-div">
      <Text
        fontSize={"3xl"}
        onClick={() => {
          navigate("/");
        }}
      >
        VFC BLOOD
      </Text>

      <AiOutlineLogin  className="login-icon" />
    </div>
  );
}

export default Header;
