const getExchangeRates = new XMLHttpRequest();

getExchangeRates.addEventListener("readystatechange", () => {
  if (
    getExchangeRates.readyState == getExchangeRates.DONE &&
    getExchangeRates.status === 200
  ) {
    document.getElementById("loader").classList.remove("loader_active");
    const valueResponse = JSON.parse(getExchangeRates.responseText).response
      .Valute;
    const listRates = document.getElementById("items");
    for (let key in valueResponse) {
      const currencyInformation = `
            <div class="item">
                <div class="item__code">
                    ${valueResponse[key].CharCode}
                </div>
                <div class="item__value">
                    ${valueResponse[key].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`;
      listRates.insertAdjacentHTML("beforeEnd", currencyInformation);
    }
  }
});

getExchangeRates.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
getExchangeRates.send();
