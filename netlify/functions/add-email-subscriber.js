const axios = require("axios");

exports.handler = async (event, context) => {
  const listId = "94538a4cbd";
  const apiKey = process.env.REACT_APP_APIKEY;

  const body = JSON.parse(event.body);
  const { email_address, merge_fields } = body;

  if (!email_address) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Please provide an email address." }),
    };
  }
  try {
    const payload = {
      email_address,
      merge_fields,
      status: "subscribed",
    };

    const { data } = await axios.post(
      `https://us14.api.mailchimp.com/3.0/lists/${listId}/members`,
      payload,
      {
        headers: {
          Authorization: `Basic ${apiKey}`,
        },
      }
    );
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.response.status,
      body: JSON.stringify(error),
    };
  }
};
