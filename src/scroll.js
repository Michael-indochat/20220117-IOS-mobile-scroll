document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with tag name 'html' and 'body'
  const docEl = document.querySelectorAll("html, body"),
    // Select the first element with class name 'content'
    wrap = document.querySelector(".content"),
    // Select the first button
    button = document.querySelector("button"),
    // Select the first element with class name 'close'
    close = document.querySelector(".close"),
    // Get the current scroll position
    scrollTop = window.pageYOffset;

  // Add click event listener to button
  button.addEventListener("click", (e) => {
    overlayOpen();
    e.preventDefault();
  });

  // Add click event listener to close button
  close.addEventListener("click", (e) => {
    overlayClose();
    e.preventDefault();
  });

  // Function to close overlay
  const overlayClose = () => {
    unlockBody();
    document.body.classList.remove("overlay-open");
  };
  // Function to open overlay
  const overlayOpen = () => {
    document.body.classList.add("overlay-open");
    lockBody();
  };

  // Function to lock the body
  const lockBody = () => {
    if (scrollTop) {
      wrap.style.top = -scrollTop + "px";
    }

    // Change the height and overflow style of all elements in the docEl array
    docEl.forEach((el) => {
      el.style.height = "100%";
      el.style.overflow = "hidden";
    });
  };

  // Function to unlock the body
  const unlockBody = () => {
    // Change the height and overflow style of all elements in the docEl array
    docEl.forEach((el) => {
      el.style.height = "";
      el.style.overflow = "";
    });

    wrap.style.top = "";

    window.scrollTo(0, scrollTop);
    setTimeout(() => {
      scrollTop = null;
    }, 0);
  };
});
