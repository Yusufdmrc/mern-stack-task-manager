import React from "react";
import clsx from "clsx";

const Textbox = React.forwardRef(
  ({ type, placeholder, label, className, register, name, error }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label htmlFor={name} className="text-gray-300 text-sm font-medium">
            {label}
          </label>
        )}

        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 text-sm",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              "transition-colors duration-200",
              error && "border-red-500 focus:ring-red-500",
              className
            )}
          />
        </div>
        {error && <span className="text-xs text-red-400 mt-1">{error}</span>}
      </div>
    );
  }
);

Textbox.displayName = "Textbox";

export default Textbox;
