import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/main-layout';
import LearningContent from './pages/LearningContent';
import CertificationsObtained from './pages/CertificationsObtained';
import SettingsPage from './pages/SettingsPage';
import StarklaChat from './pages/StarklaChat/StarklaChat';
import Categories from './pages/Categories';
import Analytics from './pages/Analytics';
import CertificationContent from './pages/CertificationContent';
import ModuleDetails from './pages/ModuleDetails';
import WalletConnection from './pages/WalletConnection';
import HomePage from './pages/HomePage';
import PracticeSystem from './components/practices/exercises/drag-drop-sentence-builder';
import StoryGame from './pages/StoryGame';
import WordMatching from './pages/Games/WordMatching';
import GamePanel from './pages/GamePanel';
import DifficultySelector from './components/games/memory-card/difficulty-selector';
import GameBoard from './components/games/memory-card/game-board';
import Quiz from './pages/Quiz';
import GrammarContent from "./pages/GrammarContent";
import VocabularyPage from './pages/VocabularyContent';
import SpeakingPage from './pages/SpeakingContent';
import ListeningPage from './pages/ListeningContent';
import ReadingContent from "./pages/ReadingContent";
import CommunityInteractionPage from './pages/Community';
import Notifications from './pages/Notifications';
import SentenceBuilder from './components/practices/exercises/sentence-builder';
import FillInTheBlanksQuizPage from './pages/FillInTheBlanksQuizPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learning-content" element={<LearningContent />} />
          <Route path="/wallet-connection" element={<WalletConnection />} />
          <Route path="/certifications-obtained" element={<CertificationsObtained />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/starkla-chat" element={<StarklaChat />} />
          <Route path="/certification-content" element={<CertificationContent />} />
          <Route path="/module-details" element={<ModuleDetails />} />

          <Route path='/practiceSystem' element={<PracticeSystem/>}/>
          <Route path="/practice/sentence-builder" element={<SentenceBuilder />} />
          <Route path="/practice/drag-drop-sentence-builder" element={<PracticeSystem/>}/>
          <Route path="/notifications" element={<Notifications />} />

          <Route path="/story-game" element={<StoryGame />} />
          <Route path="/games/word-matching/" element={<WordMatching />} />
          <Route path="/games" element={<GamePanel />} />
          <Route path="/games/memory-card" element={<DifficultySelector />} />
          <Route path="/games/memory-card/:levelId" element={<GameBoard />} />
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/fill-in-the-blanks" element={<FillInTheBlanksQuizPage />} />
          <Route path="/grammar" element={<GrammarContent />} />
          <Route path='/vocabulary' element={<VocabularyPage />} />
          <Route path='/speaking' element={<SpeakingPage />} />
          <Route path='/listening' element={<ListeningPage />} />
          <Route path='/reading' element={<ReadingContent />} />
          <Route path='/people' element={<CommunityInteractionPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;