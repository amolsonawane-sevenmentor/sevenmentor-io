import { FaGoogle, FaP, } from "react-icons/fa6"
import { Banknote, CreditCard, PiggyBank, } from "lucide-react"



export function PaymentOptions({ selectedMethod, onMethodSelect }) {
  return (
    <div className="grid grid-cols-4 gap-1 p-1 bg-gray-800 rounded-t-xl">
      {[
        { id: "IMPS", label: "IMPS Transfer", icon: Banknote },
        { id: "GPay", label: "Google Pay", icon: FaGoogle },
        { id: "PhonePay", label: "Phone Pay", icon: FaP },
        { id: "InstaMojo", label: "InstaMojo", icon: CreditCard },
      ].map((method) => (
        <button
          key={method.id}
          onClick={() => onMethodSelect(method.id )}
          className={`flex items-center justify-center gap-2 p-4 rounded-lg transition-all
            ${
              selectedMethod === method.id ? "bg-orange-600 text-white" : "bg-gray-900 text-gray-400 hover:bg-gray-700"
            }`}
        >
          <method.icon className="w-5 h-5 hidden md:block" />
          <span>{method.label}</span>
          {/* {method.id === selectedMethod && (
            <span className="ml-2 inline-block px-2 py-1 text-xs bg-orange-700 rounded-full">Recommended</span>
          )} */}
        </button>
      ))}
    </div>
  )
}

