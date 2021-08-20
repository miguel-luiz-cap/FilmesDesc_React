import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

const DadosFilme = [
  {
    uid: 1,
    filme: 'Vingadores',
    ano: '2012',
    genero: 'Ação',
    img: 'https://br.web.img3.acsta.net/pictures/19/03/15/10/35/4177435.jpg',
  },

  {
    uid: 2,
    filme: 'Harry Potter e a Pedra Filosofal',
    ano: '2001',
    genero: 'Magia',
    img:
      'https://img.elo7.com.br/product/original/2657A1E/big-poster-harry-potter-e-a-pedra-filosofal-lo01-90x60-cm-presente-geek.jpg',
  },

  {
    uid: 3,
    filme: 'Divergente',
    ano: '2014',
    genero: 'Ação',
    img: 'https://upload.wikimedia.org/wikipedia/pt/8/8e/Divergent.png',
  },

  {
    uid: 4,
    filme: 'WALL·E',
    ano: '2008',
    gerero: 'Infantil/Comédia',
    img: 'https://upload.wikimedia.org/wikipedia/pt/3/30/WALL-E.jpg',
  },

  {
    uid: 5,
    filme: 'Click',
    ano: '2006',
    genero: 'Comédia',
    img: 'https://m.media-amazon.com/images/I/51qq+12klKL._AC_.jpg',
  },

  {
    uid: 6,
    filme: 'Jogos Vorazes',
    ano: '2012',
    genero: 'Ficção científica/Ação',
    img:
      'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/35/87/20039778.jpg',
  },

  {
    uid: 7,
    filme: 'DRÁCULA DE BRAM STOKER',
    ano: '1992',
    genero: 'Drama, Terror, Romance',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/4/49/Dracula_%281992%29.jpg',
  },

  {
    uid: 8,
    filme: 'Space Jam: Um Novo Legado',
    ano: '2021',
    genero: 'Comédia',
    img:
      'https://static.wixstatic.com/media/cc9c78_e592b3bb7561496cab951e497e7638d9~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/cc9c78_e592b3bb7561496cab951e497e7638d9~mv2.jpg',
  },

  {
    uid: 9,
    filme: 'Toy Story',
    ano: '1995',
    genero: 'Aventura',
    img:
      'https://images.tcdn.com.br/img/img_prod/617718/kit_festa_toy_story_com_displays_de_mesa_e_painel_poli_banner_109_2_20200303150614.jpg',
  },

  {
    uid: 10,
    filme: 'Sonic',
    ano: '2020',
    genero: 'Ação/Aventura',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/9/9f/Sonic_the_Hedgehog_2019.jpg',
  },

  {
    uid: 11,
    filme: 'Homem Aranha 1',
    ano: '2002',
    genero: 'Ficção científica/Ação',
    img: 'https://br.web.img3.acsta.net/pictures/bzp/01/29007.jpg',
  },

  {
    uid: 12,
    filme: 'A Teoria de Tudo',
    ano: '2014',
    img:
      'https://br.web.img2.acsta.net/c_310_420/pictures/14/12/02/22/15/327211.jpg',
  },

  {
    uid: 13,
    filme: 'It a coisa',
    ano: '2017',
    genero: 'Terror',
    img: 'https://upload.wikimedia.org/wikipedia/pt/8/82/It_2017.jpg',
  },

  {
    uid: 14,
    filme: 'O profissional',
    ano: '1994',
    genero: 'Ação',
    img: 'https://br.web.img3.acsta.net/medias/nmedia/18/96/54/49/20474313.jpg',
  },
];

export default function App() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo_principal}>Dicas Legais.</Text>
      <Text style={estilo.subtitulo_principal}>
        Filmes para o final de semana.
      </Text>

      <Text style={estilo.dica_titulo}>Viúva Negra:</Text>
      <Text style={estilo.dica_texto}>
        Bom filme para quem esta com saudades de filmes de heroi :)
      </Text>

      <Text style={estilo.dica_titulo}>Godzila vs King Kong:</Text>
      <Text style={estilo.dica_texto}>
        Excelente filme para quem curte porradaria de monstros.
      </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    //alignItems: 'center',
    flex: 1,
    padding: 30,

    //justifyContent:'top',
    backgroundColor: '#000',
  },
  titulo_principal: {
    textAlign: 'center',
    fontSize: 34,
    color: '#FFF',
    marginBottom: 10,
    //backgroundColor: '#FF3A00',
    fontWeight: 'bold',
    //shadowColor: '#FF0000',
    //textShadowColor: '#FF00FF',
    //textShadowRadius: 30,
  },
  subtitulo_principal: {
    textAlign: 'center',
    fontSize: 25,
    color: '#FFF',
    marginBottom: 40,
  },
  dica_titulo: {
    textAlign: 'left',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 10,
    //backgroundColor: '#FF3A00',
    fontWeight: 'bold',
    //shadowColor: '#FF0000',
    //textShadowColor: '#FF00FF',
    //textShadowRadius: 30,
  },
  dica_texto: {
    textAlign: 'left',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30,
  },
});
