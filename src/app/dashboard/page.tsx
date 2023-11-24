import Headline from '@/components/typography/Headline/Headline';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Headline color="blue500" size="s">
        Assessment ID: 5
      </Headline>
      <Link href="/dashboard/step1?assessmentId=5">Step 1</Link>
      <Link href="/dashboard/step2?assessmentId=5">Step 2</Link>
      <Link href="/dashboard/step3?assessmentId=5">Step 3</Link>
      <Link href="/dashboard/step4?assessmentId=5">Step 4</Link>
    </>
  );
}
