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
                        <div className="group relative bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                            {/* 装飾的な背景要素 */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full transform -translate-x-6 translate-y-6"></div>

                            {/* アイコンとタイトル */}
                            <div className="relative z-10 flex items-center justify-center mb-6">
                                <div className="relative p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                                    <MissionIcon className="w-12 h-12 text-white" />
                                    {/* アイコン周りの装飾 */}
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            {/* タイトルバー */}
                            <div className="relative mb-4">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg opacity-10"></div>
                                <h4 className="relative text-xl font-bold text-slate-900 text-center py-2 tracking-wider">
                                    MISSION
                                </h4>
                            </div>

                            <p className="text-slate-700 text-center leading-relaxed mb-6 relative z-10">
                                介護・医療業界の課題を解決し、<br />
                                質の高いケアの実現を通じて<br />
                                社会に貢献します
                            </p>

                            {/* 装飾的なドットライン */}
                            <div className="flex justify-center items-center space-x-2 mb-4">
                                <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-6 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
                            </div>

                            {/* ボトム装飾 */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* ビジョン */}
                        <div className="group relative bg-gradient-to-br from-white via-purple-50 to-indigo-100 rounded-2xl p-8 shadow-lg border border-purple-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                            {/* 装飾的な背景要素 */}
                            <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full transform -translate-x-6 -translate-y-6"></div>
                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-indigo-300/20 to-transparent rounded-full transform translate-x-4 translate-y-4"></div>

                            {/* アイコンとタイトル */}
                            <div className="relative z-10 flex items-center justify-center mb-6">
                                <div className="relative p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg">
                                    <VisionIcon className="w-12 h-12 text-white" />
                                    {/* アイコン周りの装飾 */}
                                    <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            {/* タイトルバー */}
                            <div className="relative mb-4">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg opacity-10"></div>
                                <h4 className="relative text-xl font-bold text-slate-900 text-center py-2 tracking-wider">
                                    VISION
                                </h4>
                            </div>

                            <p className="text-slate-700 text-center leading-relaxed mb-6 relative z-10">
                                テクノロジーと専門知識を融合し、<br />
                                医療と介護の未来を<br />
                                共に創造していきます
                            </p>

                            {/* 装飾的なドットライン */}
                            <div className="flex justify-center items-center space-x-2 mb-4">
                                <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
                                <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                <div className="w-3 h-3 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-6 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
                            </div>

                            {/* ボトム装飾 */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* バリュー */}
                        <div className="group relative bg-gradient-to-br from-white via-emerald-50 to-green-100 rounded-2xl p-8 shadow-lg border border-emerald-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                            {/* 装飾的な背景要素 */}
                            <div className="absolute top-1/2 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full transform translate-x-4 -translate-y-4"></div>
                            <div className="absolute bottom-0 left-1/2 w-32 h-16 bg-gradient-to-t from-green-300/20 to-transparent rounded-full transform -translate-x-8"></div>

                            {/* アイコンとタイトル */}
                            <div className="relative z-10 flex items-center justify-center mb-6">
                                <div className="relative p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                                    <ValueIcon className="w-12 h-12 text-white" />
                                    {/* アイコン周りの装飾 */}
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            {/* タイトルバー */}
                            <div className="relative mb-4">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 rounded-lg opacity-10"></div>
                                <h4 className="relative text-xl font-bold text-slate-900 text-center py-2 tracking-wider">
                                    VALUE
                                </h4>
                            </div>

                            <p className="text-slate-700 text-center leading-relaxed mb-6 relative z-10">
                                信頼・革新・共感を大切に、<br />
                                お客様に寄り添った<br />
                                最適なソリューションを提供
                            </p>

                            {/* 装飾的なドットライン */}
                            <div className="flex justify-center items-center space-x-2 mb-4">
                                <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-emerald-400"></div>
                                <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-teal-600 rounded-full group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-6 h-0.5 bg-gradient-to-l from-transparent to-emerald-400"></div>
                            </div>

                            {/* ボトム装飾 */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;