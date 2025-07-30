import * as React from "react";
import { Popover } from "radix-ui";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { createRoot } from 'react-dom/client';

const SceneControlls = () => (
	<Popover.Root>
		<Popover.Trigger asChild>
			<button
				className="inline-flex size-[65px] cursor-default items-center justify-center rounded-full bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black ml-[5px] mt-[5px]"
				aria-label="Update dimensions"
			>
				<MixerHorizontalIcon className="w-8 h-8"/>
			</button>
		</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content
				className="w-[360px] rounded p-5 bg-gray-50"
				sideOffset={5}
			>
				<div className="flex flex-col gap-5">
					<p className="mb-2.5 text-[25px] font-medium leading-[19px] text-mauve12">
						Dimensions
					</p>
					<fieldset className="flex items-center gap-15">
						<label
							className="w-[75px] text-[25px] text-violet11"
							htmlFor="width"
						>
							Width
						</label>
						<input
							className="inline-flex h-[50px] w-full flex-1 items-center bg-gray-200 justify-center rounded px-2.5 text-[25px] leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
							id="width"
							defaultValue="100%"
						/>
					</fieldset>
					<fieldset className="flex items-center gap-15">
						<label
							className="w-[75px] text-[25px] text-violet11"
							htmlFor="maxWidth"
						>
							Max. width
						</label>
						<input
							className="inline-flex h-[50px] w-full flex-1 items-center bg-gray-200 justify-center rounded px-2.5 text-[25px] leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
							id="maxWidth"
							defaultValue="300px"
						/>
					</fieldset>
					<fieldset className="flex items-center gap-15">
						<label
							className="w-[75px] text-[25px] text-violet11"
							htmlFor="height"
						>
							Height
						</label>
						<input
							className="inline-flex h-[50px] w-full flex-1 items-center bg-gray-200 justify-center rounded px-2.5 text-[25px] leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
							id="height"
							defaultValue="25px"
						/>
					</fieldset>
					<fieldset className="flex items-center gap-15">
						<label
							className="w-[75px] text-[25px] text-violet11"
							htmlFor="maxHeight"
						>
							Max. height
						</label>
						<input
							className="inline-flex h-[50px] w-full flex-1 items-center bg-gray-200 justify-center rounded px-2.5 text-[25px] leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
							id="maxHeight"
							defaultValue="none"
						/>
					</fieldset>
				</div>
				<Popover.Close
					className="absolute right-[5px] top-[5px] inline-flex size-[25px] cursor-default items-center justify-center rounded-full text-violet11 outline-none hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
					aria-label="Close"
				>
					<Cross2Icon />
				</Popover.Close>
				<Popover.Arrow className="fill-white" />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);

export default SceneControlls;
