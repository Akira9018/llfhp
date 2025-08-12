
import React, { useState, useEffect } from 'react';

const infoItems = [
    { label: '会社名', value: 'LLF合同会社' },
    { label: '設立', value: '2023年3月' },
    { label: '代表者', value: '代表社員 田中 政吉' },
    { label: '所在地', value: '〒574-0011 大阪府大東市北条６丁目３－２０' },
    {
        label: '事業内容', value: (
            <ul className="list-disc list-inside">
                <li>経費削減コンサルティング事業</li>
                <li>介護事業者・施設のDX化推進コンサルティング事業</li>
                <li>医療機関と介護事業者のマッチングプラットフォーム『Unity』の運営</li>
            </ul>
        )
    },
];

const CompanyInfo: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // パララックス効果用のスクロールイベント
    useEffect(() => {
        const handleScroll = () => {
            const rect = document.getElementById('company-info')?.getBoundingClientRect();
            if (rect) {
                const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
                setScrollY(scrollProgress * 100);
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // 初期位置を設定
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="company-info"
            className="relative py-20 sm:py-28 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 4.SVG背景画像 - パララックス + ホバー効果 */}
                        <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 transition-transform duration-500 ease-out"
                style={{
                    backgroundImage: 'url(/4.svg)',
                    transform: `translateY(${scrollY * -0.4}px) scale(${isHovered ? 1.04 : 1})`,
                    transformOrigin: 'center center'
                }}
            ></div>

            {/* オーバーレイ for readability */}
            <div className="absolute inset-0 bg-white transition-opacity duration-300" style={{
                opacity: isHovered ? 0.6 : 0.7
            }}></div>

            {/* 前のアニメーション背景（コメントアウト - 戻す場合はこちらを使用）
            <div className="absolute inset-0">
                {/* 淡いグリッド */}
            {/* <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)',
                    backgroundSize: '50px 50px'
                }}></div> */}

            {/* 浮遊要素 */}
            {/* <div className="absolute top-1/4 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute bottom-1/3 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '5s' }}></div>
            </div> */}

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        会社情報
                    </h2>
                    <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-blue-100">
                    <div className="divide-y divide-blue-100">
                        {infoItems.map((item, index) => (
                            <div
                                key={index}
                                className="px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 hover:bg-blue-50/50 transition-colors duration-200"
                            >
                                <dt className="font-semibold text-blue-900 text-lg">{item.label}</dt>
                                <dd className="text-slate-700 md:col-span-2 leading-relaxed">{item.value}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;
