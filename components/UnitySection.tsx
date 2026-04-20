import React from 'react';

// Google フォームURLが決まったら以下を更新してください
const GOOGLE_FORM_URL = 'https://forms.gle/YOUR_FORM_URL';

const PLANS = [
    {
        id: 'free',
        name: '無料プラン',
        price: '¥0',
        period: '',
        description: 'まずは試してみたい方へ',
        features: ['問い合わせ受信', '施設情報登録', '返信は有料プランへ'],
        cta: 'お問い合わせ',
        ctaLink: '#contact',
        highlight: false,
    },
    {
        id: 'light',
        name: 'ライトプラン',
        price: '¥10,000',
        period: '/月（税別）',
        description: '少量の受け入れから始めたい施設に',
        features: ['問い合わせ受信', '施設情報登録', '月3件まで対応可能返信', '対応不可は無制限'],
        cta: '申し込みはこちら',
        ctaLink: GOOGLE_FORM_URL,
        highlight: true,
    },
    {
        id: 'pro',
        name: 'プロプラン',
        price: '¥30,000',
        period: '/月（税別）',
        description: '積極的に受け入れを増やしたい施設に',
        features: ['問い合わせ受信', '施設情報登録', '対応可能・対応不可が無制限', '返信率最大化'],
        cta: '申し込みはこちら',
        ctaLink: GOOGLE_FORM_URL,
        highlight: false,
    },
];

interface UnitySectionProps {
    isModal?: boolean;
}

const UnitySection: React.FC<UnitySectionProps> = ({ isModal = false }) => {
    return (
        <div className={`${isModal ? 'p-2' : 'py-20'} bg-white`}>
            <div className="max-w-4xl mx-auto px-4">

                {/* ヘッダー */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
                        <span className="text-3xl font-black text-orange-500">U</span>
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">UNITY</h2>
                    <p className="mt-2 text-lg font-medium text-orange-600">
                        医療×介護をつなぐマッチングプラットフォーム
                    </p>
                    <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
                        病院のMSW（医療ソーシャルワーカー）と介護・福祉施設をスムーズにつなぐ会員制サービスです。
                        退院支援の効率化と、施設への入居促進を同時に実現します。
                    </p>
                </div>

                {/* 特徴 */}
                <div className="grid grid-cols-3 gap-4 mb-10 text-center">
                    {[
                        { emoji: '🏥', label: 'MSW側', desc: '退院調整をスムーズに' },
                        { emoji: '🔗', label: 'マッチング', desc: '施設の空き情報を一元管理' },
                        { emoji: '🏠', label: '施設側', desc: '入居希望者をスピード対応' },
                    ].map((item) => (
                        <div key={item.label} className="bg-orange-50 rounded-xl p-4">
                            <div className="text-2xl mb-1">{item.emoji}</div>
                            <div className="text-xs font-bold text-orange-700">{item.label}</div>
                            <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                        </div>
                    ))}
                </div>

                {/* 料金プラン */}
                <div className="mb-8">
                    <h3 className="text-center text-lg font-bold text-slate-800 mb-2">料金プラン</h3>
                    <p className="text-center text-xs text-slate-500 mb-6">
                        ※ プラン間の違いは月間の「対応可能」返信件数のみです
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                        {PLANS.map((plan) => (
                            <div
                                key={plan.id}
                                className={`rounded-2xl border-2 p-5 flex flex-col ${
                                    plan.highlight
                                        ? 'border-orange-400 shadow-lg shadow-orange-100 relative'
                                        : 'border-slate-200'
                                }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                                            人気プラン
                                        </span>
                                    </div>
                                )}
                                <div className="mb-3">
                                    <p className="text-sm font-bold text-slate-800">{plan.name}</p>
                                    <p className="mt-1">
                                        <span className="text-2xl font-black text-slate-900">{plan.price}</span>
                                        <span className="text-xs text-slate-500">{plan.period}</span>
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">{plan.description}</p>
                                </div>
                                <ul className="space-y-1.5 mb-4 flex-1">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-1.5 text-xs text-slate-600">
                                            <span className="text-orange-500 font-bold mt-0.5">✓</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={plan.ctaLink}
                                    target={plan.ctaLink.startsWith('http') ? '_blank' : undefined}
                                    rel={plan.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className={`block text-center text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors ${
                                        plan.highlight
                                            ? 'bg-orange-500 text-white hover:bg-orange-600'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 招待制の説明 */}
                <div className="bg-slate-50 rounded-xl p-5 mb-8 text-sm text-slate-600">
                    <p className="font-bold text-slate-800 mb-1">📋 ご利用について</p>
                    <p>
                        UNITYは<strong>招待制</strong>の会員向けサービスです。
                        お申し込みいただいた後、弊社より招待メールをお送りします。
                        MSW（病院側）のアカウントは弊社が管理・発行いたします。
                    </p>
                </div>

                {/* 法的リンク + 連絡先 */}
                <div className="text-center text-xs text-slate-400 space-y-2">
                    <p>
                        ご不明な点はお気軽にお問い合わせください：
                        <a href="mailto:info@llf-inc.com" className="text-orange-500 hover:underline ml-1">
                            info@llf-inc.com
                        </a>
                    </p>
                    <p>
                        <a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 underline">
                            利用規約
                        </a>
                        <span className="mx-2">·</span>
                        <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 underline">
                            プライバシーポリシー
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UnitySection;
