import React, { useState } from 'react';
import { ElectricityIcon, GasIcon, DailyGoodsIcon, DocumentIcon, SimulationIcon, ChangeIcon, MoneyIcon, DiscountIcon } from './icons/CostConsultingIcons';

interface ConsultingStep {
    id: string;
    title: string;
    description: string;
    details: string;
    icon: React.ReactNode;
}

const consultingSteps: ConsultingStep[] = [
    {
        id: 'analysis',
        title: '明細書提出',
        description: '1年分の明細書をご準備',
        details: '電気代・ガス代の1年分の明細書をご準備いただくだけ。面倒な手続きは一切不要です。',
        icon: <DocumentIcon className="w-8 h-8" />
    },
    {
        id: 'proposal',
        title: '無料シミュレーション',
        description: '3日以内に削減効果を算出',
        details: 'LLF経由での契約変更による削減効果を3日以内に無料でシミュレーション。具体的な削減金額をお伝えします。',
        icon: <SimulationIcon className="w-8 h-8" />
    },
    {
        id: 'implementation',
        title: '契約変更サポート',
        description: 'LLF経由で業者契約変更',
        details: 'お客様に最適な業者をLLFが選定し、契約変更手続きを代行。面倒な手続きはすべてLLFが対応します。',
        icon: <ChangeIcon className="w-8 h-8" />
    },
    {
        id: 'monitoring',
        title: 'コスト削減実現',
        description: '年間コストの大幅削減',
        details: '契約変更後、すぐにコスト削減効果を実感。継続的なコスト削減で経営基盤を強化します。',
        icon: <MoneyIcon className="w-8 h-8" />
    }
];

interface CostConsultingSectionProps {
    isModal?: boolean;
}

