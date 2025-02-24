const encrypt = require('./encrypt'); // Import the JWT encryption function

// 🎯 Objective: Generate a JWT with Expiry
console.log('🚀 Step 1: Setting up test environment...');

// 🛠 Setup
const SECRET_KEY = 'your-very-secure-secret-key'; // Replace with a strong secret key
const samplePayload = { userId: 123, role: 'admin' }; // Sample user payload

// 🏗️ Create JWT with Expiry
console.log('🔄 Step 2: Generating JWT with 1-hour expiry...');
const token = encrypt(samplePayload, SECRET_KEY, '1h');

if (token) {
  console.log('✅ Success: JWT Generated!');
  console.log('🔑 Generated JWT:', token);
} else {
  console.log('❌ Error: JWT Generation Failed');
}

console.log('🎉 Step 3: Test Complete!');
