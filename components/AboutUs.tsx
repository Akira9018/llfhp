import React from 'react';
import { MissionIcon, VisionIcon, ValueIcon, HeartIcon, ShieldIcon, TrendingIcon } from './icons/AboutIcons';

const AboutUs: React.FC = () => {
    return (
        <section id="about" className="relative py-20 sm:py-28 bg-gradient-to-bl from-blue-100 via-blue-50 to-white overflow-hidden">
            {/* ウェーブアニメーション背景 */}
            <div className="absolute inset-0">
                {/* SVGウェーブ */}
                <svg className="absolute bottom-0 w-full h-40" preserveAspectRatio="none" viewBox="0 0 1200 120">
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#dbeafe" />
                            <stop offset="50%" stopColor="#bfdbfe" />
                            <stop offset="100%" stopColor="#93c5fd" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
                        fill="url(#waveGradient)"
                        opacity="0.6"
                        className="animate-pulse"
                    />
                </svg>

                {/* 浮遊要素 */}
                <div className="absolute top-20 right-20 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-float"></div>
                <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full opacity-25 animate-float-delayed"></div>
                <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '4s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* メインセクション */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        ABOUT US
                    </h2>
                    <p className="text-lg text-blue-700 font-medium mb-6">
                        LLF合同会社について
                    </p>

                    {/* 装飾的なライン */}
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-10"></div>

                    {/* コンパクトな説明文 */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100">
                            <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                LLF合同会社は、<span className="font-semibold text-blue-700">介護・医療業界の課題解決</span>を使命とする専門コンサルティング会社です。
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                経費削減・DX化推進により事業者様の経営基盤を強化し、独自プラットフォーム『<span className="font-semibold text-blue-700">Unity</span>』で
                                医療と介護の連携を促進。専門知識と豊富な経験を活かし、お客様に最適なソリューションを提供いたします。
                            </p>
                        </div>
                    </div>
                </div>

                {/* ミッション・ビジョン・バリュー */}
                <div className="mt-16 sm:mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-4">
                            私たちの想い
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {/* ミッション */}
                        <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="flex items-center justify-center mb-6">
                                <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full group-hover:scale-110 transition-transform duration-300">
                                    <MissionIcon className="w-10 h-10 text-blue-600" />
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 text-center mb-4">
                                ミッション
                            </h4>
                            <p className="text-slate-700 text-center leading-relaxed">
                                介護・医療業界の課題を解決し、<br />
                                質の高いケアの実現を通じて<br />
                                社会に貢献します
                            </p>
                            <div className="mt-4 flex justify-center space-x-2">
                                <HeartIcon className="w-5 h-5 text-blue-500" />
                                <ShieldIcon className="w-5 h-5 text-blue-500" />
                            </div>
                        </div>

                        {/* ビジョン */}
                        <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="flex items-center justify-center mb-6">
                                <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full group-hover:scale-110 transition-transform duration-300">
                                    <VisionIcon className="w-10 h-10 text-blue-600" />
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 text-center mb-4">
                                ビジョン
                            </h4>
                            <p className="text-slate-700 text-center leading-relaxed">
                                テクノロジーと専門知識を融合し、<br />
                                医療と介護の未来を<br />
                                共に創造していきます
                            </p>
                            <div className="mt-4 flex justify-center">
                                <TrendingIcon className="w-6 h-6 text-blue-500" />
                            </div>
                        </div>

                        {/* バリュー */}
                        <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="flex items-center justify-center mb-6">
                                <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full group-hover:scale-110 transition-transform duration-300">
                                    <ValueIcon className="w-10 h-10 text-blue-600" />
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 text-center mb-4">
                                バリュー
                            </h4>
                            <p className="text-slate-700 text-center leading-relaxed">
                                信頼・革新・共感を大切に、<br />
                                お客様に寄り添った<br />
                                最適なソリューションを提供
                            </p>
                            <div className="mt-4 flex justify-center space-x-1">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;