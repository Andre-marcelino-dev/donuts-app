import { StyleSheet } from "react-native"
import { cores } from "./variaveis";
import { fontes } from "./variaveis";

const homeStyle = StyleSheet.create({

    header: {
        width: '80%',
        justifyContent: "center",
        margin: "auto",
        marginTop: 80,
    },
    conteudo: {
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
        width: '100%',

    },
    titulo: {

        fontSize: 30,
        fontWeight: "bold",
        color: cores.chocolate,
        textAlign: "center",
        fontFamily: fontes.titulo
    },
    bordaPerfil: {
        padding: 15,
        borderColor: cores.rosa,
        borderRadius: "50%",
        borderWidth: 2,
         backgroundColor:cores.rosaClaro,
    },
    perfil: {
        width: 50,
        height: 50,
    },
    // Quando o cliente tem foto, ela ocupa o círculo inteiro
    bordaPerfilFoto: {
        padding: 0,
        overflow: "hidden",
    },
    fotoPerfil: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    subtitulo: {
        marginTop: 10,
        fontSize: 18,
        color: cores.cinza
    },
    main: {
        width: '80%',
        margin: "auto",
        marginTop:30,
    },
    buscaPoduto: {
        width: '100%',
        height: 50,
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        flexDirection:'row'
    

    },

    txtProduto: {
        marginVertical: 'auto',
        color: cores.chocolate,
        fontSize: 15,
        width:'100%',

    },
    btnBuscar: {
        width:30,
        height:30,
         backgroundColor:cores.rosaClaro,


    },

    imgBuscar: {

    },
banner:{
    width:'100%',
    height:160,
    borderRadius:20,
    marginTop:30,

},

tituloCategoria:{
    fontSize: 30,
        fontWeight: "bold",
        color: cores.chocolate,
        
        fontFamily: fontes.titulo,
        margin:20,
},

categoria:{
    width:'100%', 
    marginTop:30,
},
conteudoCategoria:{
    width:'100%',
    flexDirection:'row',
    flexWrap:'wrap',
    rowGap:8,
},

tituloSecao:{
    fontSize:30,
    color:cores.chocolate,
    fontFamily:fontes.titulo,
    marginBottom:10,
},

// 3 por linha, todas do mesmo tamanho (32% + 2% de espaço)
itemCategoria:{
    width:'32%',
    minHeight:40,
    borderRadius:10,
    paddingVertical:8,
    paddingHorizontal:4,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:cores.rosa,
},

// Sem margem na última de cada linha
itemCategoriaMeio:{
    marginRight:'2%',
},

txtCategoria:{
fontSize:15,
lineHeight:18,
fontFamily:fontes.comum,
color:cores.branco,
textAlign:'center',
},

// Mensagem de "nenhum produto encontrado"
txtMensagem:{
fontSize:10,
fontFamily:fontes.comum,
color:cores.cinza,
marginTop:6,
textAlign:'center',
},

destaque:{
  width:'100%',
  marginTop:10,
},

listaDestaque:{
    flexDirection:'row',
    paddingRight:20,
    paddingBottom:10,
},

cardDestaque:{
    width:140,
    marginRight:14,
    backgroundColor:cores.branco,
    borderRadius:15,
    padding:6,
    shadowColor: cores.chocolate,
    shadowOffset:{ width: 0, height: 2 },
    shadowOpacity:0.1,
    shadowRadius:4,
    elevation:3,
},

wrapperImgDestaque:{
    width:'100%',
},

imgDestaque:{
    width:'100%',
    height:100,
    borderRadius:12,
},

badgeDestaque:{
    position:'absolute',
    top:6,
    right:6,
    width:22,
    height:22,
    borderRadius:8,
    borderColor:cores.rosa,
    borderWidth:1.5,
    backgroundColor:cores.rosaClaro,
    alignItems:'center',
    justifyContent:'center',
},

txtEstrela:{
    fontSize:12,
    color:cores.rosa,
},

nomeDestaque:{
    fontSize:fontes.fontpeq,
    fontFamily:fontes.negrito,
    color:cores.chocolate,
    textAlign:'center',
    marginTop:10,
    height:30,
},

descricaoDestaque:{
    fontSize:10,
    fontFamily:fontes.comum,
    color:cores.cinza,
    marginTop:2,
    height:30,
    margin:5,
},

rodapeDestaque:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:4,
},

precoDestaque:{
    fontSize:fontes.fontpeq,
    fontFamily:fontes.negrito,
    color:cores.rosa,
},

btnAdicionar:{
    width:20,
    height:20,
    borderRadius:10,
    backgroundColor:cores.rosa,
    alignItems:'center',
    justifyContent:'center',
},

imgAdicionar:{
    width:10,
    height:10,
    tintColor:cores.branco,
},

});

export default homeStyle;