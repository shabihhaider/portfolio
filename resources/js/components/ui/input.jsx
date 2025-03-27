import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ label, name, placeholder, type, error, ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className="error" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

export { Input }