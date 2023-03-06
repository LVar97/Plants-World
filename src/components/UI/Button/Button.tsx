import React from 'react';

import clsx from 'clsx';
import '@app/styles/components/ui/button.scss';

export enum ButtonType {
	Link,
	Fill,
}

interface IButton {
	children: React.ReactNode;
	onClick?: () => void;
	type?: ButtonType;
}

export const Button: React.FC<IButton> = ({children, type, onClick}: IButton) => (
	<button
		type="button"
		onClick={onClick}
		className={clsx('btn', type === ButtonType.Link ? 'btn_link' : 'btn_fill')}
	>
		{children}
	</button>
)