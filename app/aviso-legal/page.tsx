import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { legalController } from "@/lib/legal/contact";

export const metadata: Metadata = {
  title: "Aviso legal — Emberize",
  description: "Información legal del sitio web emberize.es conforme a la LSSI.",
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso legal" current="aviso-legal">
      <p className="lead">
        En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
        la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de
        los datos siguientes.
      </p>

      <h2>1. Titular del sitio web</h2>
      <ul>
        <li>
          <strong>Titular:</strong> {legalController.fullName}
        </li>
        <li>
          <strong>Nombre comercial del proyecto:</strong> {legalController.siteName}
        </li>
        <li>
          <strong>Correo electrónico:</strong>{" "}
          <a href={`mailto:${legalController.email}`}>{legalController.email}</a>
        </li>
        <li>
          <strong>Sitio web:</strong> {legalController.siteUrl}
        </li>
      </ul>
      <p>
        El titular actúa como persona física en fase inicial del proyecto {legalController.siteName}
        , dedicado a servicios de automatización, IA y marketing digital para estudios de
        pilates.
      </p>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web tiene por objeto informar sobre los servicios de {legalController.siteName}
        y permitir a los interesados solicitar información o un diagnóstico gratuito.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio implica la aceptación de este aviso legal, la política
        de privacidad y la política de cookies (enlaces en la cabecera). El usuario se
        compromete a hacer un uso lícito del sitio y de los canales de contacto.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Los contenidos del sitio (textos, diseño, logotipos, código y elementos gráficos)
        son propiedad del titular o se utilizan con licencia. Queda prohibida su reproducción
        sin autorización expresa.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        El titular no se hace responsable de interrupciones del servicio, virus o
        incidencias derivadas del uso de Internet, ni del contenido o políticas de sitios
        web de terceros enlazados.
      </p>

      <h2>6. Enlaces</h2>
      <p>
        Si el sitio incluye enlaces a páginas externas, estos se ofrecen solo a título
        informativo. El titular no controla ni asume responsabilidad por su contenido.
      </p>

      <h2>7. Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier controversia,
        las partes se someten a los juzgados y tribunales que correspondan según la normativa
        aplicable al consumidor o usuario.
      </p>
    </LegalLayout>
  );
}
