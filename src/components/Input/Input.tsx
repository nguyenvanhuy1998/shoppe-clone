/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<any>
  classNameInput?: string
  classNameError?: string
  rules?: RegisterOptions
  errorMessage?: string
}

export default function Input({
  register,
  classNameInput = 'p-3  w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  rules,
  errorMessage,
  className,
  type,
  placeholder,
  name
}: Props) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input type={type} className={classNameInput} placeholder={placeholder} {...registerResult} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
