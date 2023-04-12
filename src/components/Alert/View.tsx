import React from "react";
import * as S from "native-base";
import Animated, { FadeInUp } from "react-native-reanimated";
import RenderIF from "../RenderIF/View";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { AlertRef } from "./model";
import { useAlert } from "./useAlert";
type Props = {};

export const alertRef = React.createRef<AlertRef>();

export default function Alert({}: Props) {
  const { alertConfig, hide } = useAlert({ alertRef });

  return (
    <RenderIF condition={alertConfig.isOpen}>
      <TouchableWithoutFeedback onPress={hide}>
        <Animated.View
          testID="alert"
          entering={FadeInUp.delay(150).duration(200)}
          style={styles.animatedStyle}
        >
          <S.Alert status={alertConfig.status}>
            <S.HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <S.HStack flexShrink={1} space={2} alignItems="center" px={3}>
                <S.Alert.Icon testID="icon-status" />
                <S.Text fontSize="md" fontWeight="medium" color="coolGray.800">
                  {alertConfig.text}
                </S.Text>
              </S.HStack>
            </S.HStack>
          </S.Alert>
        </Animated.View>
      </TouchableWithoutFeedback>
    </RenderIF>
  );
}

const styles = StyleSheet.create({
  animatedStyle: {
    margin: 50,
    position: "absolute",
    top: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

