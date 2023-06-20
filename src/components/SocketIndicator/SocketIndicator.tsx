import React, { useEffect } from 'react';
import styles from './SocketIndicator.module.scss';

export default function SocketIndicator() {
  const [isConnected, setIsConnected] = React.useState(false);

  const handleSocketOpen = () => {
    setIsConnected(true);
  };

  const handleSocketClose = () => {
    setIsConnected(false);
  };

  const handleSocketMessage = (event: MessageEvent) => {
    const message = event.data;
    if (message === 'connected') {
      setIsConnected(true);
    }
    if (message === 'disconnected') {
      setIsConnected(false);
    }
  };

  useEffect(() => {
    // Create a new WebSocket connection
    const ws = new WebSocket('ws://localhost:1234');

    ws.addEventListener('open', handleSocketOpen);
    ws.addEventListener('close', handleSocketClose);
    ws.addEventListener('message', handleSocketMessage);

    return () => {
      // Close the WebSocket connection when the component unmounts
      ws.close();
      ws.removeEventListener('open', handleSocketOpen);
      ws.removeEventListener('close', handleSocketClose);
    };
  }, []);

  return (
    <div
      className={`${styles.circleIndicator} ${
        isConnected ? 'ws-connected' : 'ws-disconnected'
      }`}
    />
  );
}
