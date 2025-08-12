import React from 'react';

interface IconProps {
    className?: string;
}

// ステップ1: お問い合わせ・ご相談アイコン
export const ContactIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 9h8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 13h6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="1" fill="currentColor" />
    </svg>
);

// ステップ2: ヒアリング・現状分析アイコン
export const AnalysisIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11h6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 8v6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="11" r="2" fill="currentColor" opacity="0.3" />
    </svg>
);

// ステップ3: ご提案・お見積もりアイコン
export const ProposalIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14,2 14,8 20,8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="10,9 9,9 8,9" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="13" r="1" fill="currentColor" />
        <circle cx="9" cy="17" r="1" fill="currentColor" />
    </svg>
);

// ステップ4: ご契約・導入支援アイコン
export const ImplementationIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// ステップ5: アフターフォローアイコン
export const SupportIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="12,6 12,12 16,14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 15.83A5 5 0 0 1 12 12" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        <path d="M16 8.17A5 5 0 0 1 12 12" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
);
