import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title,
    maxWidth = "max-w-6xl"
}) => {
    // ESCキーでモーダルを閉じる
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // スクロールを無効化
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto" data-modal>
            {/* オーバーレイ */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* モーダルコンテンツ */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div
                    className={`relative bg-white rounded-3xl shadow-2xl ${maxWidth} w-full max-h-[90vh] flex flex-col transform transition-all duration-300 scale-100`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* 固定ヘッダー */}
                    <div className="flex-shrink-0 bg-white border-b border-slate-200 px-6 py-4 rounded-t-3xl">
                        <div className="flex items-center justify-between">
                            {title && (
                                <h2 className="text-2xl font-bold text-slate-900">
                                    {title}
                                </h2>
                            )}
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200 ml-auto"
                                aria-label="モーダルを閉じる"
                                data-modal-close
                            >
                                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* スクロール可能なコンテンツ */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
