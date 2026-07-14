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
    text: "Automatizamos la respuesta y el seguimiento de consultas por WhatsApp, Instagram, email o formulario de tu landing: recordatorios de prueba, respuestas fuera de horario y avisos para que no se enfríe un interesado.",
    bullets: [
      "Seguimiento de consultas sin estar pendiente del móvil",
      "Recordatorios que reducen ausencias a prueba",
      "Respuestas automáticas fuera de horario de clase",
    ],
  },
  {
    name: "Asistentes IA",
    tagline: "Texto y voz, mientras das clase",
    text: "Asistentes entrenados con los horarios, tarifas y tipos de clase de tu estudio. Por chat responden dudas y cualifican interesados; por voz atienden llamadas, informan precios y coordinan visitas. Cuando hace falta una persona, te avisan.",
    bullets: [
      "Chat con el tono de tu estudio, incluso fuera de horario",
      "Voz que atiende el teléfono en plena sesión",
      "Transcripción y resumen de cada conversación",
    ],
  },
  {
    name: "Landing pages",
    tagline: "Tu estudio, en su mejor versión",
    text: "Páginas de captación diseñadas para convertir: sesión de prueba, bonos de temporada, pilates prenatal o clínico. Rápidas, medibles y conectadas a tus automatizaciones.",
    bullets: [
      "Diseño orientado a reserva",
      "Formularios listos para captar consultas",
      "Optimizadas para anuncios de Meta y Google",
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
