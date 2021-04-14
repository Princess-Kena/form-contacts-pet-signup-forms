import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';


export default class LoginScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.Container} showsVerticalSrollIndicator={false} >
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Log in</Text>
                </View>
                <View>
               <TextInput 
               placeholder='Username'
               placeholderTextColor='#aaaaaa'
                style={styles.username}/>
               <TextInput 
               placeholder='Password' 
               placeholderTextColor='#aaaaaa'
               secureTextEntry={true}
               style={styles.username}/>

               <Text style={styles.fpassword}>Forgot password?</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.loginButton}> 
                        <Text style={styles.loginBottomText} >Log in</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dont}>
                    <Text >Don"t have an account?</Text>
                    <Text style={styles.signup}>Sign up</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles =StyleSheet.create({
loginContainer:{
    marginVertical:30
},
loginText: { 
    color:'#6308d1',
    fontSize: 40,
    marginLeft:40,
    marginBottom:20,
},
username:{
    fontSize:18,
    marginHorizontal: 40,
    borderBottomWidth:3,
    borderBottomColor:"#6308d1",
    height:50, marginTop:25
},
fpassword:{
    alignSelf: 'flex-end',
    marginTop:15,
    color:'#3448fa',
    marginRight:41,
    
},
loginButton:{
justifyContent:'center',
alignItems:'center',
height:50,
backgroundColor:'#6308d1',
marginVertical:60,
borderRadius:10,
marginHorizontal:30,

},
loginBottomText:{
color:'white',
fontSize: 20
},
dont:{
flexDirection:'row',
marginHorizontal:70
},
signup:{
    color :'#6308d1',
    marginLeft:5
}
})
