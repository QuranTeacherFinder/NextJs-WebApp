import React, { useContext, createContext, useState } from 'react'

export interface onBoardingContextType {
  form: form
  setForm: React.Dispatch<React.SetStateAction<form>>
}
interface form {
  accType?: 'Teacher' | 'Parent' | 'Student' | null
  personalInfo?: any | null
}

const onBoardingContext = createContext<onBoardingContextType>(undefined!)

export const OnboardingProvider: React.FC = ({ children }) => {
  const Value = useProvideOnboarding()
  return <onBoardingContext.Provider value={Value}>{children}</onBoardingContext.Provider>
}

export const useOnBoardingContext = () => {
  return useContext(onBoardingContext)
}

const useProvideOnboarding = () => {
  const [form, setForm] = useState<form>({ accType: null, personalInfo: null })
  return {
    form,
    setForm
  }
}
