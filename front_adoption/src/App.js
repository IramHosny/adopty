import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ChienList from './components/ChienList';
import ChatList from './components/ChatList';
import { useEffect,useState } from 'react';
import VeteList from './components/VeteList';
import LogInOut from './components/LogInOut';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { useDispatch} from 'react-redux';
import { userCurrent } from './redux/userSlice';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/Dashboard';
import CatListadmin from './components/CatListadmin';
import DogListadmin from './components/DogListadmin';
import VeterinarianListadmin from './components/VeterinarianListadmin';
import  {getcat} from './redux/catSlice';
import { getveterinarian } from './redux/veterinarianSlice';
import { getdog } from './redux/dogSlice';
import Question_CommentList from './components/Question_CommentList';
import { getquestion } from './redux/questionSlice';
import { getcomment } from './redux/commentSlice';
import Detailscat from './components/Detailscat';
import Detailsdog from './components/Detailsdog';
import UserListadmin from './components/UserListadmin';
import { getusers } from './redux/usersSlice';
import AdoptCatAdmin from './components/AdoptCatAdmin';
import AdoptDogAdmin from './components/AdoptDogAdmin';
import { getadoptCat } from './redux/adoptCatSlice';
import { getadoptDog } from './redux/adoptDogSlice';




function App() {
  const dispatch= useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getusers());
    dispatch(getcat());
    dispatch(getdog());
    dispatch(getveterinarian());   
    dispatch(getquestion());   
    dispatch(getcomment()); 
    dispatch(getadoptCat());  
    dispatch(getadoptDog());
  }, [ping])
  return (
    <div className="App">
   <Navbarr/>
  <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/cats" element={ <ChatList   ping = {ping} setping = {setping}/> } />
        <Route path="/dogs" element={ <ChienList  ping = {ping} setping = {setping}/> } />
       
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/catdetails/:_id" element={ <Detailscat /> }/>
        <Route path="/dogdetails/:_id" element={ <Detailsdog /> }/>
        <Route path="/login" element={ <LogInOut/> } />
        
        <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile ping = {ping} setping = {setping}/>}/>
        <Route path="/admin" element={<Dashboard/>} ping = {ping} setping = {setping}/>
        <Route path="/admin/user" element={<UserListadmin/>}/>
        <Route path="/admin/adoptRequestCat" element={<AdoptCatAdmin ping = {ping} setping = {setping}/>}/>
        <Route path="/admin/adoptRequestDog" element={<AdoptDogAdmin ping = {ping} setping = {setping}/>}/>
        <Route path="/admin/cat" element={<CatListadmin/>} ping = {ping} setping = {setping} />
        <Route path="/admin/dog" element={<DogListadmin/>} ping = {ping} setping = {setping}/>
        <Route path='/admin/veterinarian' element={<VeterinarianListadmin/>} ping = {ping} setping = {setping}/>
        <Route path="/forum" element={ <Question_CommentList/> } />
        <Route path="/veterinarian" element={ <VeteList  ping = {ping} setping = {setping}/> } />
        </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
