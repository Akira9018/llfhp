import React from 'react';

interface IconProps {
    className?: string;
}

// コスト増大アイコン（上昇グラフ）
export const CostIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 17L9 11L13 15L21 7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 7H21V12" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="11" r="1" fill="currentColor"/>
        <circle cx="13" cy="15" r="1" fill="currentColor"/>
        <circle cx="21" cy="7" r="1" fill="currentColor"/>
    </svg>
);

// DX推進アイコン（デジタル変革）
export const DxIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round"/>
        <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round"/>
        <path d="M7 9L12 14L17 9" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="9" r="1" fill="currentColor"/>
        <circle cx="17" cy="9" r="1" fill="currentColor"/>
    </svg>
);

// 連携不足アイコン（切断されたリンク）
export const UnityIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="12" x2="12" y2="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2,2"/>
        <line x1="12" y1="16" x2="16" y2="12" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2,2"/>
    </svg>
);

// 効率化アイコン（ターゲット・最適化）
export const EfficiencyIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <path d="M12 2L12 6" strokeLinecap="round"/>
        <path d="M12 18L12 22" strokeLinecap="round"/>
        <path d="M22 12L18 12" strokeLinecap="round"/>
        <path d="M6 12L2 12" strokeLinecap="round"/>
    </svg>
);
