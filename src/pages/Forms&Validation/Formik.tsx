import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('El nombre es requerido')
    .min(3, 'Mínimo 3 caracteres'),
  email: Yup.string()
    .email('Email inválido')
    .required('El email es requerido'),
  password: Yup.string()
    .required('La contraseña es requerida')
    .min(6, 'Mínimo 6 caracteres'),
});

export default function FormikExample() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert('Formulario enviado: ' + JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={{ padding: '3rem', background: '#ffffff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>Formik</h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Librería para manejo de formularios con validación
        </p>

        {/* Card */}
        <div style={{
          background: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#1f2937', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Formulario de Registro
          </h2>

          <form onSubmit={formik.handleSubmit}>
            {/* Nombre */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#374151', fontWeight: '500', marginBottom: '0.5rem' }}>
                Nombre
              </label>
              <input
                type="text"
                {...formik.getFieldProps('name')}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: formik.touched.name && formik.errors.name
                    ? '2px solid #ef4444'
                    : '2px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
                placeholder="Juan Pérez"
              />
              {formik.touched.name && formik.errors.name && (
                <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#374151', fontWeight: '500', marginBottom: '0.5rem' }}>
                Email
              </label>
              <input
                type="email"
                {...formik.getFieldProps('email')}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: formik.touched.email && formik.errors.email
                    ? '2px solid #ef4444'
                    : '2px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
                placeholder="correo@ejemplo.com"
              />
              {formik.touched.email && formik.errors.email && (
                <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Contraseña */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#374151', fontWeight: '500', marginBottom: '0.5rem' }}>
                Contraseña
              </label>
              <input
                type="password"
                {...formik.getFieldProps('password')}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: formik.touched.password && formik.errors.password
                    ? '2px solid #ef4444'
                    : '2px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
                placeholder="••••••"
              />
              {formik.touched.password && formik.errors.password && (
                <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Botón */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#2563eb')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#3b82f6')}
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Características */}
        <div style={{
          background: '#f3f4f6',
          borderLeft: '4px solid #3b82f6',
          padding: '1rem',
          borderRadius: '4px'
        }}>
          <p style={{ color: '#374151', fontWeight: '600' }}>✓ Formik permite:</p>
          <ul style={{ color: '#6b7280', marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
            <li>Manejo automático de estado del formulario</li>
            <li>Validación integrada con Yup o Joi</li>
            <li>Tracking de errores y campos tocados</li>
            <li>Submit handlers simplificados</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
