import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, error, options, className = '', id, ...props }: SelectProps) {
  const generatedId = React.useId();
  const selectId = id || generatedId;
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label htmlFor={selectId} className="text-sm font-medium text-gray-700">{label}</label>}
      <select
        id={selectId}
        className={`flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
        {...props}
      >
        <option value="" disabled>선택해주세요</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
