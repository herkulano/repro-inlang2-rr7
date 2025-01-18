/* @ts-ignore */
export const download_app = (i) => {
	if (i.userGender === "male") return `${i.username} has to download the app.`;
	if (i.userGender === "female") return `${i.username} has to download the app.`;

	return "The person has to download the app.";
};
