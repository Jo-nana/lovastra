import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/home.component';
import AboutUs from './components/routes/aboutUs/aboutUs.component';
import AstralTheme from './components/routes/astralTheme/astralTheme.component';
import Horoscope from './components/routes/horoscope/horoscope.component';
import Navigation from './components/routes/navigation/navigation.component';
import SignUpForm from './components/form/signUp/signUpForm.component';

import './App.scss'

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="astralTheme" element={<AstralTheme />} />
        <Route path="horoscope" element={<Horoscope />} />
        <Route path="signUp" element={<SignUpForm />} />
      </Route>
    </Routes>
  )
}

export default App;
