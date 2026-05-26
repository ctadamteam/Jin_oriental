import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: string;
}

export function Checkbox({ label, error, className = '', id, ...props }: CheckboxProps) {
  const generatedId = React.useId();
  const checkboxId = id || generatedId;
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id={checkboxId}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
          {...props}
        />
        <label htmlFor={checkboxId} className="text-sm text-gray-700 select-none">
          {label}
        </label>
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
