import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        padding: 80,
        height: 300,
        backgroundColor: '#1f80ff',
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50, // Làm ảnh tròn
      borderColor : '#a5a9e3',
      borderWidth: 2,
      marginBottom: 10,
    },
    whiteText: {
      color: 'white',
      fontSize: 16,
    },
    fillBorder: {
        backgroundColor: 'while',
        margin : 5,
        borderRadius: 10,
        borderWidth : 2,
        borderColor : '#d6d6d6',
    },
    fillBorderInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#d6d6d644',
        borderRadius: 5,
        margin: 10,
    },
    infoSection: {
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#f2f2f2',
      margin: 10,
      padding: 10,
    },
    sectionTitle: {
      fontWeight: 'bold',
      marginBottom: 10,
      fontSize: 18,
    },
    rowItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      padding: 5,
      height: 40,
    },
    icon:{
      color: '#d6d6d6',
      strokeWidth:2,
      size:16
    },
    iconWrapper: {
      margin: 5,
      borderRadius: 8,
      backgroundColor: '#13bde733',
      padding: 5,
    },
    input: {
      height: 50,
      borderColor: '#d6d6d644',
      borderWidth: 1,
      margin: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    }
  });
  
export default styles;