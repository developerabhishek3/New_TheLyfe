import { StyleSheet,Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default StyleSheet.create({
    container:{
        height:SCREEN_HEIGHT,
        width:SCREEN_WIDTH,        
        justifyContent:'center',
        alignItems:'center',
        borderColor:'red',
        borderWidth:0,
        backgroundColor:'#F6F2EF'
    },
    header:{
        height:76,
        backgroundColor:'#c29a74',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        borderColor:'red',
        borderWidth:0,
        width:'100%',  
        flexDirection:'row',
        justifyContent:'space-between',
        marginStart:10,
        marginEnd:10      
    },
    headerTxt:{
        fontSize:20,
        fontWeight:'700',
        textAlign:'center',
        color:'#FFFFFF',
        margin:20,
        marginTop:30
    },
    backStyle:{
        height:20,
        width:20,
        marginTop:36,
        margin:15
        
    },
   
    headertxtInputImg:{
        height:22,
        width:22,
        margin:10
    },
    contentView:{
        flex:1,
        width:'100%',    
        alignItems:'center',
        justifyContent:'center',
        borderColor:'red',
        borderWidth:0,
        flexDirection:'row',
        flexWrap:'wrap'
    },

    bgImgStyle:{
        height:SCREEN_HEIGHT/3.9,
        width:'90%',                     
        marginTop:16,
        alignSelf:'center',
        justifyContent:'flex-end',                    
    },
    ImgView:{
        width:'100%',             
    },
    bgImageMainStyle:{
        borderRadius:10,
        width:'99%'
    },    
    imgBottomView:{
        backgroundColor:'#FFFFFF',
        opacity:0.7,
        width:'100%',
        height:'35%',
        borderColor:'red',
        borderWidth:0
    },
        mainText:{
        fontSize:17,
        fontWeight:'700',
        paddingStart:10,
        padding:3,
        
    },
    subText:{
      flexDirection:'row',
    },
    subImgStyle:{
        height:20,
        width:20,
        margin:2
    },    
})