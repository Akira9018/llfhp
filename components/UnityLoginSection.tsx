import React, { useState } from 'react';
import { UserIcon, LockIcon, EyeIcon, EyeOffIcon } from './icons/UnityIcons';

interface UnityLoginSectionProps {
    isModal?: boolean;
}

const UnityLoginSection: React.FC<UnityLoginSectionProps> = ({ isModal = false }) => {
    const [memberId, setMemberId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // 実際のログイン処理の代わりにダミーの待機
        setTimeout(() => {
            setIsLoading(false);
            alert('現在サービス準備中のため、ログインできません。🙇‍♂️');
        }, 2000);
    };

    return (
        <div className={`${isModal ? 'p-6' : 'py-20'} bg-gradient-to-br from-white via-orange-50 to-orange-100 min-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden`}>
            {/* 背景装飾 */}
            <div className="absolute inset-0">
                {/* 装飾的な円形要素 */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-orange-200 rounded-full opacity-30 animate-pulse"
                        style={{
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}

                {/* グラデーション円 */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 max-w-md mx-auto px-4 w-full">
                {/* ロゴ・タイトル */}
                <div className="text-center mb-8">
                    <div className="mb-4">
                        <h1 className="text-4xl font-bold text-orange-600 mb-2">Unity</h1>
                        <p className="text-orange-700">医療×介護マッチングプラットフォーム</p>
                    </div>

                    <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
                </div>

                {/* ログインフォーム */}
                <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-orange-200">
                    <h2 className="text-2xl font-semibold text-orange-800 text-center mb-6">
                        会員ログイン
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* 会員ID */}
                        <div>
                            <label htmlFor="memberId" className="block text-sm font-medium text-orange-700 mb-2">
                                会員ID
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="memberId"
                                    value={memberId}
                                    onChange={(e) => setMemberId(e.target.value)}
                                    className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-lg text-orange-800 placeholder-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                                    placeholder="会員IDを入力してください"
                                    required
                                />
                                <div className="absolute right-3 top-3 text-orange-500">
                                    <UserIcon className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* パスワード */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-orange-700 mb-2">
                                パスワード
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-lg text-orange-800 placeholder-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                                    placeholder="パスワードを入力してください"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-orange-500 hover:text-orange-700 transition-colors"
                                >
                                    {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* ログインボタン */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>ログイン中...</span>
                                </div>
                            ) : (
                                'ログイン'
                            )}
                        </button>
                    </form>

                    {/* その他のリンク */}
                    <div className="mt-6 text-center space-y-3">
                        <button className="text-orange-600 hover:text-orange-800 transition-colors text-sm">
                            パスワードを忘れた方はこちら
                        </button>

                        <div className="border-t border-orange-200 pt-4">
                            <p className="text-orange-600 text-sm mb-3">
                                まだ会員でない方
                            </p>
                            <button
                                onClick={() => {
                                    const contactSection = document.getElementById('contact');
                                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-orange-700 hover:text-orange-900 transition-colors text-sm font-medium border border-orange-300 hover:border-orange-500 px-4 py-2 rounded-lg"
                            >
                                会員登録のお問い合わせ
                            </button>
                        </div>
                    </div>
                </div>

                {/* サービス説明 */}
                <div className="mt-6 text-center">
                    <p className="text-orange-700 text-sm">
                        医療機関と介護事業者をつなぐ<br />
                        次世代マッチングプラットフォーム
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UnityLoginSection;
