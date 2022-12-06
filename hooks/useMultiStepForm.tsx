import { ReactNode, useState } from 'react'

interface useMultiStepFormProps {
  steps: ReactNode[]
}

const useMultiStepForm = ({ steps }: useMultiStepFormProps): any => {
  const [step, setStep] = useState(0)

  function next (): void {
    if (step >= steps.length - 1) { setStep(step) } else { setStep(step + 1) }
  }

  function back (): void {
    if (step > 0) { setStep(step - 1) } else { setStep(0) }
  }

  function goTo (target: number): void {
    setStep(target)
  }

  const isFirstStep: boolean = step === 0
  const isLastStep: boolean = step === (steps.length - 1)
  return {
    step,
    item: steps[step],
    back,
    next,
    goTo,
    isFirstStep,
    isLastStep
  }
}

export default useMultiStepForm
