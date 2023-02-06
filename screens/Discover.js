import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Attractions, Avatar, Hotels, Image1, Image2, Image3, Image4, Restaurants } from '../assets'
import MenuConatainer from '../components/MenuConatainer'
import { FontAwesome } from '@expo/vector-icons'
import ItemContainer from '../components/ItemContainer'

const Discover = ({ navigation }) => {
    return (
        <SafeAreaView className="bg-white flex-1 relative">
            <View className="flex-row items-center justify-between px-8 mt-8">
                <View>
                    <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
                    <Text className="text-[36px] text-[#527283]">the beauty today</Text>
                </View>

                <View className="h-12 w-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                    <Image
                        source={Avatar}
                        className="w-full h-full rounded-md object-cover"
                    />
                </View>
            </View>

            {/* Menu container */}
            <ScrollView>
                <View className="flex-row items-center justify-between px-8 mt-8">
                    <MenuConatainer
                        key={"hotels"}
                        title="Hotels"
                        imageSrc={Hotels}
                    // type={type}
                    // setType={setType}                    
                    />
                    <MenuConatainer
                        key={"attraction"}
                        title="Attractions"
                        imageSrc={Attractions}
                    // type={type}
                    // setType={setType}                    
                    />
                    <MenuConatainer
                        key={"restaurants"}
                        title="Restaurants"
                        imageSrc={Restaurants}
                    // type={type}
                    // setType={setType}                    
                    />
                </View>
                <View>
                    <View className="flex-row items-center justify-between px-4 mt-8">
                        <Text className="text-[28px] text-[#2C7379] font-bold">Top Tips</Text>
                        <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                            <Text className="text-[20px] text-[#A0C4C7] font-bold">Explore</Text>
                            <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                    <ItemContainer
                        key={"101"}
                        imageSrc={Image1}
                        title="Something"
                        location="Doha"
                        onPress={() => {
                            navigation.navigate('ItemScreen', {
                                otherParam: "101",
                            });
                        }}
                    />
                    <ItemContainer
                        key={"102"} 
                        imageSrc={Image2} 
                        title="Sample" 
                        location="Qatar" 
                        onPress={() => {
                            navigation.navigate('ItemScreen', {
                                otherParam: "102" ,
                            });
                        }} 
                    />
                    <ItemContainer 
                        key={"103"} 
                        imageSrc={Image3} 
                        title="Anywhere" 
                        location="Dubai" 
                        onPress={() => {
                            navigation.navigate('ItemScreen', {
                                otherParam: "103" ,
                            });
                        }} 
                    />    
                    <ItemContainer 
                        key={"104"} 
                        imageSrc={Image4} 
                        title="Sample" 
                        location="Bahrain" 
                        onPress={() => {
                            navigation.navigate('ItemScreen', {
                                otherParam: "104" ,
                            });
                        }} 
                     />
                </View>
            </ScrollView>




        </SafeAreaView>

    )
}

export default Discover

const styles = StyleSheet.create({})