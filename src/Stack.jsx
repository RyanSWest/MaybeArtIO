import Stack from 'react-bootstrap/Stack';
import {Button} from 'react-bootstrap';
function HorizontalExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">   <Button  color='secondary'variant='primary'/>' </div>
      <div className="p-2">  <Button/> </div>
      <div className="p-2">Third item</div>
    </Stack>
  );
}

export default HorizontalExample;