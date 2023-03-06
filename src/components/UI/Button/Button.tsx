import React from 'react';

import clsx from 'clsx';
import '@app/styles/components/ui/button.scss';

export enum ButtonType {
	Link,
	Fill,
}

interface IButton {
	children: React.ReactNode;
	type?: ButtonType;
}

export const Button: React.FC<IButton> = ({children, type}: IButton) => (
	<button
		type="button"
		className={clsx('btn', type === ButtonType.Link ? 'btn_link' : 'btn_fill')}
	>
		{children}
	</button>
)