import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ label, name, placeholder, error, ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
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

export { Textarea } 