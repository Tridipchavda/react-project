import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import LandingImage from './Components/LandingImage';
import SideNavbar from './Components/SideNavbar';
import PostFeed from './Components/PostFeed';
import SignUpPopUp from './Components/SignUpPopUp';
import LogInPopUp from './Components/LogInPopUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingImage/>
      <SideNavbar/>
      <center>
        <PostFeed/>
      </center>
      <SignUpPopUp/>
      <LogInPopUp/>
    </div>
  );
}

export default App;
