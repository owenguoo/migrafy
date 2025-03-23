'use client';
import { useState, useRef, useEffect } from 'react';

export default function VoiceChatPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const mediaStream = useRef<MediaStream | null>(null);
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const dataChannel = useRef<RTCDataChannel | null>(null);

  const startConversation = async () => {
    try {
      setIsRecording(true);
      setError(null);

      // Initialize audio context
      const audioContext = new AudioContext();
      await audioContext.resume();

      // Create audio element
      if (!audioElement.current) {
        audioElement.current = document.createElement('audio');
        audioElement.current.autoplay = true;
        document.body.appendChild(audioElement.current);
      }

      // Get user media
      mediaStream.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Create peer connection with proper configuration
      peerConnection.current = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
        bundlePolicy: 'max-bundle',
        rtcpMuxPolicy: 'require'
      });

      // Add local audio track
      peerConnection.current.addTrack(mediaStream.current.getTracks()[0]);

      // Handle incoming audio tracks
      peerConnection.current.ontrack = (event) => {
        if (event.track.kind === 'audio' && audioElement.current) {
          const remoteStream = new MediaStream([event.track]);
          audioElement.current.srcObject = remoteStream;
          audioElement.current.play().catch(error => {
            console.error('Audio play failed:', error);
          });
        }
      };

      // Create data channel
      dataChannel.current = peerConnection.current.createDataChannel('oai-events');
      
      // Handle data channel messages
      dataChannel.current.onmessage = (event) => {
        const serverEvent = JSON.parse(event.data);
        console.log('Server Event:', serverEvent);

        if (serverEvent.type === 'response.done') {
          if (serverEvent.response.status === 'failed') {
            console.error('Response failed:', serverEvent.response.status_details);
          }
        }
      };

      // Create and modify offer
      const offer = await peerConnection.current.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: false
      });
      
      await peerConnection.current.setLocalDescription(offer);
      
      // Modify SDP to include required parameters
      const modifiedSdp = offer.sdp?.replace(
        /a=mid:0/g,
        'a=mid:audio\r\n' +
        'a=rtpmap:97 opus/48000/2\r\n' +
        'a=fmtp:97 voice=verse\r\n' +
        'a=sendrecv\r\n'
      );

      // Send offer through proxy
      const response = await fetch('/api/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/sdp'
        },
        body: modifiedSdp
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Connection failed: ${errorText}`);
      }

      const answer = await response.text();
      await peerConnection.current.setRemoteDescription({
        type: 'answer',
        sdp: answer
      });

    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message);
      stopConversation();
    }
  };

  const stopConversation = () => {
    setIsRecording(false);
    if (peerConnection.current) {
      peerConnection.current.close();
      peerConnection.current = null;
    }
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach(track => track.stop());
      mediaStream.current = null;
    }
    if (audioElement.current) {
      audioElement.current.pause();
      audioElement.current.remove();
      audioElement.current = null;
    }
    dataChannel.current = null;
  };

  useEffect(() => {
    return () => {
      stopConversation();
    };
  }, []);

  return (
    <div className="container">
      <h1>AI Voice Assistant</h1>
      {error && <div className="error">{error}</div>}
      
      {!isRecording ? (
        <button onClick={startConversation} className="start-button">
          Start Conversation
        </button>
      ) : (
        <button onClick={stopConversation} className="stop-button">
          Stop Conversation
        </button>
      )}

      <style jsx>{`
        .container {
          padding: 2rem;
          text-align: center;
        }
        button {
          padding: 1rem 2rem;
          font-size: 1.2rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin: 1rem;
          transition: opacity 0.3s;
        }
        .start-button {
          background-color: #4CAF50;
          color: white;
        }
        .stop-button {
          background-color: #f44336;
          color: white;
        }
        .error {
          color: #ff4444;
          margin: 1rem 0;
          padding: 1rem;
          border: 1px solid #ff4444;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}