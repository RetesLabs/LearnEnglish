import { businessMeetingPhrases } from './data/phrases';
import StudyMode from '../../components/StudyMode';
import ExamMode from '../../components/ExamMode';
import ProgressBoard from '../../components/ProgressBoard';

// Módulo de frases de reuniones de negocios. Reutiliza los componentes
// genéricos de Estudio, Examen y Progreso; no tiene pestaña Identificar.
export const businessMeetingPhrasesModule = {
  id: 'businessMeetingPhrases',
  navLabel: '💼 Business Meetings',
  title: '💼 Business Meeting Phrases',
  subtitle: 'Aprende frases útiles para reuniones de negocios y practica con flashcards.',
  storageKey: 'business-meeting-phrases-progress-v1',
  words: businessMeetingPhrases,
  labels: {
    front: 'Phrase',
    back: 'Meaning',
    chooseBack: 'Choose the correct meaning',
    matchBack: 'Which phrase matches this meaning?',
  },
  tabs: [
    { key: 'study', label: '📖 Estudio', Component: StudyMode },
    { key: 'exam', label: '📝 Examen', Component: ExamMode },
    { key: 'progress', label: '📊 Progreso', Component: ProgressBoard },
  ],
};
