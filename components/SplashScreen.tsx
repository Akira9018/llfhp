import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [logoFadeOut, setLogoFadeOut] = useState(false);
    const [screenOpening, setScreenOpening] = useState(false);

    useEffect(() => {
        // 2秒後にロゴがフェードアウト開始
        const logoTimer = setTimeout(() => {
            setLogoFadeOut(true);
        }, 2000);

        // 2.3秒後にフェードアウト開始
        const curtainTimer = setTimeout(() => {
            setScreenOpening(true);
        }, 2300);

        // 4秒後にスプラッシュスクリーン完全終了（フェードアウト完了）
        const completeTimer = setTimeout(() => {
            onComplete();
        }, 4000);

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(curtainTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className={`splash-screen ${screenOpening ? 'fade-out' : ''}`}>
            <div className={`splash-logo ${logoFadeOut ? 'fade-out' : ''}`}>
                <img
                    src="/logo3.svg"
                    alt="LLF G.K. Logo"
                    className="h-20 sm:h-24 md:h-32 w-auto"
                />
            </div>
        </div>
    );
};

export default SplashScreen;
