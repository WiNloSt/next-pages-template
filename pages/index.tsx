import dynamic from 'next/dynamic';

// import Analytics from '@/components/Analytics';

const DynamicAnalytics = dynamic(() => import('@/components/Analytics'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      {/* xxxx */}
      <DynamicAnalytics />
    </>
  );
}
