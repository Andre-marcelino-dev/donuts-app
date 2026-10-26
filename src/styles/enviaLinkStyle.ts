import {StyleSheet} from "react-native"
import { cores } from "./variaveis";
import { fontes} from "./variaveis";

const enviaLinkStyle = StyleSheet.create({

sobrepor:{
 flex:1,
 backgroundColor:cores.chocolate,
 justifyContent:'center',
 alignItems:'center',
 padding:20,
},

conteudo:{
    width: '100%',
    height:'90%',
    backgroundColor:cores.branco,
    borderRadius:20,
    padding:20,
    alignItems:'center',
    

},

titulo:{

    fontSize:fontes.fonttitulo,
    fontWeight:'bold',
    textAlign:'center',
    color:cores.chocolate,

},

btnEntendi:{
    backgroundColor:cores.rosa,
    borderRadius:10,
    padding:10,
    width:"50%",
    height:50,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
},

txtEntendi:{
    fontSize:15,
    color:cores.chocolate,
    fontWeight:'bold',
},

scroll:{
    marginVertical:20,
    
    
},

subtitulo:{
    fontSize:18,
    color:cores.rosa,
    marginVertical:10,
},

texto:{
    fontSize:15,
    color:cores.cinza,
    lineHeight:20,
    textAlign:'justify',
}

});

export default enviaLinkStyle;