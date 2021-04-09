import React from 'react';
import {FlatList, View} from 'react-native'
import Contact from './Components/Contact';


const ContactsScreen = () => {
     const contacts =[
         {name:"Ebenezer Frimpong", number:"0553123791"},
         {name:"Isaac Asante", number:"027356500"},
         {name:"Hassana Wahab", number:"0543505030"},
         {name:"Sam George", number:"0245676745"},
         {name:"Shakana Page", number:"0554567745"},
         {name:"Theresa Yeboah", number:"0553456786"}
     ]
    return (
        <View>
         <FlatList
         data={contacts}
         renderItem={({item})=>{
             return <Contact name={item.name} phone={item.number}/>
         }
        }
        keyExtractor={(item)=>item.number}
          />  
        </View> 
    );
}

export default ContactsScreen;
