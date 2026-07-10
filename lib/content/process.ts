export type ProcessStep = {
  belt: string;
  title: string;
  text: string;
};

export const processSteps: ProcessStep[] = [
  {
    belt: "Paso 01 — Respira",
    title: "Diagnóstico",
    text: "Analizamos cómo llegan y se pierden tus alumnos hoy: canales, horarios pico de consultas, visibilidad en Google y puntos de fuga. Sin compromiso.",
  },
  {
    belt: "Paso 02 — Alinea",
    title: "Diseño del sistema",
    text: "Te proponemos el combo exacto: qué automatizar, qué responde el chatbot, qué capta la landing, qué atiende la voz y qué posicionar en buscadores.",
  },
  {
    belt: "Paso 03 — Activa",
    title: "Implementación",
    text: "Lo montamos, lo entrenamos con los datos de tu estudio y lo probamos contigo. En 2-4 semanas está trabajando.",
  },
  {
    belt: "Paso 04 — Fluye",
    title: "Optimización continua",
    text: "Medimos conversaciones, reservas y posiciones en Google. Ajustamos cada mes para que el sistema mejore con constancia, como una buena práctica.",
  },
];