const CostConsultingSection: React.FC<CostConsultingSectionProps> = ({ isModal = false }) => {
    const [activeStep, setActiveStep] = useState<string | null>(null);
    const [hoveredStep, setHoveredStep] = useState<string | null>(null);

    return (
        <section className={`relative ${isModal ? 'py-0' : 'py-20 sm:py-28'} bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden`}>
            {/* アニメーション背景 */}
            <div className="absolute inset-0">
                {/* 経費削減をイメージした円形グラフ風のアニメーション */}
                <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-8 border-blue-200 opacity-20 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border-6 border-blue-300 opacity-15 animate-pulse"></div>

                {/* コスト削減を表す下向き矢印 */}
                <svg className="absolute top-1/4 left-1/4 w-32 h-32 text-blue-400 opacity-30 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* セクションヘッダー */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        経費削減コンサルティング
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        <span className="text-blue-600 font-semibold">LLF経由での契約変更</span>により、電気・ガス・日用品のコストを大幅削減。
                        <br />
                        <span className="text-green-600 font-semibold">1年分の明細書で3日以内に無料シミュレーション</span>いたします。
                    </p>
                </div>

                {/* メイン図解エリア - インタラクティブ版 */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">
                            LLFの経費削減サービス
                        </h3>

                        {/* サービス内容の表示 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                                onClick={() => setActiveStep('analysis')}
                                onMouseEnter={() => setHoveredStep('analysis')}>
                                <div className="text-blue-600 mb-4">
                                    <ElectricityIcon className="w-10 h-10 mx-auto" />
                                </div>
                                <div className="text-lg font-bold text-blue-800 mb-2">
                                    電気代削減
                                </div>
                                <div className="text-sm text-blue-700">
                                    1年分の明細書で
                                </div>
                                <div className="text-sm font-semibold text-blue-800">
                                    3日以内に無料シミュレーション
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border-2 border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                                onClick={() => setActiveStep('proposal')}
                                onMouseEnter={() => setHoveredStep('proposal')}>
                                <div className="text-blue-600 mb-4">
                                    <GasIcon className="w-10 h-10 mx-auto" />
                                </div>
                                <div className="text-lg font-bold text-slate-800 mb-2">
                                    ガス代削減
                                </div>
                                <div className="text-sm text-slate-700">
                                    電気代と同様に
                                </div>
                                <div className="text-sm font-semibold text-slate-800">
                                    LLF経由で契約変更
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl border-2 border-blue-100 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                                onClick={() => setActiveStep('monitoring')}
                                onMouseEnter={() => setHoveredStep('monitoring')}>
                                <div className="text-blue-600 mb-4">
                                    <DailyGoodsIcon className="w-10 h-10 mx-auto" />
                                </div>
                                <div className="text-lg font-bold text-blue-700 mb-2">
                                    日用品コスト削減
                                </div>
                                <div className="text-sm text-slate-600">
                                    おむつ・パッド等を
                                </div>
                                <div className="text-sm font-semibold text-blue-700">
                                    会員価格で購入
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 営業資料セクション */}
                <div className="mt-16">
                    <div className="text-center mb-10">
                        <h4 className="text-2xl font-bold text-slate-800 mb-3">
                            サービス詳細資料
                        </h4>
                        <p className="text-slate-600">
                            具体的な削減事例とサービス内容をご紹介
                        </p>
                        <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
                    </div>

                    {/* 資料グリッド */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {[
                            { src: '/5.svg', title: '経費削減実績', description: 'これまでの削減実績と効果' },
                            { src: '/6.svg', title: 'サービス概要', description: 'サービス内容の詳細説明' },
                            { src: '/7.svg', title: '導入フロー', description: '導入から効果実現までの流れ' },
                            { src: '/8.svg', title: '料金プラン', description: '各種プランと料金体系' }
                        ].map((material, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-300"
                            >
                                {/* 資料画像 */}
                                <div className="relative overflow-hidden bg-slate-50">
                                    <img
                                        src={material.src}
                                        alt={material.title}
                                        className="w-full h-64 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* オーバーレイ */}
                                    <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white bg-opacity-90 rounded-full p-3 shadow-lg">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 資料情報 */}
                                <div className="p-6">
                                    <h5 className="text-lg font-semibold text-slate-800 mb-2">
                                        {material.title}
                                    </h5>
                                    <p className="text-slate-600 text-sm">
                                        {material.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 資料に関する説明 */}
                    <div className="mt-8 text-center">
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <p className="text-slate-700 mb-4">
                                <span className="font-semibold text-blue-700">詳細な資料</span>をご希望の方は、お気軽にお問い合わせください
                            </p>
                            <button
                                onClick={() => {
                                    const contactSection = document.getElementById('contact');
                                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                詳細資料を請求する
                            </button>
                        </div>
                    </div>
                </div>

                {/* インタラクティブステップ */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {consultingSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${activeStep === step.id
                                ? 'bg-blue-50 border-blue-300 shadow-lg'
                                : hoveredStep === step.id
                                    ? 'bg-green-50 border-green-300 shadow-md'
                                    : 'bg-white border-slate-200 hover:border-blue-200'
                                }`}
                            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                            onMouseEnter={() => setHoveredStep(step.id)}
                            onMouseLeave={() => setHoveredStep(null)}
                            style={{
                                animationDelay: `${index * 0.2}s`
                            }}
                        >
                            {/* ステップ番号 */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                            </div>

                            {/* アイコン */}
                            <div className="mb-4 text-center text-blue-600">
                                {step.icon}
                            </div>

                            {/* タイトル */}
                            <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                                {step.title}
                            </h3>

                            {/* 概要 */}
                            <p className="text-sm text-slate-600 text-center mb-4">
                                {step.description}
                            </p>

                            {/* 詳細（アクティブ時に表示） */}
                            <div className={`transition-all duration-300 overflow-hidden ${activeStep === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="border-t border-slate-200 pt-4">
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        {step.details}
                                    </p>
                                </div>
                            </div>

                            {/* クリック示唆 */}
                            <div className="text-center mt-4">
                                <span className="text-xs text-blue-600 font-medium">
                                    {activeStep === step.id ? '詳細を閉じる ↑' : 'クリックで詳細 ↓'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            1年分の明細書で無料シミュレーション
                        </h3>
                        <p className="text-blue-100 mb-6">
                            電気代・ガス代の明細書をご用意いただくだけで、3日以内に削減効果をお伝えします。
                            <br />
                            日用品については、下記の簡易ECサイトから会員価格をご確認ください。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                                無料シミュレーション申込み
                            </button>
                            <button
                                onClick={() => {
                                    // 日用品ECセクションへスクロール（後で実装）
                                    const ecSection = document.getElementById('daily-products-ec');
                                    if (ecSection) {
                                        ecSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="bg-slate-100 text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-white"
                            >
                                日用品価格を確認
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostConsultingSection;
