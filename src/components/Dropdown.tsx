import React, { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  title: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: ReactNode;
  width?: string;
  onItemSelect?: (item: string) => void; // Optional callback for item selection
}

export const Dropdown = ({
  title,
  isActive,
  onMouseEnter,
  onMouseLeave,
  children,
  width = "w-[1000px]",
  onItemSelect, // Pass callback for selection handling
}: DropdownProps) => {
  const handleItemClick = (item: string) => {
    if (onItemSelect) {
      onItemSelect(item); // Trigger callback when an item is clicked
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors">
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
        />
      </button>
      {isActive && (
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 mt-2 ${width} mx-auto`}
          style={{ top: '5rem' }}
        >
          <div className="relative">
            {/* Bright line on top */}
            <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>

            <div className="bg-[#0f172a] border border-blue-900/30 rounded-xl shadow-2xl p-6 backdrop-blur-xl">
              {React.Children.map(children, (child) =>
                // Wrap each child with a click handler for selection
                React.cloneElement(child as React.ReactElement, {
                  onClick: () =>
                    handleItemClick((child as React.ReactElement).props.children),
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
