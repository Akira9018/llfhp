
import React from 'react';
import { ContactIcon, AnalysisIcon, ProposalIcon, ImplementationIcon, SupportIcon } from './icons/ProcessIcons';

const processSteps = [
    {
        step: '01',
        icon: ContactIcon,
        title: 'お問い合わせ・ご相談',
        description: 'まずはお電話またはお問い合わせフォームから、お気軽にご連絡ください。現状の課題やご要望を簡単にお伺いします。',
    },
    {
        step: '02',
        icon: AnalysisIcon,
        title: 'ヒアリング・現状分析',
        description: '専門のコンサルタントが訪問またはオンラインでお話を伺い、貴社の経営状況や業務フローを詳細に分析します。',
    },
    {
        step: '03',
        icon: ProposalIcon,
        title: 'ご提案・お見積もり',
        description: '分析結果に基づき、最適なコスト削減プランやDX化のロードマップをご提案します。透明性の高いお見積もりも同時にご提示します。',
    },
    {
        step: '04',
        icon: ImplementationIcon,
        title: 'ご契約・導入支援',
        description: 'ご提案内容にご納得いただけましたら、ご契約となります。計画に沿って、ツールの導入や業務改善を丁寧にサポートします。',
    },
    {
        step: '05',
        icon: SupportIcon,
        title: 'アフターフォロー',
        description: '導入後も定期的に効果測定を行い、継続的な改善をサポートします。新たな課題にも迅速に対応し、事業の成長を末永く支えます。',
    },
];

const Process: React.FC = () => {
    return (
        <section id="process" className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
            {/* アニメーション背景 */}
            <div className="absolute inset-0">
                {/* 接続線のネットワーク */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                    <defs>
                        <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                    {/* 動的な線 */}
                    <path d="M100,100 Q300,200 500,100 T900,100" stroke="url(#networkGradient)" strokeWidth="1" fill="none" className="animate-pulse" />
                    <path d="M200,300 Q400,200 600,300 T1000,300" stroke="url(#networkGradient)" strokeWidth="1" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
                </svg>

                {/* グラデーション効果 */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-blue-600/30 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-slate-600/20 to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        ご利用の流れ
                    </h2>
                    <p className="mt-4 text-lg text-blue-200">
                        お問い合わせからアフターフォローまで、一貫したサポートをご提供します。
                    </p>
                </div>
                <div className="mt-16 flow-root">
                    <ul className="-mb-8">
                        {processSteps.map((item, index) => (
                            <li key={index}>
                                <div className="relative pb-10">
                                    {index !== processSteps.length - 1 ? (
                                        <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-blue-600 animate-pulse" aria-hidden="true" />
                                    ) : null}
                                    <div className="relative flex items-start space-x-4">
                                        <div className="relative">
                                            <span className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center ring-8 ring-slate-800/50 shadow-xl">
                                                <span className="font-bold text-white text-sm">{item.step}</span>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <item.icon className="w-6 h-6 text-blue-300 filter drop-shadow-sm" />
                                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                            </div>
                                            <p className="mt-2 text-base text-blue-100 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Process;
