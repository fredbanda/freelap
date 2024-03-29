import { Fragment } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";

interface SwitchProps {
  isYearly: boolean;
  handlePlanTypeChange: () => void;
}

export function Switch({ isYearly, handlePlanTypeChange }: SwitchProps) {
  return (
    <Fragment>
      <span className={`text-[16px] font-semibold  ${isYearly ? 'text-blue-600' : 'text-yellow-700'} duration-100`}>
        Monthly
      </span>

      <RadixSwitch.Root
        checked={isYearly}
        onCheckedChange={handlePlanTypeChange}
        className={`
              w-10 h-5 p-1 relative bg-purple-700 rounded-full
            `}
      >
        <RadixSwitch.Thumb
          className={`
                w-3 h-3 block bg-white rounded-full
                ${isYearly ? 'translate-x-5	' : 'translate-x-0'} duration-300
              `}
        />
      </RadixSwitch.Root>

      <span className={`text-[16px] font-semibold ${isYearly ? 'text-blue-600' : 'text-yellow-900'} duration-100`}>
        Yearly
      </span>
    </Fragment>
  )
}