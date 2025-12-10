export function IMPSForm() {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="">
        <div className="space-y-2 justify-center items-center">
          <h3 className="text-xl font-semibold text-orange-500">Pay only this bank details</h3>
          <div className="grid gap-4 ">
            <div className="flex gap-4">
              <label className="block text-sm text-gray-400">Account Name:</label>
              <p className="text-white">Seven Mentor PVT LTD</p>
            </div>
            <div className="flex gap-2">
              <label className="block text-sm text-gray-400">Bank:</label>
              <p className="text-white">Union bank of India</p>
            </div>
            <div className="flex gap-2">
              <label className="block text-sm text-gray-400">Account Number:</label>
              <p className="text-white">489401010935674</p>
            </div>
            <div className="flex gap-2">
              <label className="block text-sm text-gray-400">IFSC Code:</label>
              <p className="text-white">UBIN0548944</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

