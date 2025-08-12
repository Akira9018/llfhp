import React from 'react';

export const ConstructionIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
            x="2"
            y="20"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
        />
        <path
            d="M6.5 20L7.5 4L16.5 4L17.5 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="currentColor"
            fillOpacity="0.1"
        />
        <circle
            cx="12"
            cy="8"
            r="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.2"
        />
        <path
            d="M10 12L14 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M10 16L14 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export const ToolsIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14.7 6.3C15.1 5.9 15.7 5.9 16.1 6.3L17.7 7.9C18.1 8.3 18.1 8.9 17.7 9.3L9 18H5V14L13.7 5.3C14.1 4.9 14.7 4.9 15.1 5.3L14.7 6.3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            fillOpacity="0.1"
        />
        <path
            d="M5 18L9 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M12 8L16 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export const WarningIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 2L2 20H22L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            fillOpacity="0.1"
        />
        <path
            d="M12 9V13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <circle
            cx="12"
            cy="17"
            r="1"
            fill="currentColor"
        />
    </svg>
);

export const GearIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
        />
        <path
            d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
            x="3"
            y="4"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
        />
        <path
            d="M16 2V6M8 2V6M3 10H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <circle
            cx="8"
            cy="14"
            r="1"
            fill="currentColor"
        />
        <circle
            cx="12"
            cy="14"
            r="1"
            fill="currentColor"
        />
        <circle
            cx="16"
            cy="14"
            r="1"
            fill="currentColor"
        />
    </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
        />
        <path
            d="M22 6L12 13L2 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
