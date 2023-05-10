import Button from 'antd/es/button';
import React, { useEffect, useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import '@app/scss/components/ui/counter.scss';

interface CounterProps {
	count: number;
	onChange: (value: number) => void;

	min?: number;
	max?: number;
}

export const Counter: React.FC<CounterProps> = ({
	count, onChange, min, max,
}: CounterProps) => {
	const [value, setValue] = useState<number>(count);

	useEffect(() => onChange(value), [value]);

	return (
		<div className="counter text-size_small">
			<Button
				type="text"
				icon={<MinusOutlined />}
				onClick={() => {
					if (min && value === min) return;
					setValue(value - 1);
				}}
			/>
			<input value={value} type="number" min={min} max={max} />
			<Button
				type="text"
				icon={<PlusOutlined />}
				onClick={() => {
					if (max && value >= max) return;
					setValue(value + 1);
				}}
			/>
		</div>
	);
};
