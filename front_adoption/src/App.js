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
import { useEffect,useState } from 'react';
import{dataVeterinarian} from './DB/dataVeterinarian';
import VeteList from './components/VeteList';
import LogInOut from './components/LogInOut';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { useDispatch } from 'react-redux';
import { userCurrent } from './redux/userSlice';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/Dashboard';
import CatListadmin from './components/CatListadmin';
import DogListadmin from './components/DogListadmin';
import VeterinarianListadmin from './components/VeterinarianListadmin';
import  {getcat} from './redux/catSlice';
import { getveterinarian } from './redux/veterinarianSlice';
import { getdog } from './redux/dogSlice';

function App() {
  const dispatch= useDispatch();
  const isAuth = localStorage.getItem("token");
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getcat());
    dispatch(getdog());
    dispatch(getveterinarian());   
  }, [ping])

  const[cats, setcats] = useState([{
  name:"TIAGO",
  cat_url:"https://www.medoretcie.com/-/media/Project/BotanicSDS/Medor/Articles/Images/2023_09_article_chat_siamois/2023_09_Banniere_chat_siamois.png?w=1920&hash=D8B7AFBD20003AB91839BA392D42D9A96BC97907",
description:"Ce chat siamois captivant, d'une taille moyenne et élégante arborant un pelage court et soyeux."
 ,Race:"-Race:européen",
Sexe:"-Sexe:Mâle",
Àge:"-Àge:1ans",
Santé:"-Santé:Bonne",
Lieu:"-Lieu:Sahloul_Sousse" }, 
{name:"Vulcain", 
cat_url:"https://www.zooplus.be/magazine/wp-content/uploads/2019/01/chat-persan-tricolore.jpg",
description:"Découvrez ce magnifique chat Persan !. Avec son pelage luxueux et son regard envoûtant, il incarne l'élégance et la grâce féline."
,Race:"-Race:européen",
Sexe:"-Sexe:Mâle",
Àge:"-Àge:1 ans",
Santé:"-Santé:Alimentation médicalisée",
Lieu:"-Lieu:Hamma_Gabès"} ,
{name:"Oreo",
cat_url:"https://image.jimcdn.com/app/cms/image/transf/dimension=940x10000:format=jpg/path/scc0691292d707e3c/image/ie22de3ebaf166a4c/version/1658405773/image.jpg",
description:"Découvrez ce charmant chaton Bengal ! À l'âge de 6 mois, il mesure environ 25 cm de hauteur et pèse environ 2 kg. Avec ses magnifiques taches et son énergie débordante, il incarne l'esprit aventurier et joueur de la race Bengal."
,Race:"-Race:européen",
Sexe:"-Sexe:Mâle",
Àge:"-Àge:2ans",
Santé:"-Santé:Oreille atrophiée",
Lieu:"-Lieu:Cité Ennasr_Tunis"},
])
const[dogs, setdogs] = useState([{
name:"Max",
dog_url:"https://www.santevet.be/uploads/images/fr_BE/races/berger%20allemand.jpg",
description:"Le Berger Allemand nommé Max est un magnifique spécimen de la race, âgé de trois ans. Mesurant fièrement 60 centimètres au garrot et pesant environ 35 kilogrammes"
,Race:"-Race:Berger",
Sexe:"-Sexe:Mâle",
Àge:"-Àge:3 ans",
Santé:"-Santé:Bonne",
Lieu:"-Lieu:Cité ghazela_Ariana"}, 
{name:"Luna", 
dog_url:"https://www.liubov.net/images/stories/com_jbreedm/2015/liubov's%20linux%206.jpg",
description:"Le petit Husky nommé Luna est une boule d'énergie pleine de vie. Âgée de seulement deux mois, elle est encore toute petite, mesurant environ 25 centimètres au garrot et pesant environ 4 kilogrammes."
,Race:"-Race:Husky",
Sexe:"-Sexe:Mâle",
Àge:"-Àge:2 mois",
Santé:"-Santé:Bonne",
Lieu:"-Lieu:Cité Zouhour_Gabès"} ,
{name:"Vanille",
dog_url:"https://cdn.pixabay.com/photo/2017/10/29/18/00/chihuahua-2900362_640.jpg",
description:"Ce petit chiot Chihuahua nommé Vanille est une véritable boule d'énergie et de charme.il est encore tout petit, mesurant environ 20 centimètres au garrot et pesant à peine 1 kilogramme"
,Race:"-Race:Chihuahua",
Sexe:"-Sexe:Mâle",
Àge:"-Àge:3 mois",
Santé:"-Santé:Bonne",
Lieu:"-Lieu:Cité Ennasr_Tunis"},
])
const [text, settext] = useState("");

  return (
    <div className="App">
   <Navbarr/>
  <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/cats" element={ <ChatList   ping = {ping} setping = {setping}/> } />
        <Route path="/dogs" element={ <ChienList  ping = {ping} setping = {setping}/> } />
        <Route path="/forum" element={ <Forum/> } />
        <Route path="/veterinarian" element={ <VeteList  ping = {ping} setping = {setping}/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/login" element={ <LogInOut/> } />
        <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile ping = {ping} setping = {setping}/>}/>
        <Route path="/admin" element={<Dashboard/>} ping = {ping} setping = {setping}/>
        <Route path="/admin/cat" element={<CatListadmin/>} ping = {ping} setping = {setping} />
        <Route path="/admin/dog" element={<DogListadmin/>} ping = {ping} setping = {setping}/>
        <Route path='/admin/veterinarian' element={<VeterinarianListadmin/>} ping = {ping} setping = {setping}/>
        
        </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
