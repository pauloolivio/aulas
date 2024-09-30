const links = [
    { text: "Link da disciplina", url: "https://classroom.google.com/c/Njg1ODc2ODg5NjM2?cjc=62gwjp7" },
  ];
  
  function loadLinks() {
    const list = document.getElementById("links-list");
    
    links.forEach(link => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.text;
      listItem.appendChild(anchor);
      list.appendChild(listItem);
    });
  }