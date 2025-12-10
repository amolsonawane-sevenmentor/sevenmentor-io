import Image from "next/image"
import googlepay from "../../../../public/assets/googlepay.png"

export function GPayDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-orange-500">Google Pay Details</h3>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm text-gray-400">Business Name</label>
              <p className="text-white">SevenMentor Private Limited</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h3 className="text-xl font-semibold text-orange-500">Scan & Pay</h3>
        <div className="bg-white p-4 rounded-xl">
          <Image   src={googlepay} alt="QR Code" className="w-48 h-48" width={196} height={196} />
        </div>
      </div>
    </div>
  )
}

