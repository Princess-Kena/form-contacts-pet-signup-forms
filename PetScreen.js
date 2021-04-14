import React from 'react';
import {FlatList, View} from 'react-native'
import Pet from './Components/Pet';


const PetScreen = () => {
    const Pets=[
        {name: "Bailey", type:"Dog", age:"2 months", location:"Spintex", number:2345},
        {name: "Cooper", type:"Dog", age:"1 year", location:"Tesano",number:3455},
        {name: "Bellar", type:"Cat", age:"6 months", location:"Legon",number:3455}

    ]
    return (
        <View>
            <FlatList
            data={Pets}
            renderItem={({item})=>{
             return < Pet name={item.name}
              type={item.type} 
              age={item.age} 
              location={item.location} />   
            }
        }
        keyExtractor={(item)=>item.number}
            />
           
        </View>
    );
}

export default PetScreen;
