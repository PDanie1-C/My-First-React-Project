import { redirect } from "../utils/navigation";

function LinkButton({ children, url }) {
	return (
		<>
			<div className="bg-yellow-400 h-15 w-full rounded-full flex items-center gap-20 p-5 mt-2 transition-all hover:bg-yellow-500 active:scale-105 duration-200" onClick={() => redirect(url)}>
				{children}
			</div>
		</>
	);
}

export default LinkButton;