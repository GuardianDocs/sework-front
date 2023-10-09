'use client';

import Select from 'react-select';

interface SelectWithLabelProps {
	id: string;
	label: string;
	placeholder?: string;
	options: { label: string; value: string }[];
	defaultSelectedOptionId?: number;
	isLoading: boolean;
	onChange: (selectedOption: any) => void;
}

export default function SelectWithLabel({
	id,
	label,
	placeholder = '- Option -',
	options,
	defaultSelectedOptionId = 0,
	isLoading,
	onChange,
}: SelectWithLabelProps) {
	return (
		<div>
			<p className="mb-2">{label}</p>
			{/* 스타일링 : https://stackoverflow.com/questions/68137362/using-tailwind-forms-plugin-with-react-select */}
			<Select
				instanceId={id}
				options={options}
				defaultValue={options[defaultSelectedOptionId - 1]}
				placeholder={placeholder}
				isSearchable={true}
				// name="btype1"
				className="flex-1"
				isLoading={isLoading}
				onChange={onChange}
				styles={{
					input: base => ({
						...base,
						'input:focus': {
							boxShadow: 'none',
						},
					}),
					container: base => ({
						...base,
						flex: 1,
					}),
				}}
			/>
		</div>
	);
}
