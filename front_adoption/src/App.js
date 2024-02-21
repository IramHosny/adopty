import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ChienList from './components/ChienList';
import ChatList from './components/ChatList';
import Forum from './components/Forum';
import Veterinarian from './components/Veterinarian';
import { useState } from 'react';

function App() {
  const[cats, setcats] = useState([{
  name:"SIAMOIS",
  cat_url:"https://www.medoretcie.com/-/media/Project/BotanicSDS/Medor/Articles/Images/2023_09_article_chat_siamois/2023_09_Banniere_chat_siamois.png?w=1920&hash=D8B7AFBD20003AB91839BA392D42D9A96BC97907",
description:"Ce chat siamois captivant, d'une taille moyenne et élégante, mesure environ 30 cm et pèse environ 3 kg, arborant un pelage court et soyeux."
  }, 
{name:"PERSAN", 
cat_url:"https://www.zooplus.be/magazine/wp-content/uploads/2019/01/chat-persan-tricolore.jpg",
description:"Découvrez ce magnifique chat Persan ! À l'âge de 3 ans, il pèse 4 kg et mesure environ 30 cm de hauteur. Avec son pelage luxueux et son regard envoûtant, il incarne l'élégance et la grâce féline."
} ,
{name:"BENGAL",
cat_url:"https://image.jimcdn.com/app/cms/image/transf/dimension=940x10000:format=jpg/path/scc0691292d707e3c/image/ie22de3ebaf166a4c/version/1658405773/image.jpg",
description:"Découvrez ce charmant chaton Bengal ! À l'âge de 6 mois, il mesure environ 25 cm de hauteur et pèse environ 2 kg. Avec ses magnifiques taches et son énergie débordante, il incarne l'esprit aventurier et joueur de la race Bengal."
},
])
const[dogs, setdogs] = useState([{
  name:"BERGER ALLEMAND",
  dog_url:"https://www.santevet.be/uploads/images/fr_BE/races/berger%20allemand.jpg",
description:"Le Berger Allemand nommé Max est un magnifique spécimen de la race, âgé de trois ans. Mesurant fièrement 60 centimètres au garrot et pesant environ 35 kilogrammes"
  }, 
{name:"HUSKY", 
dog_url:"https://www.liubov.net/images/stories/com_jbreedm/2015/liubov's%20linux%206.jpg",
description:"Le petit Husky nommé Luna est une boule d'énergie pleine de vie. Âgée de seulement deux mois, elle est encore toute petite, mesurant environ 25 centimètres au garrot et pesant environ 4 kilogrammes."
} ,
{name:"CHIWAWA",
dog_url:"https://cdn.pixabay.com/photo/2017/10/29/18/00/chihuahua-2900362_640.jpg",
description:"Ce petit chiot Chihuahua nommé Coco est une véritable boule d'énergie et de charme. À seulement trois mois, il est encore tout petit, mesurant environ 20 centimètres au garrot et pesant à peine 1 kilogramme"
},
])
const [text, settext] = useState("");
  return (
    <div className="App"  style={{ backgroundColor:'beige'}}>
   <Navbarr/>
   <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/cats" element={ <ChatList cats ={cats}  text = {text}  settext= {settext}/> } />
        <Route path="/dogs" element={ <ChienList dogs={dogs}  text = {text} settext= {settext}/> } />
        <Route path="/forum" element={ <Forum/> } />
        <Route path="/veterinarian" element={ <Veterinarian/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
