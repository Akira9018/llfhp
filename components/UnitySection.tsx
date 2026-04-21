import React from 'react';

// Google フォームURLが決まったら以下を更新してください
const FACILITY_FORM_URL = 'https://forms.gle/ZBsFYr3P9v8o9ofh9';
const HOSPITAL_FORM_URL = 'https://forms.gle/t6zcGgqkY1LXYpXDA';

const PLANS = [
    {
        id: 'free',
        name: '無料プラン',
        price: '¥0',
        period: '',
        badge: null,
        description: 'まずはサービスを体験したい方へ',
        features: [
            { text: '問い合わせ受信', available: true },
            { text: '施設情報の登録・公開', available: true },
            { text: '対応可能の返信', available: false },
        ],
        cta: 'お問い合わせ',
        ctaHref: 'mailto:info@llf-inc.com',
        variant: 'outline' as const,
    },
    {
        id: 'light',
        name: 'ライトプラン',
        price: '¥10,000',
        period: '/月（税別）',
        badge: '人気',
        description: '少量の受け入れから始めたい施設に',
        features: [
            { text: '問い合わせ受信', available: true },
            { text: '施設情報の登録・公開', available: true },
            { text: '対応可能の返信（月3件）', available: true },
            { text: '対応不可の返信（無制限）', available: true },
        ],
        cta: '申し込みはこちら',
        ctaHref: FACILITY_FORM_URL,
        variant: 'solid' as const,
    },
    {
        id: 'pro',
        name: 'プロプラン',
        price: '¥30,000',
        period: '/月（税別）',
        badge: null,
        description: '積極的に受け入れを増やしたい施設に',
        features: [
            { text: '問い合わせ受信', available: true },
            { text: '施設情報の登録・公開', available: true },
            { text: '対応可能の返信（無制限）', available: true },
            { text: '対応不可の返信（無制限）', available: true },
        ],
        cta: '申し込みはこちら',
        ctaHref: FACILITY_FORM_URL,
        variant: 'outline' as const,
    },
];

const HOW_IT_WORKS = [
    {
        role: '病院 MSW',
        emoji: '🏥',
        steps: [
            '退院が近づいた患者の情報を案件として登録',
            '条件に合う施設へ一括で問い合わせ',
            'チャットで施設と直接やりとり・調整',
            '入居確定まで画面上で一元管理',
        ],
    },
    {
        role: '介護・福祉施設',
        emoji: '🏠',
        steps: [
            '施設情報・空き状況を登録',
            '病院から問い合わせが届く',
            '対応可能／不可をワンクリックで回答',
            'チャットで詳細を調整・入居確定',
        ],
    },
];

interface UnitySectionProps {
    isModal?: boolean;
}

const CheckIcon = () => (
    <svg className="w-4 h-4 text-black flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
);

