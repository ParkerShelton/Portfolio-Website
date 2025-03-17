const AWS = require('aws-sdk');

exports.handler = async (event) => {
  // Set CORS headers for browser preflight
  const headers = {
    'Access-Control-Allow-Origin': 'https://your-cloudfront-domain.com', // Update with your CloudFront domain
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  };
  
  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const SES = new AWS.SES({ region: 'us-east-1' }); // Update with your AWS region
    const body = JSON.parse(event.body);
    const { name, email, message } = body;

    // Email parameters
    const params = {
      Source: 'your-verified-email@example.com', // Must be verified in SES
      Destination: {
        ToAddresses: ['your-receiving-email@example.com']
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: `Contact Form Submission from ${name}`
        },
        Body: {
          Text: {
            Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
          },
          Html: {
            Data: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>
            `
          }
        }
      }
    };

    await SES.sendEmail(params).promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully!' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Failed to send email', error: error.message })
    };
  }
};