import { z } from 'zod';
import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

// 1. Definimos el esquema de validación
const emailSchema = z.object({
  email: z.string().email({ message: "Formato de correo electrónico inválido" }),
});

export default function ZodPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleValidate = () => {
    // 2. Ejecutamos la validación
    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.issues[0].message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("¡El correo es válido según Zod!");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '20px auto', padding: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>Validación de Correo con Zod</Typography>
      <TextField 
        label="Ingresa tu correo" 
        variant="outlined" 
        size="small"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!error}
        helperText={error}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="secondary" onClick={handleValidate} fullWidth>
        Validar
      </Button>
      {success && (
        <Typography color="success.main" sx={{ mt: 2, fontWeight: 'bold' }}>
          {success}
        </Typography>
      )}
    </Box>
  );
}