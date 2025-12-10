// Math CAPTCHA Implementation Guide
// Copy these code blocks to each form component

// 1. Add these state variables:
const [captchaText, setCaptchaText] = useState("");
const [captchaAnswer, setCaptchaAnswer] = useState("");

// 2. Replace the generateCaptcha function with this:
const generateCaptcha = () => {
  // Generate two random numbers between 1-30 for first number and 1-10 for second number
  const num1 = Math.floor(Math.random() * 30) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  
  // Create a subtraction problem where result is always positive
  const firstNum = Math.max(num1, num2);
  const secondNum = Math.min(num1, num2);
  
  // Set the captcha display text
  setCaptchaText(`${firstNum} - ${secondNum} = `);
  
  // Calculate and store the answer
  setCaptchaAnswer(String(firstNum - secondNum));
  
  return `${firstNum} - ${secondNum} = `;
};

// 3. Update the validation schema:
captcha: Yup.string()
  .required("Please enter the answer")
  .test("captcha-match", "Incorrect answer, please try again", function(value) {
    return value === captchaAnswer
  }),

// 4. Update the CAPTCHA UI:
<div className="flex items-center gap-2">
  {/* Math Captcha Display */}
  <div className="bg-gray-100 border border-orange-500 rounded-lg px-3 py-3 text-black font-bold text-lg tracking-wider select-none min-w-[120px] text-center">
    {captchaText}
  </div>
  
  {/* Captcha Input */}
  <input
    type="text"
    name="captcha"
    aria-label="Captcha"
    placeholder="Enter Answer"
    className="flex-1 !bg-white !pl-[35px] !text-black p-3 rounded-lg shadow-sm ring-1 ring-orange-500 focus:ring-orange-500 focus:border-orange-500 border-2 border-transparent border-orange-500"
    onChange={formik.handleChange}
    value={formik.values.captcha}
    maxLength={3}
    inputMode="numeric"
    pattern="[0-9]*"
  />
  
  {/* Reload Button */}
  <button
    type="button"
    onClick={handleCaptchaReload}
    className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg transition-colors"
    aria-label="Reload Captcha"
  >
    <RefreshCw className="w-5 h-5" />
  </button>
</div>