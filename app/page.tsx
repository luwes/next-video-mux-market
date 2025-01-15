import Video from 'next-video';
import getStarted from '/videos/mux-promo.mp4';

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Video src={getStarted} style={{ display: 'block', width: '100%', aspectRatio: '16/9' }} />

    </div>
  );
}
