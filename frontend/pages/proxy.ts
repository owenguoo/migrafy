import { NextApiRequest, NextApiResponse } from 'next';
import getRawBody from 'raw-body';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Read raw request body
    const rawBody = await getRawBody(req);
    const sdpOffer = rawBody.toString('utf8');

    // Add required SDP parameters
    const modifiedSdp = `${sdpOffer}\r
a=rtpmap:97 opus/48000/2\r
a=fmtp:97 voice=verse`;

    const response = await fetch(
      `https://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/sdp'
        },
        body: modifiedSdp
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API Error:', {
        status: response.status,
        error: errorText
      });
      return res.status(response.status).send(errorText);
    }

    const answer = await response.text();
    res.status(200).send(answer);

  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({ 
      error: 'Connection failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}