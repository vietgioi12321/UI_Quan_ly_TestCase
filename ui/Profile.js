import React from 'react';
import {Text, View,Image,TextInput} from 'react-native';
import { ScrollView } from 'react-native';
import { Lucide } from '@expo/vector-icons';
import { Camera,Mail,Shield } from 'lucide-react-native';

function ProfileScren(){
  return (
    <ScrollView>
      <View style={{
        alignItems: 'center',
        padding: '100', 
        backgroundColor: '#1f80ff'}}
      >
        <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
        }}
        style={{ width: 100, height: 100, }}
        />

        <Text style={{ color: 'white' }}>Name User</Text>
        <Text style={{ color: 'white' }}>Email User</Text>
        <Text style={{ color: 'white' }}>User</Text>
      </View>
      <View style={{
        borderRadius : 10,
        borderWidth : 2,
        borderColor : '#f2f2f2',
        marginLeft : 10,}}>
        <Text>Personal Imformation</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          borderRadius : 10,
          borderWidth : 2,
          backgroundColor: '#eef2f6',
          borderColor : '#eef2f6',
          alignItems: 'center',
        }}>
          <View style= {{
            margin: 5,
            borderRadius: 8,
            backgroundColor : '#13bde733',
            }}>
            <Mail color={'#13bde7'} strokeWidth={2} size={20} 
            style={{
              margin: 5,
            }}/>
          </View>
          <View style={{
            padding: 5}}>
            <Text>Email</Text>
            <Text>Tên Email</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row'
        }}>
          <Shield color={'#ed45d6'} strokeWidth={2} size={16} />
          <View>
            <Text>Role</Text>
            <Text>User</Text>
          </View>
        </View>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default ProfileScren;