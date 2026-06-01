import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>React Technology Showcase</h1>

        <p className="subtitle">
          Proyecto educativo para demostrar el uso de distintas tecnologías del
          ecosistema React mediante ejemplos simples, organizados y comparables.
        </p>

        <div className="badge-row">
          <span className="badge">React</span>
          <span className="badge">Vite</span>
          <span className="badge">TypeScript</span>
          <span className="badge">UI Libraries</span>
          <span className="badge">State Management</span>
        </div>
      </div>

      <div className="section">
        <h2>¿Qué contiene este proyecto?</h2>

        <p>
          Este proyecto está dividido en módulos donde cada uno demuestra una
          tecnología específica del ecosistema React con ejemplos mínimos pero
          funcionales.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>UI Frameworks</h3>
          <p>Comparación entre Chakra UI, Material UI y Tailwind CSS.</p>
        </div>

        <div className="card">
          <h3>State Management</h3>
          <p>Context API, MobX y Zustand con ejemplos equivalentes.</p>
        </div>

        <div className="card">
          <h3>Routing</h3>
          <p>Navegación con React Router y TanStack Router.</p>
        </div>

        <div className="card">
          <h3>Forms</h3>
          <p>Formik, React Hook Form y validación con Zod.</p>
        </div>

        <div className="card">
          <h3>Hooks</h3>
          <p>Ejemplos prácticos de hooks fundamentales de React.</p>
        </div>

        <div className="card">
          <h3>Testing</h3>
          <p>Pruebas básicas con Cypress.</p>
        </div>
      </div>
    </div>
  );
}