import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

export default function MaterialPage() {
  return (
    <Card sx={{ maxWidth: 400, margin: '20px auto', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Material UI
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple "Hello World" exercise. Implement a basic Card component with the default color palette and typography of MUI.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Material Button
        </Button>
      </CardActions>
    </Card>
  );
}