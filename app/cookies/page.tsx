import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { legalController } from "@/lib/legal/contact";

export const metadata: Metadata = {
  title: "Política de cookies — Emberize",
  description: "Información sobre el uso de cookies en emberize.es.",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de cookies" current="cookies">
      <p className="lead">
        Esta política explica qué cookies y tecnologías similares utiliza {legalController.siteUrl}
        y cómo puedes gestionarlas.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando visitas
        un sitio web. También podemos usar almacenamiento local del navegador con fines
        similares (por ejemplo, recordar tu elección de cookies).
      </p>

      <h2>2. Cookies que utilizamos</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Tipo</th>
              <th scope="col">Duración</th>
              <th scope="col">Finalidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>emberize-cookie-consent</code>
              </td>
              <td>Propia (localStorage)</td>
              <td>Hasta que la borres</td>
              <td>Recordar si aceptaste cookies de analítica o solo las necesarias.</td>
            </tr>
            <tr>
              <td>GoHighLevel / LeadConnector</td>
              <td>Terceros</td>
              <td>Según el proveedor</td>
              <td>
                Analítica, seguimiento de visitas, formulario de contacto y widget de voz
                embebido. Solo se activan si aceptas todas las cookies.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Cookies técnicas o necesarias</h3>
      <p>
        Permiten el funcionamiento básico del sitio y recordar preferencias esenciales. No
        requieren consentimiento.
      </p>

      <h3>Cookies de analítica y terceros</h3>
      <p>
        Solo se activan si pulsas &quot;Acepta y habla con el asistente&quot; en el banner de
        cookies o desde el propio asistente.
      </p>

      <h2>3. Cómo gestionar las cookies</h2>
      <ul>
        <li>Usa el banner al entrar en la web: &quot;Acepta y habla con el asistente&quot; o &quot;Solo necesarias&quot;.</li>
        <li>
          Cambia tu elección en cualquier momento desde <strong>Preferencias</strong> en el
          pie de página.
        </li>
        <li>
          Puedes borrar cookies desde la configuración de tu navegador en cualquier momento.
        </li>
        <li>
          Si rechazas las no necesarias, no cargaremos el script de analítica de GoHighLevel
          ni el asistente de voz embebido.
        </li>
      </ul>

      <h2>4. Más información</h2>
      <p>
        Para saber cómo tratamos tus datos personales, consulta la política de privacidad
        (enlace en la cabecera). Para cualquier duda:{" "}
        <a href={`mailto:${legalController.email}`}>{legalController.email}</a>.
      </p>
    </LegalLayout>
  );
}

