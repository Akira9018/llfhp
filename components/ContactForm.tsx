import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xkgzyjpz', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('お問い合わせを送信しました！担当者より3営業日以内にご連絡いたします。');
                // フォームをリセット
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                throw new Error('送信に失敗しました');
            }
        } catch (error) {
            console.error('送信エラー:', error);
            alert('送信に失敗しました。お手数ですが、もう一度お試しください。');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-20 sm:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
            {/* アニメーション背景 - 波紋エフェクト */}
            <div className="absolute inset-0 overflow-hidden">
                {/* 波紋エフェクト - 複数の波紋が時間差で発生 */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-300/20 rounded-full animate-ripple"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-200/15 rounded-full animate-ripple" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-400/25 rounded-full animate-ripple" style={{ animationDelay: '4s' }}></div>

                {/* 右上の波紋グループ */}
                <div className="absolute top-1/3 right-1/3 w-80 h-80 border border-blue-300/15 rounded-full animate-ripple-delayed"></div>
                <div className="absolute top-1/3 right-1/3 w-80 h-80 border border-blue-200/20 rounded-full animate-ripple-delayed" style={{ animationDelay: '3s' }}></div>

                {/* 中央下の波紋グループ */}
                <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-72 h-72 border border-blue-400/18 rounded-full animate-ripple" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-72 h-72 border border-blue-300/12 rounded-full animate-ripple" style={{ animationDelay: '5s' }}></div>

                {/* 微細な波紋 */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute border border-blue-200/10 rounded-full animate-ripple-delayed"
                        style={{
                            width: `${120 + i * 20}px`,
                            height: `${120 + i * 20}px`,
                            top: `${15 + i * 12}%`,
                            left: `${20 + i * 10}%`,
                            animationDelay: `${i * 1.2}s`,
                            animationDuration: `${6 + i * 0.5}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        お問い合わせ
                    </h2>
                    <p className="mt-4 text-lg text-blue-100">
                        ご質問やご相談がございましたら、お気軽にお問い合わせください。
                    </p>
                    <div className="mt-6 mx-auto w-20 h-1 bg-gradient-to-r from-blue-300 to-blue-100 rounded-full"></div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                                    お名前 <span className="text-blue-300">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-white placeholder-blue-200 backdrop-blur-sm"
                                    placeholder="お名前を入力"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                                    メールアドレス <span className="text-blue-300">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-white placeholder-blue-200 backdrop-blur-sm"
                                    placeholder="example@email.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-2">
                                電話番号
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-white placeholder-blue-200 backdrop-blur-sm"
                                placeholder="03-1234-5678"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                                お問い合わせ内容 <span className="text-blue-300">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-white placeholder-blue-200 backdrop-blur-sm resize-none"
                                placeholder="ご質問やご相談内容をお聞かせください..."
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`group inline-flex items-center px-10 py-4 border-2 border-white text-lg font-bold rounded-full text-white transition-all duration-300 transform backdrop-blur-sm ${isSubmitting
                                        ? 'bg-white/10 cursor-not-allowed opacity-70'
                                        : 'bg-white/20 hover:bg-white hover:text-blue-700 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        <span>送信中...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="mr-2">送信する</span>
                                        <svg
                                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;