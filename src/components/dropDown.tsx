import React, { useState } from 'react';

interface DropdownProps {
  options: Record<string, string>;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, placeholder = "Auswählen..." }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const optionEntries = Object.entries(options);

  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full px-4 py-3
          flex items-center justify-between
          
          bg-accent-400 
          border-b-4 border-l-4 border-accent-200
          rounded-lg
          
          text-primary-900 font-mono font-bold
          
          transition-all duration-75
          
          hover:bg-accent-300
          
          active:bg-accent-300 
          active:border-t-4 active:border-r-4 
          active:border-b-0 active:border-l-0
        "
      >
        <span className={value ? "text-text-primary" : "text-text-muted"}>
          {value ? options[value] : placeholder}
        </span>
        
        <svg 
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="
          absolute top-full left-0 right-0 mt-2
          
          bg-background-elevated
          border-2 border-border-accent
          rounded-lg
          
          shadow-[0_0_20px_rgba(0,217,255,0.2)]
          
          overflow-hidden
          z-50
        ">
          {optionEntries.map(([optionValue, optionLabel]) => (
            <button
              key={optionValue}
              onClick={() => handleSelect(optionValue)}
              className="
                w-full px-4 py-3
                text-left
                
                text-text-primary font-mono
                
                transition-all duration-150
                
                hover:bg-accent-500/20
                hover:text-accent-500
                hover:pl-6
                
                border-b border-border-secondary last:border-b-0
              "
            >
              {optionLabel}
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Dropdown;