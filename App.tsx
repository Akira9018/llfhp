
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import BusinessOverview from './components/BusinessOverview';
import AboutUs from './components/AboutUs';
import Process from './components/Process';
import News from './components/News';
import ContactForm from './components/ContactForm';
import CompanyInfo from './components/CompanyInfo';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashComplete = () => {
        setShowSplash(false);
    };

    return (
        <>
            {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
            <div className="bg-white text-slate-800">
                <Header />
                <main>
                    <Hero />
                    <Problems />
                    <BusinessOverview />
                    <AboutUs />
                    <Process />
                    <News />
                    <ContactForm />
                    <CompanyInfo />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default App;
