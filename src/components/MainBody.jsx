import mypic from '../assets/mypic.png';
import { FaFacebook, FaInstagram , FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import LinkButton from '../components/LinkButton';
import { MdEmail } from 'react-icons/md';
import { redirect } from '../utils/navigation';

function MainBody() {
	return (
		<>
			<div className="w-full flex flex-col items-center gap-5 my-15 p-5">
				<div className="flex flex-col items-center gap-2 text-center max-w-sm">
					<div className="bg-yellow-400 w-30 h-30 rounded-full overflow-clip">
						<img src={mypic}></img>
					</div>
					<h1 className="text-2xl text-white font-semibold">Paul Daniel Castillejo</h1>
					<p className="text-white/75 text-md">Student | DOST Scholar | Developer | Aspiring Data Engineer</p>

					<div className="flex gap-3 text-3xl">
						<FaFacebook className="transition-all hover:opacity-75 hover:scale-95 active:scale-105 duration-200" color="white" onClick={() => redirect("https://www.facebook.com/pauldaniel.castillejo/")}/>
						<FaDiscord className="transition-all hover:opacity-75 hover:scale-95 active:scale-105 duration-200" color="white" onClick={() => redirect("https://discord.com/users/pol000012")}></FaDiscord>
						<FaInstagram  className="transition-all hover:opacity-75 hover:scale-95 active:scale-105 duration-200" color="white" onClick={() => redirect("https://www.instagram.com/da.denyel/")}></FaInstagram >
					</div>
					
					<LinkButton url="https://www.linkedin.com/in/paul-daniel-castillejo/">
						<div className="text-5xl">
							<FaLinkedin color="white"/>
						</div>
						<p className="text-white text-2xl font-semibold">LinkedIn</p>
					</LinkButton>

					<LinkButton url="https://github.com/PDanie1-C">
						<div className="text-5xl">
							<FaGithub color="white"/>
						</div>
						<p className="text-white text-2xl font-semibold">GitHub</p>
					</LinkButton>
					
					<LinkButton url="https://leetcode.com/u/denyel/">
						<div className="text-5xl">
							<SiLeetcode color="white"/>
						</div>
						<p className="text-white text-2xl font-semibold">LeetCode</p>
					</LinkButton>
				</div>
			</div>
		</>
	);
}

export default MainBody;