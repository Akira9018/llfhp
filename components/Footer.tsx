
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
            {/* アニメーション背景 */}
            <div className="absolute inset-0">
                {/* 星のような効果 */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}

                {/* 底部グラデーション */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-800/20 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4">
                    <div className="mb-6">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/logo3.svg"
                                alt="LLF G.K. Logo"
                                className="h-16 w-auto filter drop-shadow-lg"
                                style={{
                                    filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.5))'
                                }}
                            />
                        </div>
                        <p className="text-blue-200 max-w-md mx-auto leading-relaxed">
                            介護と医療の未来を共に創る
                        </p>
                    </div>

                    <div className="border-t border-blue-800/50 pt-6">
                        <p className="text-base text-blue-300">
                            &copy; 2024 LLF G.K. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
