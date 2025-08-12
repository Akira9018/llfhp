
import React, { useState, useEffect } from 'react';

const newsItems = [
    {
        date: '2024.07.25',
        title: 'コーポレートサイトを公開しました',
        content: 'この度、LLF合同会社の公式コーポレートサイトを公開いたしました。私たちのミッション、事業内容、そして介護・医療業界への想いを皆様にお伝えできるよう、分かりやすく情報をまとめております。今後とも何卒よろしくお願いいたします。'
    },
    {
        date: '2024.07.10',
        title: 'マッチングプラットフォーム『Unity』のβ版テストを開始しました',
        content: '介護・医療従事者と事業所をつなぐマッチングプラットフォーム『Unity』のβ版テストを開始いたしました。より良いマッチングを実現するため、実際のユーザー様からのフィードバックを収集し、サービス改善に努めております。正式リリースまでもうしばらくお待ちください。'
    },
    {
        date: '2024.06.15',
        title: '「介護事業所向けDX推進セミナー」を開催しました',
        content: '介護事業所の経営者・管理者の皆様を対象に、DX推進に関するセミナーを開催いたしました。デジタル化によるコスト削減、業務効率化の具体的な手法について解説し、多くの方にご参加いただきました。今後も定期的にセミナーを開催予定です。'
    },

];

const News: React.FC = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);
    const [scrollY, setScrollY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    // パララックス効果用のスクロールイベント
    useEffect(() => {
        const handleScroll = () => {
            const rect = document.getElementById('news')?.getBoundingClientRect();
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
            id="news"
            className="relative py-20 sm:py-28 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 3.SVG背景画像 - パララックス + ホバー効果 */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 transition-transform duration-500 ease-out"
                style={{
                    backgroundImage: 'url(/3.svg)',
                    transform: `translateY(${scrollY * -0.3}px) scale(${isHovered ? 1.03 : 1})`,
                    transformOrigin: 'center center'
                }}
            ></div>

            {/* オーバーレイ for readability */}
            <div className="absolute inset-0 bg-white transition-opacity duration-300" style={{
                opacity: isHovered ? 0.65 : 0.75
            }}></div>

            {/* 前のアニメーション背景（コメントアウト - 戻す場合はこちらを使用）
            <div className="absolute inset-0">
                {/* 紙吹雪のような小さな要素 */}
            {/* [...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-4 h-4 bg-blue-300 opacity-20 animate-ping`}
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + (i % 2) * 30}%`,
                            animationDelay: `${i * 1.2}s`,
                            animationDuration: '4s',
                            borderRadius: i % 2 === 0 ? '50%' : '0%'
                        }}
                    ></div>
                ))} */}

            {/* 装飾的なライン */}
            {/* <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30"></div>
                <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-20"></div>
            </div> */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        NEWS
                    </h2>
                    <p className="mt-4 text-lg text-blue-700 font-medium">
                        LLFからのお知らせ
                    </p>
                    <div className="mt-6 mx-auto w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {newsItems.map((item, index) => (
                            <div key={index} className="transform transition-all duration-300 hover:scale-102">
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100 overflow-hidden">
                                    {/* ヘッダー（クリック可能） */}
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="w-full p-4 sm:p-6 text-left hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                                                <div className="flex-shrink-0">
                                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                                                        {item.date}
                                                    </span>
                                                </div>
                                                <h3 className="text-base sm:text-lg font-medium text-slate-800">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            {/* 展開/折りたたみアイコン */}
                                            <svg
                                                className={`w-5 h-5 text-blue-400 transition-transform duration-200 ${openItem === index ? 'rotate-90' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* アコーディオンコンテンツ */}
                                    <div className={`transition-all duration-300 ease-in-out ${openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                                            <div className="border-t border-blue-100 pt-4">
                                                <p className="text-slate-600 leading-relaxed">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
