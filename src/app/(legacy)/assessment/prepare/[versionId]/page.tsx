import PreparePage from './components/PreparePage';

export default function Page({ params }: { params: { versionId: string } }) {
	return <PreparePage versionId={params.versionId} />;
}
