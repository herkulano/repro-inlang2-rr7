/* @ts-ignore */
export const download_app = (i) => {
	if (i.userGender === "male") return `${i.username} tem que baixar o app.`;
	if (i.userGender === "female") return `${i.username} tem que baixar o app.`;

	return "A pessoa tem que baixar o app.";
};
