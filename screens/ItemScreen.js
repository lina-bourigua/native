import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Image1, Image2, Image3, Image4, Restaurants } from '../assets'
import { FontAwesome } from '@expo/vector-icons';

const ItemScreen = ({route, navigation}) => {
  const { itemId, otherParam } = route.params;
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <ScrollView className="flex-1 px-4 py-6 mt-8">
        <View className="relative bg-white shadow-lg">
          <Image 
            source={Image1}
            className="w-full h-80 rounded-2xl object-cover" 
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-white"
              onPress={() => navigation.goBack()}>
              <FontAwesome name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
              <FontAwesome name="heart-o" size={24} color="white" />
            </TouchableOpacity>
          </View>

        </View >

        <View className="absolute flex-row inset-x-0 bottom-15 justify-between px-6">
          <View className="flex-row space-x-2 items-center py-60">
            <Text className="text-[32px] font-bold text-gray-100">$99</Text>
            <Text className="text-[20px] font-bold text-gray-100">/person</Text>
          </View>
        </View>

        <View className="mt-6">
            <Text className="text-[#428288] text-[24px] font-bold">Something</Text>
            <View className="flex-row items-center space-x-2 mt-2">
              <FontAwesome name="map-marker" size={25} color="#8597A2" />
              <Text className="text-[#8C9EA6] text-[20px] font-bold">Doha</Text>
            </View>
        </View>

        <View className="flex-row items-center space-x-2">
          <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
            <FontAwesome name="star" size={25} color="#D58574" />
          </View>
          <View>
            <Text className="text-[#515151]">4.8</Text>
            <Text className="text-[#515151]">2k rating</Text>
          </View>

          <View className="w-12 h-12 rounded-2xl bg-green-100 items-center justify-center shadow-md">
            <FontAwesome name="cloud" size={25} color="#06B2BE" />
          </View>
          <View>
            <Text className="text-[#515151]">20°C</Text>
            <Text className="text-[#515151]">Temperature</Text>
          </View>

          <View className="w-12 h-12 rounded-2xl bg-gray-100 items-center justify-center shadow-md">
            <FontAwesome name="map-signs" size={25} color="black" />
          </View>
          <View>
            <Text className="text-[#515151]">7.2Km</Text>
            <Text className="text-[#515151]">Direction</Text>
          </View>
        </View>

        <View>
          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
          Lorem Ipsum is simply dummy text used in typesetting and layout before printing. Lorem Ipsum has been the printing industry's standard dummy text since the 1500s, when an anonymous printer pieced together chunks of text to make a specimen book of typefaces. It has not only survived five centuries, but has also adapted to computer office automation, without its content being modified. It was popularized in the 1960s through the sale of Letraset sheets containing passages of Lorem Ipsum, and more recently through its inclusion in text-layout applications, such as Aldus PageMaker.
          </Text>
        </View>

        <View>
          <TouchableOpacity className=" flex-row w-full h-20  items-center justify-center bg-[#06B2BE] mt-4 space-x-2">
            <Text className="text-[#ffffff] text-[25px] font-bold">Book now </Text>
            <FontAwesome name="long-arrow-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView> 
    </SafeAreaView>        
  )
}

export default ItemScreen

const styles = StyleSheet.create({})