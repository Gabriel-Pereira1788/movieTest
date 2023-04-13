import React from "react";
import * as S from "native-base";
import whatsappIcon from "../../../../../../assets/images/whatsapp.png";
import twitterIcon from "../../../../../../assets/images/twitter.png";
import { TouchableOpacity } from "react-native";
import { KeysApps } from "../models";
import { useShareMovie } from "../useShareMovie";
import Alert from "../../../../../../components/Alert/View";
import { SIZES } from "../../../../../../helpers/constants/sizes";

type Props = {};

export default function ShareModal({}: Props) {
  const { handleShare } = useShareMovie();
  return (
    <>
      <Alert />
      <S.Modal.Content
        backgroundColor="rgba(15, 15, 22, 0.95)"
        p={3}
        height={SIZES.height / 3 - 50}
      >
        <S.VStack
          flex={1}
          alignItems="center"
          justifyContent="center"
          space={3}
        >
          <TouchableOpacity onPress={handleShare("TWITTER")}>
            <S.HStack space={2} alignItems="center" justifyContent="flex-start">
              <S.Image
                source={twitterIcon}
                width={35}
                height={35}
                alt="icon-instagram"
              />
              <S.Text color="#aaaaaa" fontWeight={500} fontSize="2xl">
                Twitter
              </S.Text>
            </S.HStack>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShare("WHATSAPP")}>
            <S.HStack space={2} alignItems="center">
              <S.Image
                source={whatsappIcon}
                width={35}
                height={35}
                alt="icon-whatsapp"
              />

              <S.Text color="#aaaaaa" fontWeight={500} fontSize="2xl">
                Whatsapp
              </S.Text>
            </S.HStack>
          </TouchableOpacity>
        </S.VStack>
      </S.Modal.Content>
    </>
  );
}

