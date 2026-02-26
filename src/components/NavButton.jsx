import { redirect } from "../utils/navigation";

function NavButton({name, link}) {
	return (
		<>
			<button className="h-8 w-25 m-auto bg-yellow-500 rounded-4xl text-white text-sm font-semibold transition-all hover:opacity-75 hover:scale-95 active:scale-105 duration-200">{name}</button>
		</>
	)
}

export default NavButton;