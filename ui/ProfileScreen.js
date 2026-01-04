import React, {useState} from 'react';
import {Text, View,Image} from 'react-native';
import { TextInput } from 'react-native';
import { ScrollView,TouchableOpacity,Pressable} from 'react-native';
import { Mail,Shield,SquarePen,Bell,LogOut } from 'lucide-react-native';
import { Settings,BadgeQuestionMark,Lock } from 'lucide-react-native';
import styles from './Profile';


function Profiles(){
  const [isExpanded, setIsExpanded] = useState(false);
  return(
    <ScrollView>
      <View nativeID='profileDetail'
        style={[styles.headerContainer,styles.whiteText]}>
        <Image style={styles.profileImage}
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
        />

        <Text style={styles.whiteText}>User</Text>
        <Text style={[styles.whiteText,{fontSize: 12}]}>user@gmail.com</Text>
        <Text style={
          { color : 'white',
            backgroundColor: '#fffafa33',
            borderRadius: 5,
            paddingLeft: 10,
            paddingRight:10,
            fontSize: 12}
          }>User</Text>
      </View>

      <View nativeID='profileUser' style={styles.fillBorder}>
        <Text style={{margin : 10}}>Personal Imformation</Text>
        <View style={[styles.fillBorderInfo]}>
          <View style= {{margin: 5, borderRadius: 5, backgroundColor : '#13bde733',}}>
            <Mail color={'#13bde7'} strokeWidth={2} size={20} style={{margin: 5,}}/>
          </View>
          <View style={{padding: 5}}>
            <Text style={{fontSize: 12}}>Email</Text>
            <Text>user@gmail.com</Text>
          </View>
        </View>

        <View style={styles.fillBorderInfo}>
          <View style={{backgroundColor: '#ed45d688',margin: 5,borderRadius: 5,}}>
            <Shield color={'#ed45d6'} strokeWidth={2} size={20} style={{margin: 5,}}/>
          </View>
          <View style={{padding: 5}}>
            <Text style={{fontSize: 12}}>Role</Text>
            <Text>User</Text>
          </View>
        </View>
        <View>
        <TouchableOpacity style={[styles.rowItem,
          {justifyContent: 'center',backgroundColor: '#d6d6d6',margin: 10,borderRadius: 5}
        ]}>
          <SquarePen style={{color: 'black', strokeWidth:2,}}/>
          <Text style={{ color: 'black', marginLeft: 10 }}>Edit Profile</Text>
        </TouchableOpacity>
        </View>

      </View>
      
      

      <View nativeID='setting' style={styles.fillBorder}>
        <Text>Settings</Text>
        <TouchableOpacity style={[styles.rowItem,
        ]}>
          <Bell style={styles.icon}/>
          <Text style={{ color: 'black', marginLeft: 10 }}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.rowItem,
        ]}>
          <Settings style={styles.icon}/>
          <Text style={{ color: 'black', marginLeft: 10 }}>Managerment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.rowItem,
        ]}>
          <BadgeQuestionMark style={styles.icon}/>
          <Text style={{ color: 'black', marginLeft: 10 }}>Help & Support</Text>
        </TouchableOpacity>
      </View>

      <View nativeID='changePass' style={styles.fillBorder}>
        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
          <Text>Change Password</Text>
          <Pressable
            // Sự kiện khi nhấn vào
            onPress={() => setIsExpanded(!isExpanded)}
          >
            <Text style={{color: '#007AFF',}}>{!isExpanded ? 'Change' : 'Cancel'}</Text>
          </Pressable>
        </View>
        <View
          style={{
            borderBottomColor: 'black', // Màu của đường gạch
            borderBottomWidth: 1,       // Độ dày của đường gạch
            marginVertical: 10,         // Khoảng cách trên và dưới đường gạch
          }}
        />
        {isExpanded &&(
          <View style={styles.fillBorder}>
            <View>
              <Text>Current Password</Text>
              <View style={[{flexDirection:'row', alignItems: 'center'},styles.input]}>
                <Lock style={[styles.icon,{alignContent:'center',justifyContent: 'center'}]}></Lock>
                <TextInput placeholder="Input current password"/>
              </View>
              
              <Text>New Password</Text>
              <View style={[{flexDirection:'row', alignItems: 'center'},styles.input]}>
                <Lock style={[styles.icon,{alignContent:'center',justifyContent: 'center'}]}></Lock>
                <TextInput placeholder="Input new password"/>
              </View>

              <Text>Confirm New Password</Text>
              <View style={[{flexDirection:'row', alignItems: 'center'},styles.input]}>
                <Lock style={[styles.icon,{alignContent:'center',justifyContent: 'center'}]}></Lock>
                <TextInput placeholder="Input confirm new password"/>
              </View>

              <TouchableOpacity style={[styles.rowItem,
                {justifyContent: 'center',backgroundColor: '#007AFF',margin: 10,borderRadius: 5}
              ]}>
                <Text style={{ color: 'white', marginLeft: 10 ,}}>Update Password</Text>
              </TouchableOpacity>
            </View>
            
          </View>   
        )
        }
      </View>
      <TouchableOpacity style={[styles.rowItem,
        {justifyContent: 'center',backgroundColor: '#FF3B30',margin: 10,borderRadius: 5}
        ]}>
        <LogOut color='white' strokeWidth='1' />
        <Text style={{ color: 'white', marginLeft: 10 ,}}>Logout</Text>
      </TouchableOpacity>
        
    </ScrollView>
  );
};

export default Profiles;