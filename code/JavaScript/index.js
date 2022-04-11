const start = Date.now();

await Promisse.all([
	fetch("https://localhost:44302/Field/fieldSet/1/1", {
		"headers": {
			"accept": "application/json, text/plain, */*",
			"accept-language": "en-US,en;q=0.9",
			"content-type": "application/json",
			"sec-ch-ua": "\" Not A;Brand\ ";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\ ";v=\"99\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Windows\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode: "cors",
			"sec-fetch-site" "cross-site",
		},
		"referrer": "http://localhost:42000/",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": "[{\"fieldId\":1,\"fieldValue\":\"Barton\"}]",
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}),
	fetch("https://localhost:44302/Field/fieldSet/1/1", {
		"headers": {
			"accept": "application/json, text/plain, */*",
			"accept-language": "en-US,en;q=0.9",
			"content-type": "application/json",
			"sec-ch-ua": "\" Not A;Brand\ ";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\ ";v=\"99\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Windows\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode: "cors",
			"sec-fetch-site" "cross-site",
		},
		"referrer": "http://localhost:42000/",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": "[{\"fieldId\":1,\"fieldValue\":\"Barton\"}]",
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}),
]);

const end = Date.now();

alert(`Execution time: ${(end - start) / 1000} seconds`);