import Link from 'next/link';
export function InstaMojo() {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="">
        <div className="space-y-2 justify-center items-center">
          <h3 className="text-xl font-semibold text-orange-500">Pay with InstaMojo</h3>
          <div className="flex justify-center items-center">
            <Link className="p-2 bg-orange-500 font-semibold transform transition hover:scale-105 text-white rounded-lg" target="_blank" href="https://www.instamojo.com/@sevenmentor">Proceed to Pay</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

