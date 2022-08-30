function searchBar() {
  // Declare variables
  const warning = document.getElementsByClassName("warning")[0];
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search1');
  filter = input.value.toUpperCase();
  ul = document.getElementById("searchGames");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      ul.style.display = "block";
      warning.innerHTML = '';
    } else {
      li[i].style.display = "none";
      warning.innerText += "No search Results found";
    }
   if (warning.innerHTML === "No search Results foundNo search Results found") {
      warning.innerHTML = "No search Results found";
    }
  if (txtValue.toUpperCase().indexOf(filter) === 0) {
      li[i].style.display = "none";
    }
  }
}