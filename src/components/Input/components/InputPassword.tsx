import React from "react";
import Input, { InputProps } from "../View";

import { TouchableOpacity } from "react-native";
import RenderIF from "../../RenderIF/View";
import { useVisible } from "../../../helpers/hooks/useVisible";

import { Ionicons } from "@expo/vector-icons";

export default function InputPassword({ ...rest }: InputProps) {
  const { visible, toggleVisible } = useVisible();

  const EyeIcon = (
    <TouchableOpacity style={{ marginEnd: 10 }} onPress={toggleVisible}>
      <RenderIF
        condition={visible}
        AlternativeComponent={
          <Ionicons name="eye-off" size={20} color="#ddd" />
        }
      >
        <Ionicons name="eye" size={20} color="#ddd" />
      </RenderIF>
    </TouchableOpacity>
  );

  return (
    <Input
      {...rest}
      type={visible ? "text" : "password"}
      rightElement={EyeIcon}
    />
  );
}

