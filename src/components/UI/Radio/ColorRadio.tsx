import React, { useState } from 'react';

import '@app/scss/components/ui/colorRadioGroup.scss';

interface ColorRadioProps {
	items: Array<string>;
}

export const ColorRadio: React.FC<ColorRadioProps> = (props: ColorRadioProps) => {
	const [value, setValue] = useState<string>(props.items[0]);

	return (
		<div className="color-radio-group">
			{props.items.map((color: string) => (
				<div className="radio-wrap" key={color}>
					<input
						key={color}
						type="radio"
						name="color-radio-group"
						value={color}
						checked={value === color}
						onChange={(e) => setValue(e.target.value)}
					/>
					<span style={{ background: color }} />
				</div>
			))}
		</div>
	);
};
