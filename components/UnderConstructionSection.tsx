import React from 'react';
import { ConstructionIcon, ToolsIcon, WarningIcon, GearIcon, CalendarIcon, EmailIcon } from './icons/ConstructionIcons';

interface UnderConstructionSectionProps {
    isModal?: boolean;
}

const UnderConstructionSection: React.FC<UnderConstructionSectionProps> = ({ isModal = false }) => {
    return (
        <div className={`${isModal ? 'p-6' : 'py-20'} bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden`}>
            {/* 背景装飾 */}
            <div className="absolute inset-0 overflow-hidden">
                {/* 工事アイテムの浮遊 */}
                <div className="absolute top-10 left-10 text-orange-400 animate-bounce" style={{ animationDuration: '3s' }}>
                    <ConstructionIcon className="w-16 h-16" />
                </div>
                <div className="absolute top-20 right-20 text-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <WarningIcon className="w-12 h-12" />
                </div>
                <div className="absolute bottom-20 left-1/4 text-orange-500 animate-spin" style={{ animationDuration: '8s' }}>
                    <GearIcon className="w-14 h-14" />
                </div>
                <div className="absolute bottom-10 right-10 text-orange-600 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '1s' }}>
                    <ToolsIcon className="w-12 h-12" />
                </div>

                {/* 点線パターン */}
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #f59e0b 0px, #f59e0b 10px, transparent 10px, transparent 20px)',
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-4">
                {/* メインアイコン */}
                <div className="mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full animate-pulse">
                            <ConstructionIcon className="w-20 h-20 text-orange-600" />
                        </div>
                    </div>
                    <div className="flex justify-center space-x-2">
                        <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                        <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>

                {/* メッセージ */}
                <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6 leading-tight">
                    工事中です
                </h2>

                <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200">
                    <p className="text-lg text-orange-700 mb-4 leading-relaxed">
                        DX推進コンサルティング事業のページは現在準備中です
                    </p>
                    <p className="text-orange-600 mb-6">
                        より良いサービスをお届けするため、鋭意開発中です。<br />
                        お楽しみにお待ちください！
                    </p>

                    {/* 進捗バー */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-orange-800">開発進捗</span>
                            <span className="text-sm font-medium text-orange-800">65%</span>
                        </div>
                        <div className="w-full bg-orange-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-3 rounded-full transition-all duration-1000 animate-pulse" style={{ width: '65%' }}></div>
                        </div>
                    </div>

                    {/* 予定日 */}
                    <div className="flex items-center justify-center space-x-2 text-orange-700">
                        <CalendarIcon className="w-6 h-6 text-orange-600" />
                        <span className="font-medium">公開予定: 2025年春</span>
                    </div>
                </div>

                {/* お問い合わせボタン */}
                <div className="mt-8">
                    <button
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            contactSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                    >
                        <span>お問い合わせはこちら</span>
                        <EmailIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UnderConstructionSection;
