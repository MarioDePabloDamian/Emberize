export type ServiceContent = {
  name: string;
  tagline: string;
  text: string;
  bullets: string[];
};

export const servicesContent: ServiceContent[] = [
  {
    name: "Automatización",
    tagline: "Tu recepción invisible",
    text: "Conectamos tu WhatsApp, Instagram, email y CRM. Seguimiento automático de interesados, recordatorios de clases de prueba, avisos de renovación y recuperación de alumnos inactivos.",
    bullets: [
      "Seguimiento de leads sin mover un dedo",
      "Recordatorios que reducen ausencias",
      "Alertas de alumnos en riesgo de baja",
    ],
  },
  {
    name: "Chatbot IA",
    tagline: "Responde mientras das clase",
    text: "Un asistente entrenado con los horarios, tarifas y tipos de clase de tu estudio. Responde dudas, cualifica interesados y agenda sesiones de prueba a cualquier hora, todos los días.",
    bullets: [
      "Respuesta en segundos, 24/7",
      "Agenda pruebas directamente en tu calendario",
      "Habla con el tono de tu estudio",
    ],
  },
  {
    name: "Landing pages",
    tagline: "Tu estudio, en su mejor versión",
    text: "Páginas de captación diseñadas para convertir: sesión de prueba, bonos de temporada, pilates prenatal o clínico. Rápidas, medibles y conectadas a tus automatizaciones.",
    bullets: [
      "Diseño orientado a reserva",
      "Formularios conectados a tu CRM",
      "Optimizadas para anuncios de Meta y Google",
    ],
  },
  {
    name: "Agentes de voz",
    tagline: "Ninguna llamada sin respuesta",
    text: "Un agente de voz con IA atiende el teléfono de tu estudio: informa de horarios y precios, agenda visitas y te pasa las llamadas importantes. Como una recepcionista, sin nómina.",
    bullets: [
      "Atiende en plena clase o fuera de horario",
      "Agenda y confirma citas por teléfono",
      "Transcripción y resumen de cada llamada",
    ],
  },
  {
    name: "SEO, GEO y AEO",
    tagline: "Que te encuentren en Google… y en ChatGPT",
    text: "Posicionamos tu estudio donde busca tu cliente: SEO local para “pilates cerca de mí”, GEO para que las IAs como ChatGPT o Gemini te recomienden, y AEO para aparecer como respuesta directa.",
    bullets: [
      "SEO local: Google Maps y búsquedas de tu zona",
      "GEO: visibilidad en ChatGPT, Gemini y Perplexity",
      "AEO: respuestas destacadas y datos estructurados",
    ],
  },
];
