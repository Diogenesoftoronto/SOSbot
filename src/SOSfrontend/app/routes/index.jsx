import { Button } from 'mui/material/Button';

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to SOSbot</h1>
      <p>A discord bot that helps people get in contact with SOS helpers</p>
      <a href="">slack.io/sosbot</a>
      <Button variant='contained'>Github</Button>
    </div>
  );
}
