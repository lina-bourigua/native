import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const ItemContainer = ({imageSrc, title, location,onPress}) => {
  return (
   <TouchableOpacity 
        className="rounded-md border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[180px] my-2"
        onPress={() => {onPress()}}
    >
        <Image
            source={imageSrc} 
            className="rounded-md object-cover w-full h-40"
        />
        <Text className="text-[#428288] text-[18px] font-bold">{title}</Text>
        <View className="flex-row items-center space-x-1 ">
            <FontAwesome name="map-marker" size={20} color="#8597A2" />
            <Text className="text-[#428288] text-[14px] font-bold" >{location}</Text>
        </View>
   </TouchableOpacity>
  )
}

export default ItemContainer

const styles = StyleSheet.create({})