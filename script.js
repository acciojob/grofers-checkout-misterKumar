const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const table = document.querySelector("table");
	const prices = document.querySelectorAll(".price");
	let totalSum = 0;
	for(let i=0 ; i < prices.length ; i++){
		totalSum += Number(prices[i].innerText);
	}
	const tr = document.createElement("tr");
	tr.id = "ans";
	tr.innerHTML = `
		<td>${totalSum}<td>
		`;
	table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

