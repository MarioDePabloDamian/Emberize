import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { legalController } from "@/lib/legal/contact";

export const metadata: Metadata = {
  title: "Política de privacidad — Emberize",
  description: "Información sobre el tratamiento de datos personales en emberize.es (RGPD y LOPDGDD).",
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de privacidad" current="privacidad">
      <p className="lead">
        Esta política explica cómo se tratan los datos personales en {legalController.siteUrl}{" "}
        conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Identidad:</strong> {legalController.fullName}
        </li>
        <li>
          <strong>Contacto:</strong>{" "}
          <a href={`mailto:${legalController.email}`}>{legalController.email}</a>
        </li>
        <li>
          <strong>Sitio web:</strong> {legalController.siteUrl}
        </li>
      </ul>
      <p>
        {legalController.siteName} es un proyecto de servicios de automatización e IA para
        estudios de pilates, gestionado en fase inicial por la persona física indicada.
      </p>

      <h2>2. Datos que recogemos</h2>
      <p>Podemos tratar las siguientes categorías de datos:</p>
      <ul>
        <li>
          <strong>Datos de contacto:</strong> nombre, email, nombre del estudio y mensaje
          enviados mediante el formulario.
        </li>
        <li>
          <strong>Datos técnicos:</strong> dirección IP, identificadores de cookies, navegador
          y páginas visitadas (si aceptas cookies de analítica).
        </li>
        <li>
          <strong>Datos de voz:</strong> si utilizas el asistente de voz, el proveedor
          integrado puede procesar audio según su propia política.
        </li>
      </ul>

      <h2>3. Finalidad y base legal</h2>
      <ul>
        <li>
          <strong>Responder consultas y solicitudes de diagnóstico</strong> — base legal:
          consentimiento al enviar el formulario.
        </li>
        <li>
          <strong>Gestión comercial de posibles clientes</strong> — base legal: consentimiento
          e interés legítimo en atender solicitudes recibidas.
        </li>
        <li>
          <strong>Analítica y mejora del sitio</strong> — base legal: consentimiento (cookies
          no necesarias).
        </li>
        <li>
          <strong>Asistente de voz</strong> — base legal: consentimiento al usar el micrófono y
          aceptar cookies cuando aplique.
        </li>
      </ul>

      <h2>4. Encargados del tratamiento</h2>
      <p>Utilizamos proveedores que pueden tratar datos por nuestra cuenta, entre ellos:</p>
      <ul>
        <li>
          <strong>GoHighLevel / LeadConnector</strong> — formulario de contacto, analítica y widget
          de voz embebido.
        </li>
        <li>
          <strong>GitHub Pages</strong> — alojamiento del sitio web estático.
        </li>
      </ul>
      <p>
        Estos proveedores pueden estar ubicados fuera del Espacio Económico Europeo. En ese
        caso, se aplican las garantías previstas por el RGPD (cláusulas contractuales tipo u
        otras medidas equivalentes ofrecidas por el proveedor).
      </p>

      <h2>5. Plazo de conservación</h2>
      <ul>
        <li>Consultas comerciales: mientras dure la relación y plazos legales aplicables.</li>
        <li>Datos de cookies: según la política de cookies y tu elección.</li>
        <li>
          Si no se concreta un proyecto, los datos de contacto se eliminarán en un plazo
          razonable o cuando lo solicites.
        </li>
      </ul>

      <h2>6. Tus derechos</h2>
      <p>Puedes ejercer los siguientes derechos escribiendo a {legalController.email}:</p>
      <ul>
        <li>Acceso, rectificación y supresión</li>
        <li>Oposición y limitación del tratamiento</li>
        <li>Portabilidad de los datos</li>
        <li>Retirar el consentimiento en cualquier momento</li>
      </ul>
      <p>
        También puedes presentar una reclamación ante la Agencia Española de Protección de
        Datos (
        <a href="https://www.aepd.es" rel="noopener noreferrer" target="_blank">
          www.aepd.es
        </a>
        ).
      </p>

      <h2>7. Menores de edad</h2>
      <p>
        Este sitio está dirigido a titulares de estudios de pilates y profesionales. No
        recopilamos intencionadamente datos de menores de 14 años.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables. Ningún sistema en Internet es
        100 % seguro; si detectas un problema, contáctanos.
      </p>

      <h2>9. Cambios</h2>
      <p>
        Podemos actualizar esta política. La fecha de revisión aparece en la cabecera del
        documento.
      </p>
    </LegalLayout>
  );
}

