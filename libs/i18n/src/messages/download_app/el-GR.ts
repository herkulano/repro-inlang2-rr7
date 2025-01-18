/* @ts-ignore */
export const download_app = (i) => {
	if (i.userGender === "male") return `${i.username} έχει να κατεβάσει το app.`;
	if (i.userGender === "female") return `${i.username} έχει να κατεβάσει το app.`;

	return "Η άνθρωπος έχει να κατεβάσει το app.";
};
