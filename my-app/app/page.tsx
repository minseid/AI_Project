'use client';
import { useState } from 'react';
import StarField from '@/components/StarField';
import LandingPage from '@/components/LandingPage';
import PetProfileSetup from '@/components/PetProfileSetup';
import ChatInterface from '@/components/ChatInterface';

type Stage = 'landing' | 'setup' | 'chat';

interface PetProfile {
  name: string;
  species: string;
  personality: string[];
  favoriteThings: string;
  memories: string;
}

export default function Home() {
  const [stage, setStage] = useState<Stage>('landing');
  const [petProfile, setPetProfile] = useState<PetProfile | null>(null);

  const handleProfileComplete = (profile: PetProfile) => {
    setPetProfile(profile);
    setStage('chat');
  };

  return (
    <main
      className="min-h-screen stars-bg"
      style={{ background: 'linear-gradient(160deg, #1A1226 0%, #2D2438 40%, #1E1830 100%)' }}
    >
      <StarField />

      {stage === 'landing' && (
        <LandingPage onStart={() => setStage('setup')} />
      )}

      {stage === 'setup' && (
        <PetProfileSetup onComplete={handleProfileComplete} />
      )}

      {stage === 'chat' && petProfile && (
        <ChatInterface profile={petProfile} />
      )}
    </main>
  );
}