const CrossIcon = () => (
    <svg className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const UnitySection: React.FC<UnitySectionProps> = () => {
    return (
        <div className="bg-white text-slate-900 font-sans">

            {/* ─── HERO ─── */}
            <section className="relative bg-black text-white px-8 py-16 text-center overflow-hidden">
                {/* 背景グリッド */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="inline-block border border-white/30 rounded-full px-4 py-1 text-xs tracking-widest uppercase mb-6 text-white/70">
                        Matching Platform
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">UNITY</h1>
                    <p className="text-xl md:text-2xl font-light text-white/80 mb-3">
                        医療 × 介護をつなぐ
                    </p>
                    <p className="text-base text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                        病院のMSWと介護・福祉施設をダイレクトにつなぐ会員制マッチングプラットフォーム。
                        退院支援の効率化と施設の入居促進を同時に実現します。
                    </p>
                    <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-black font-bold px-10 py-4 rounded-full text-sm hover:bg-slate-100 transition-colors"
                    >
                        申し込みはこちら →
                    </a>
                    <p className="mt-4 text-xs text-white/40">招待制サービスです。申し込み後に招待メールをお送りします。</p>
                </div>
            </section>

            {/* ─── NUMBERS ─── */}
            <section className="border-b border-slate-100 px-8 py-10">
                <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center">
                    {[
                        { num: '3', unit: 'プラン', desc: '無料・ライト・プロ' },
                        { num: '大阪・兵庫', unit: '', desc: 'サービスエリア（順次拡大）' },
                        { num: '2026', unit: '年5月', desc: 'サービス開始予定' },
                    ].map((item) => (
                        <div key={item.desc}>
                            <p className="text-3xl font-black text-black">{item.num}<span className="text-lg font-bold">{item.unit}</span></p>
                            <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── PROBLEM ─── */}
            <section className="px-8 py-14 max-w-3xl mx-auto">
                <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">Problem</p>
                <h2 className="text-2xl md:text-3xl font-black mb-8 leading-snug">
                    退院調整、まだ<br className="md:hidden"/>電話とFAXで消耗していませんか？
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { icon: '📞', text: '空き確認のために何十件も電話をかけ続ける' },
                        { icon: '📠', text: 'FAXでの情報共有で返答が遅く、患者の退院が滞る' },
                        { icon: '📋', text: '施設ごとの受け入れ条件を把握しきれない' },
                        { icon: '⏰', text: 'MSWの業務時間の大半が調整連絡に費やされる' },
                    ].map((item) => (
                        <div key={item.text} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                            <span className="text-2xl">{item.icon}</span>
                            <p className="text-sm text-slate-700 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <div className="inline-block w-px h-8 bg-slate-200 mb-4"></div>
                    <p className="text-sm font-bold text-black">UNITYがこれらをデジタルで解決します</p>
                </div>
            </section>

            {/* ─── HOW IT WORKS ─── */}
            <section className="bg-slate-950 text-white px-8 py-14">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">How it works</p>
                    <h2 className="text-2xl md:text-3xl font-black mb-10">かんたん4ステップ</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {HOW_IT_WORKS.map((side) => (
                            <div key={side.role}>
                                <div className="flex items-center gap-2 mb-5">
                                    <span className="text-2xl">{side.emoji}</span>
                                    <span className="text-sm font-bold text-white/80">{side.role}</span>
                                </div>
                                <div className="space-y-3">
                                    {side.steps.map((step, i) => (
                                        <div key={step} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/60">
                                                {i + 1}
                                            </div>
                                            <p className="text-sm text-white/70 leading-relaxed">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FEATURES ─── */}
            <section className="px-8 py-14 max-w-3xl mx-auto">
                <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">Features</p>
                <h2 className="text-2xl md:text-3xl font-black mb-10">主な機能</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: '📨', title: '問い合わせ管理', desc: '受信・返信・ステータスを一元管理' },
                        { icon: '💬', title: 'チャット機能', desc: '施設とMSWがリアルタイムでやりとり' },
                        { icon: '🏢', title: '施設情報登録', desc: '受け入れ条件・空き状況を掲載' },
                        { icon: '📊', title: 'ダッシュボード', desc: '今月の返信数・対応率を即確認' },
                    ].map((f) => (
                        <div key={f.title} className="border border-slate-200 rounded-xl p-4 hover:border-black transition-colors">
                            <div className="text-3xl mb-3">{f.icon}</div>
                            <p className="text-sm font-bold mb-1">{f.title}</p>
                            <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── PRICING ─── */}
            <section className="bg-slate-50 px-8 py-14">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">Pricing</p>
                    <h2 className="text-2xl md:text-3xl font-black mb-2">料金プラン</h2>
                    <p className="text-sm text-slate-500 mb-10">
                        プラン間の違いは「対応可能」返信の月間上限のみです。対応不可の返信は全プラン無制限です。
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        {PLANS.map((plan) => (
                            <div
                                key={plan.id}
                                className={`relative rounded-2xl p-6 flex flex-col ${
                                    plan.variant === 'solid'
                                        ? 'bg-black text-white'
                                        : 'bg-white border border-slate-200 text-slate-900'
                                }`}
                            >
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}
                                <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${plan.variant === 'solid' ? 'text-white/60' : 'text-slate-400'}`}>
                                    {plan.name}
                                </p>
                                <div className="mb-1">
                                    <span className="text-3xl font-black">{plan.price}</span>
                                    <span className={`text-xs ml-1 ${plan.variant === 'solid' ? 'text-white/50' : 'text-slate-400'}`}>{plan.period}</span>
                                </div>
                                <p className={`text-xs mb-6 ${plan.variant === 'solid' ? 'text-white/60' : 'text-slate-500'}`}>{plan.description}</p>
                                <ul className="space-y-2.5 flex-1 mb-6">
                                    {plan.features.map((f) => (
                                        <li key={f.text} className="flex items-start gap-2">
                                            {f.available
                                                ? <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.variant === 'solid' ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                : <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                            }
                                            <span className={`text-xs leading-relaxed ${!f.available ? 'text-slate-300' : plan.variant === 'solid' ? 'text-white/80' : 'text-slate-700'}`}>
                                                {f.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={plan.ctaHref}
                                    target={plan.ctaHref.startsWith('http') ? '_blank' : undefined}
                                    rel={plan.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className={`block text-center text-sm font-bold py-3 rounded-xl transition-colors ${
                                        plan.variant === 'solid'
                                            ? 'bg-white text-black hover:bg-slate-100'
                                            : 'bg-black text-white hover:bg-slate-800'
                                    }`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── INVITATION NOTE ─── */}
            <section className="px-8 py-10 max-w-3xl mx-auto">
                <div className="border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
                    <div className="text-2xl flex-shrink-0">📋</div>
                    <div>
                        <p className="font-bold text-sm mb-1">招待制サービスについて</p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            UNITYは安心してご利用いただくため、招待制を採用しています。
                            フォームよりお申し込みいただくと、弊社で内容を確認のうえ招待メールをお送りします。
                            MSW（病院側）のアカウント発行は弊社が管理いたします。
                            ご不明な点は <a href="mailto:info@llf-inc.com" className="underline font-medium">info@llf-inc.com</a> までお気軽にどうぞ。
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── FINAL CTA ─── */}
            <section className="bg-black text-white px-8 py-14 text-center">
                <h2 className="text-2xl md:text-3xl font-black mb-3">退院調整をもっとスマートに</h2>
                <p className="text-white/60 text-sm mb-8 max-w-sm mx-auto">
                    大阪・兵庫エリアの医療機関・介護施設の方、まずはお気軽にお申し込みください。
                </p>
                <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black font-bold px-10 py-4 rounded-full text-sm hover:bg-slate-100 transition-colors mb-6"
                >
                    申し込みはこちら →
                </a>
                <div className="flex justify-center gap-6 text-xs text-white/40">
                    <a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline">利用規約</a>
                    <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline">プライバシーポリシー</a>
                    <a href="mailto:info@llf-inc.com" className="hover:text-white/70 transition-colors">info@llf-inc.com</a>
                </div>
            </section>

        </div>
    );
};

export default UnitySection;
