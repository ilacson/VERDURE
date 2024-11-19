import { View, Text, Image } from 'react-native' 
import React from 'react' 
import { Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
    return(
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
            source={icon}
            resizeMode="contain" // Use resizeMode instead of resizeMethod
            style={{ width: 24, height: 24, tintColor: color }} // Adjust size here
        />
    </View>
    )
}
// const TabsLayout = () => {
//    return(
//     <View>
//         <Image
//         source={}
//         />
//     </View>
//    )

// }
const TabLayout  = () =>{
    return (
        <>
        <Tabs>
        <Tabs.Screen
             name="home" 
             options={{
                title:'Home',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    icon={icons.home}
                    color={color}
                    name="Home"
                    focused={focused}
                    />
                )
             }}
            />
            <Tabs.Screen
             name="shoppingbag" 
             options={{
                title:'Shop',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    icon={icons.shoppingbag}
                    color={color}
                    name="Shoppingbag"
                    focused={focused}
                    />
                )
             }}
            />
            <Tabs.Screen
             name="cart" 
             options={{
                title:'cart',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    icon={icons.mycart}
                    color={color}
                    name="Cart"
                    focused={focused}
                    />
                )
             }}
            />
            <Tabs.Screen
             name="profile" 
             options={{
                title:'Profile',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                    icon={icons.profile}
                    color={color}
                    name="Profile"
                    focused={focused}
                    />
                )
             }}
            />
             
        </Tabs>
        </>
    )
}
export default TabLayout



