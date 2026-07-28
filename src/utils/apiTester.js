/**
 * Utility to test the Chatbot API for creating trial users.
 * This script sends a POST request with the keyword "teste iptv"
 * and logs the response containing the generated credentials.
 */

const API_URL = 'https://atmos.panelbr.site/api/chatbot/4vLbEn41gG/VpKDaPJLRA';

async function runTest() {
  console.log('🚀 Starting Chatbot API Test...');
  console.log(`🔗 Target URL: ${API_URL}`);
  console.log('💬 Payload: {"message": "teste iptv"}\n');

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'teste iptv' }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    console.log('✅ Test Successful!');
    console.log('-------------------------------------------');
    console.log('📝 API Response Data:');
    console.log(JSON.stringify(data, null, 2));
    console.log('-------------------------------------------');

    if (data.reply) {
      console.log('\n✨ Message from Bot:');
      console.log(data.reply);
    }
  } catch (error) {
    console.error('❌ Test Failed!');
    console.error(`Error details: ${error.message}`);
  }
}

// Run the test if called directly from Node/Browser
runTest();
