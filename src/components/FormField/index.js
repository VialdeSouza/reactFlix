import React from 'react'

export default function FormField({valores, onChange, name, type, label }) {
    return (
        <div>
        <label>{label}</label>
        <input
          value={valores.nome}
          onChange={onChange}
          type={type}
          name={name}
        />
      </div>
    )
}
