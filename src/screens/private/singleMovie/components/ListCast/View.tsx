import React from "react";
import { Cast } from "../../../../../models/Itmdb";
import CardCast from "../CardCast/View";
import { FlatList } from "react-native-gesture-handler";

interface ListCastProps {
  cast?: Cast[];
}

export default function ListCast({ cast }: ListCastProps) {
  const displayCast =
    cast && cast.length > 0 ? cast.filter((data) => !!data.profile_path) : [];
  return (
    <>
      {displayCast.length > 0 && (
        <FlatList
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          horizontal={true}
          data={displayCast}
          contentContainerStyle={{
            flexGrow: 1,
            height: "auto",
            width: "auto",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            padding: 20,
          }}
          renderItem={({ item }) => <CardCast {...item} />}
        />
      )}
    </>
  );
}

