const searchInput = document.querySelector("#search");
const resultsList = document.querySelector("#results");

searchInput.addEventListener("input", displayMatches);

function displayMatches() {
  const searchTerm = this.value;

  if (!searchTerm) {
    resultsList.innerHTML = "";
    return;
  }

  const regex = new RegExp(`(${searchTerm})`, "gi"); // Wrap in parentheses for capturing

  const data = [
    { name: "Apple" },
    { name: "Banana" },
    { name: "Cherry" },
    { name: "Date" },
    { name: "Elderberry" },
  ].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const html = data
    .map((item) => {
      const highlightedText = item.name.replace(
        regex,
        `<span class="highlight">$1</span>`
      ); // Use $1 to refer to the captured group
      return `<li>${highlightedText}</li>`;
    })
    .join("");

  resultsList.innerHTML = html;
}
