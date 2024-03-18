'use client';

import { useEffect } from 'react';
import { useGetAssessment } from './hooks/useGetAssessment';
import { useParams, useRouter } from 'next/navigation';

type QueryType = {
  assessmentId: string;
};

const AssessmentPage = () => {
  const router = useRouter();
  const param = useParams();
  const { assessmentId } = param as QueryType;

  const { data, isLoading } = useGetAssessment(+assessmentId);

  useEffect(() => {
    if (!data && !isLoading) {
      router.push(`/dashboard/${assessmentId}/new-assessment`);
    }
  }, [assessmentId, data, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <></>;
};

export default AssessmentPage;
