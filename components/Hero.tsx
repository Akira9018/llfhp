
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative -mt-20 pt-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
            {/* ダイナミックアニメーション背景 */}
            <div className="absolute inset-0 overflow-hidden">
                {/* 大きな浮遊円 - ドリフト動作 */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-drift" style={{ animationDelay: '0s' }}></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full opacity-15 animate-sway" style={{ animationDelay: '2s' }}></div>

                {/* 軌道運動する要素 */}
                <div className="absolute top-1/4 right-1/4">
                    <div className="w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-orbital" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* ゆらゆら動く中サイズ図形 */}
                <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-400 to-white rounded-full opacity-25 animate-float" style={{ animationDelay: '3s' }}></div>

                {/* 追加の軌道要素 */}
                <div className="absolute top-1/2 left-1/4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full opacity-20 animate-orbital" style={{ animationDelay: '4s', animationDuration: '15s' }}></div>
                </div>

                {/* 動的パーティクル群 */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full opacity-30 ${i % 3 === 0 ? 'animate-drift' :
                            i % 3 === 1 ? 'animate-sway' : 'animate-float'
                            }`}
                        style={{
                            width: `${8 + (i % 3) * 4}px`,
                            height: `${8 + (i % 3) * 4}px`,
                            left: `${10 + i * 8}%`,
                            top: `${15 + (i % 4) * 20}%`,
                            backgroundColor: i % 2 === 0 ? '#60a5fa' : '#3b82f6',
                            animationDelay: `${i * 0.8}s`,
                            animationDuration: `${6 + (i % 3) * 2}s`
                        }}
                    ></div>
                ))}



                {/* 中央の動的光線効果 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-300 via-blue-100 to-transparent opacity-25 animate-pulse" style={{ animationDuration: '8s' }}></div>

                {/* 背景グラデーション波 */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100 to-transparent opacity-40 animate-sway" style={{ animationDuration: '12s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center">
                    {/* メインタイトル - ステージングアニメーション */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tight">
                        <span
                            className={`block animate-shimmer transform transition-all duration-1000 ease-out leading-relaxed ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                }`}
                            style={{ transitionDelay: '200ms' }}
                        >
                            介護と医療の未来を
                        </span>
                        <span
                            className={`block animate-gradient-flow transform transition-all duration-1000 ease-out leading-relaxed ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                }`}
                            style={{ transitionDelay: '600ms' }}
                        >
                            共に創る
                        </span>
                    </h1>

                    {/* サブテキスト */}
                    <p
                        className={`mt-6 sm:mt-8 max-w-2xl mx-auto text-lg sm:text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                        style={{ transitionDelay: '1000ms' }}
                    >
                        コスト削減、DX推進、そして『Unity』による新たな連携へ
                        <br />
                        <span className="text-blue-700 font-semibold">LLFは、専門的知見で事業の成長をサポートします</span>
                    </p>

                    {/* CTAボタン */}
                    <div
                        className={`mt-8 sm:mt-12 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                        style={{ transitionDelay: '1400ms' }}
                    >
                        <a
                            href="#business"
                            className="group inline-flex items-center justify-center px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out border-2 border-blue-600 hover:border-blue-500"
                        >
                            <span className="mr-2">事業内容を見る</span>
                            <svg
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* スクロール促進インジケーター */}
                    <div
                        className={`mt-12 sm:mt-16 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                        style={{ transitionDelay: '1800ms' }}
                    >
                        <div className="flex flex-col items-center text-blue-600">
                            <span className="text-sm font-medium mb-2">SCROLL DOWN</span>
                            <div className="w-0.5 h-12 bg-blue-400 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
