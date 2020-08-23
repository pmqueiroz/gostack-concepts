import { Request, Response } from "express";
import CreateUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
	const user = CreateUser({
		name: "Pedro",
		email: "contato@pmqueiroz.me",
		password: "uYDSu%daA&8",
		techs: [
			"Node.js",
			"React.js",
			"React Native",
			{ title: "Javascript", experience: 100 },
		],
	});

	return response.json({
		message: "cleiton",
	});
}
