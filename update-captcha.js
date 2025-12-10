// Script to update all forms with math CAPTCHA
const fs = require('fs');
const path = require('path');

const formsDir = path.join(__dirname, 'src/components/Forms');

// List of form files to update
const formFiles = [
  'BlogForm.jsx',
  'FranchiseForm.jsx',
  'HomePageForm.jsx',
  'PopUpForm/PopUpForm.jsx',
  'HiringPartnerForm.jsx'
];

// Function to update a form file
function updateFormFile(filePath) {
  console.log(`Updating ${filePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Update state variables - add captchaAnswer
  content = content.replace(
    /const \[captchaText, setCaptchaText\] = useState\(""\)/,
    'const [captchaText, setCaptchaText] = useState("")\n  const [captchaAnswer, setCaptchaAnswer] = useState("")'
  );
  
  // 2. Update generateCaptcha function
  content = content.replace(
    /const generateCaptcha = \(\) => {[\s\S]*?setCaptchaText\(result\)[\s\S]*?return result\s*}/,
    `const generateCaptcha = () => {
    // Generate two random numbers between 1-30 for first number and 1-10 for second number
    const num1 = Math.floor(Math.random() * 30) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    
    // Create a subtraction problem where result is always positive
    const firstNum = Math.max(num1, num2);
    const secondNum = Math.min(num1, num2);
    
    // Set the captcha display text
    setCaptchaText(\`\${firstNum} - \${secondNum} = \`);
    
    // Calculate and store the answer
    setCaptchaAnswer(String(firstNum - secondNum));
    
    return \`\${firstNum} - \${secondNum} = \`;
  }`
  );
  
  // 3. Update validation schema
  content = content.replace(
    /captcha: Yup\.string\(\)[\s\S]*?\.required\("Please enter the captcha"\)[\s\S]*?\.test\("captcha-match", "Captcha does not match", function\(value\) {[\s\S]*?return value === captchaText[\s\S]*?\}\),/,
    `captcha: Yup.string()
        .required("Please enter the answer")
        .test("captcha-match", "Incorrect answer, please try again", function(value) {
          return value === captchaAnswer
        }),`
  );
  
  // 4. Update CAPTCHA input field
  content = content.replace(
    /placeholder="Enter Captcha"|placeholder="ENTER CAPTCHA"/,
    'placeholder="ENTER ANSWER"'
  );
  
  content = content.replace(
    /<input[\s\S]*?name="captcha"[\s\S]*?>/,
    (match) => {
      if (!match.includes('inputMode="numeric"')) {
        return match.replace(
          />/,
          ' inputMode="numeric" pattern="[0-9]*" maxLength={3}>'
        );
      }
      return match;
    }
  );
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

// Process each form file
formFiles.forEach(formFile => {
  const filePath = path.join(formsDir, formFile);
  if (fs.existsSync(filePath)) {
    updateFormFile(filePath);
  } else {
    console.error(`File not found: ${filePath}`);
  }
});

console.log('All forms updated successfully!');