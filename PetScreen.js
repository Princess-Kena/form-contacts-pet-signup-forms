import React from 'react';
import {FlatList, View} from 'react-native'
import Pet from './Components/Pet';
import lad from './assets/lad.jpg';
import luc from './assets/luc.jpg';
import pris from './assets/pris.jpg'


const PetScreen = () => {
    const Pets=[
        {imgUrl: lad, name: "Bailey", type:"Dog", age:"2 months", location:"Spintex", number:2345, },
        { imgUrl: luc, name: "Cooper", type:"Dog", age:"1 year", location:"Tesano",number:3455},
        { imgUrl: pris, name: "Bellar", type:"Cat", age:"6 months", location:"Legon",number:3455}

    ]
    return (
        <View>
            <FlatList
            data={Pets}
            renderItem={({item})=>{
             return < Pet name={item.name}
              type={item.type} 
              age={item.age} 
              photo={item.imgUrl}
              location={item.location} />   
            }
        }
        keyExtractor={(item)=>item.number}
            />
           
        </View>
    );
}

export default PetScreen;
