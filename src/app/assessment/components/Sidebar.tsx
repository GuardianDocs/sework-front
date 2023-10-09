export default function Sidebar() {
	const menuList = [
		{
			number: 1,
			title: '사전준비',
			selected: true,
		},
		{
			number: 2,
			title: '유해 위험요인 파악',
			selected: false,
		},
		{
			number: 3,
			title: '위험성 수준판단',
			selected: false,
		},
	];

	return (
		<div className="flex flex-col gap-2">
			{menuList.map((item, index) => (
				<div
					key={index}
					className={`flex flex-col items-center p-2 text-white border rounded-lg bg-slate-500 border-slate-500 ${
						item.selected && 'bg-slate-700'
					}`}
				>
					<span>{item.number}</span>
					<span className="text-xs whitespace-nowrap">
						{item.title}
					</span>
				</div>
			))}
		</div>
	);
}
