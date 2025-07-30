import * as React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { createRoot } from 'react-dom/client';

const NavigationMenuDemo = () => {
	return (
		<NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
			<NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white p-1 shadow-[0_2px_10px] shadow-blackA4">
				<NavigationMenu.Item>
					<NavigationMenu.Link
						className="block select-none rounded px-3 py-3 text-[20px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
						href="https://github.com/radix-ui"
					>
						Github
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
					<div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
				<NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
			</div>
		</NavigationMenu.Root>
	);
};

const ListItem = React.forwardRef(
	({ className, children, title, ...props }, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<a
					className={classNames(
						"block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
						className,
					)}
					{...props}
					ref={forwardedRef}
				>
					<div className="mb-[5px] font-medium leading-[1.2] text-violet12">
						{title}
					</div>
					<p className="leading-[1.4] text-mauve11">{children}</p>
				</a>
			</NavigationMenu.Link>
		</li>
	),
);

export default NavigationMenuDemo;