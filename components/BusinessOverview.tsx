
import React, { useState, useEffect } from 'react';
import { CostIcon, DxIcon, UnityIcon } from './icons/BusinessIcons';
import Modal from './Modal';
import CostConsultingSection from './CostConsultingSection';
import UnderConstructionSection from './UnderConstructionSection';
import UnityLoginSection from './UnityLoginSection';

const businessPillars = [
    {
        id: 'cost-consulting',
        icon: <CostIcon />,
        title: '経費削減コンサル事業',
        description: '電気代やガス代などの固定費を専門的な知見から分析し、最適なプランを提案。事業所の経営基盤を強化します。',
        hasModal: true,
    },
    {
        id: 'dx-consulting',
        icon: <DxIcon />,
        title: 'DX推進コンサル事業',
        description: '介護事業者・施設の業務効率化を支援。最新のITツール導入から定着まで、現場に寄り添ったDX化を推進します。',
        hasModal: true,
    },
    {
        id: 'unity-platform',
        icon: <UnityIcon />,
        title: '『Unity』運営事業',
        description: '医療機関と介護事業者をつなぐ独自のマッチングプラットフォーム。シームレスな連携で、より質の高いケアを実現します。',
        hasModal: true,
    },
];

interface BusinessCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    hasModal: boolean;
    onClick?: () => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ icon, title, description, hasModal, onClick }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out p-8 flex flex-col items-center text-center">
        <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 flex-grow">{description}</p>
        {hasModal ? (
            <button
                onClick={onClick}
                className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors cursor-pointer hover:bg-blue-50 px-4 py-2 rounded-lg"
            >
                詳しく見る &rarr;
            </button>
        ) : (
            <a href="#" className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                詳しく見る &rarr;
            </a>
        )}
    </div>
);

const BusinessOverview: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);
    const [scrollY, setScrollY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleCardClick = (businessId: string) => {
        setSelectedBusiness(businessId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBusiness(null);
    };

    // パララックス効果用のスクロールイベント
    useEffect(() => {
        const handleScroll = () => {
            const rect = document.getElementById('business')?.getBoundingClientRect();
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
        <>
            <section
                id="business"
                className="relative py-20 sm:py-28 overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* 2.SVG背景画像 - パララックス + ホバー効果 */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 transition-transform duration-500 ease-out"
                    style={{
                        backgroundImage: 'url(/2.svg)',
                        transform: `translateY(${scrollY * -0.5}px) scale(${isHovered ? 1.05 : 1})`,
                        transformOrigin: 'center center'
                    }}
                ></div>

                {/* オーバーレイ for readability */}
                <div className="absolute inset-0 bg-white bg-opacity-70 transition-opacity duration-300" style={{
                    opacity: isHovered ? 0.6 : 0.7
                }}></div>

                {/* 前のアニメーション背景（コメントアウト - 戻す場合はこちらを使用）
                <div className="absolute inset-0">
                    {/* 浮遊する幾何学図形 */}
                {/* <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-spin" style={{ animationDuration: '25s' }}></div>
                    <div className="absolute top-1/2 right-20 w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-400 transform rotate-45 opacity-15 animate-pulse"></div>
                    <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-25 animate-bounce" style={{ animationDuration: '3s' }}></div> */}

                {/* 接続線のアニメーション */}
                {/* <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#1d4ed8" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 0,100 Q 400,50 800,100 T 1600,100"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse"
                        />
                    </svg> 
                </div> */}

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            事業内容
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            LLFは3つの事業を柱に、介護・医療業界の課題解決に貢献します。
                        </p>
                    </div>
                    <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 md:grid-cols-3">
                        {businessPillars.map((pillar, index) => (
                            <div
                                key={pillar.title}
                                className="transform transition-all duration-500 hover:scale-105"
                                style={{
                                    animationDelay: `${index * 0.3}s`
                                }}
                            >
                                <BusinessCard
                                    {...pillar}
                                    onClick={() => handleCardClick(pillar.id)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 経費削減コンサルモーダル */}
            <Modal
                isOpen={isModalOpen && selectedBusiness === 'cost-consulting'}
                onClose={closeModal}
                title="経費削減コンサルティング"
                maxWidth="max-w-7xl"
            >
                <CostConsultingSection isModal={true} />
            </Modal>

            {/* DX推進コンサルモーダル */}
            <Modal
                isOpen={isModalOpen && selectedBusiness === 'dx-consulting'}
                onClose={closeModal}
                title="DX推進コンサル事業"
                maxWidth="max-w-4xl"
            >
                <UnderConstructionSection isModal={true} />
            </Modal>

            {/* Unity運営事業モーダル */}
            <Modal
                isOpen={isModalOpen && selectedBusiness === 'unity-platform'}
                onClose={closeModal}
                title="Unity - 会員専用サイト"
                maxWidth="max-w-lg"
            >
                <UnityLoginSection isModal={true} />
            </Modal>
        </>
    );
};

export default BusinessOverview;
