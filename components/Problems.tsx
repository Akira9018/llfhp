
import React from 'react';
import { CostIcon, DxIcon, UnityIcon, EfficiencyIcon } from './icons/ProblemIcons';

const problems = [
    {
        icon: CostIcon,
        title: '経営改善まで手が回らない',
        description: '日々の業務に追われ、コスト削減や将来の事業計画を考える時間がない。'
    },
    {
        icon: DxIcon,
        title: 'DX化、何から始めるべきか',
        description: 'ITツールの必要性は感じているが、何が自社に合うのか、どう導入すれば良いか分からない。'
    },
    {
        icon: EfficiencyIcon,
        title: '見えないコストが増加',
        description: '電気代やガス代などの経費が適切か判断できず、無駄な出費があるかもしれないと不安。'
    },
    {
        icon: UnityIcon,
        title: '医療・介護連携の不足',
        description: '地域の医療機関や他の事業者との連携を深めたいが、きっかけや方法が見つからない。'
    }
];

const Problems: React.FC = () => {
    return (
        <section id="problems" className="relative py-20 sm:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
            {/* アニメーション背景 */}
            <div className="absolute inset-0">
                {/* 浮遊パーティクル */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-ping`}
                        style={{
                            left: `${10 + i * 8}%`,
                            top: `${15 + (i % 4) * 20}%`,
                            animationDelay: `${i * 0.8}s`,
                            animationDuration: `${3 + i * 0.2}s`
                        }}
                    ></div>
                ))}

                {/* グラデーション図形 */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-blue-700 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-600 rounded-full opacity-15 animate-bounce" style={{ animationDuration: '4s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="font-semibold text-blue-300 text-lg">こんなお悩みありませんか？</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        介護・医療現場が直面する課題
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
                        一つでも当てはまるなら、LLFが力になります。専門的な知見で、貴社の課題を解決に導きます。
                    </p>
                </div>
                <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {problems.map((problem, index) => (
                        <div
                            key={problem.title}
                            className="p-6 sm:p-8 text-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
                            style={{
                                animationDelay: `${index * 0.2}s`
                            }}
                        >
                            <div className="mb-4 flex justify-center">
                                <problem.icon className="w-12 h-12 text-blue-200 filter drop-shadow-lg" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
                            <p className="text-sm text-blue-100 leading-relaxed">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Problems;
