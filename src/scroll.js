document.addEventListener("DOMContentLoaded", () => {
  console.log("page init");
  // Select all elements with tag name 'html' and 'body'
  let button = document.querySelectorAll("button");
  let docEl = document.querySelectorAll("html, body");
  // Select the first element with class name 'content'
  let wrap = document.getElementById("app");
  // Select the first element with class name 'close'
  let close = document.querySelector(".close");
  // Get the current scroll position
  let scrollTop = window.pageYOffset;

  // Add click event listener to button
  button.forEach((element) => {
    element.addEventListener("click", (e) => {
      dialogOpen();
      e.preventDefault();
    });
  });

  // Add click event listener to close button
  close.addEventListener("click", (e) => {
    dialogClose();
    e.preventDefault();
  });

  // Function to close dialog
  const dialogClose = () => {
    unlockBody();
    document.body.classList.remove("dialog-open"); // remove block
  };
  // Function to open dialog
  const dialogOpen = () => {
    document.body.classList.add("dialog-open"); // block
    lockBody();
  };

  // Function to lock the body
  const lockBody = () => {
    console.log("lock");

    // Change the height and overflow style of all elements in the docEl array
    docEl.forEach((el) => {
      el.style.overflow = "hidden";
    });
  };

  // Function to unlock the body
  const unlockBody = () => {
    console.log("unlock");
    // Change the height and overflow style of all elements in the docEl array
    docEl.forEach((el) => {
      el.style.overflow = "";
    });
  };
});
