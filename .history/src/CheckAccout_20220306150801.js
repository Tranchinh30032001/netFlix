const CheckAccount = async (username, password) => {
	return new Promise((reslove, reject) => {
		setTimeout(() => {
			if (username === "chinhtranfc37" && password === "chinhlong123") {
				reslove("dang nhap thanh cong");
			} else {
				reject("that bai");
			}
		}, 2000);
	});
};
