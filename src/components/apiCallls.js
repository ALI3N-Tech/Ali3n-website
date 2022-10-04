import { async } from "@firebase/util";
import axios from "axios";

export const SubscribeUser = async (data) => {
  const listId = "94538a4cbd";
  const apiKey = "9465397e0c69aac81b2bfc060b006d10-us14";

  try {
    const response = await axios.post(
      `https://us14.api.mailchimp.com/3.0/lists/${listId}/members`,
      data,
      {
        headers: {
          Authorization: `Basic ${apiKey}`,
        },
      }
    );
    console.log(response);
    alert("Contact details were added successfully");
  } catch (error) {
    console.log(error);

    alert(error.message);
  }
};
