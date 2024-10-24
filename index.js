let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  // for (let i = 0; i < menuLinks.length; i++) {
  //   menuLinks[i]
  // }
  
  const topMenuLinks = document.querySelectorAll("a"); 
  // console.log(topMenuLinks)
  
  
  const mainEl = document.querySelector('main');
  mainEl.style.backgroundColor = "#4a4e4d";
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
  mainEl.classList.add('flex-ctr');
  
  // Part 2 Creating a menu bar 
  const topMenuEl = document.querySelector('#top-menu');
  topMenuEl.style.height = '100%'
  topMenuEl.style.backgroundColor = '#0e9aa7'
  topMenuEl.classList.add('flex-around');
  
  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%"; 
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
  subMenuEl.setAttribute('class', 'flex-around'); 
  
  subMenuEl.style.position = "absolute"; 
  subMenuEl.style.top = "0"; 
  
  subMenuEl.addEventListener('click', (e) => {
    e.preventDefault()
    e.target.classList.toggle('active'); 
  })
  
  
  
  topMenuEl.addEventListener('click', (e) => {
    // console.log(e);
    e.preventDefault(); 
    // console.log(e.target);
    if (e.target.tagName != "A") {
      return
    } else {
    e.target.classList.toggle('active'); 
    }
    
    if (e.target.classList.contains('active') == false) {
      if (e.target != topMenuLinks[0]) {
        subMenuEl.style.top = "100%";
        for (let i = 1; i < menuLinks.length; i++) { 
          if (e.target.innerHTML !== menuLinks[i]['text']) {
            continue
          } else {
            buildSubmenu(menuLinks[i]['subLinks'])
            // e.target.classList.toggle('active')
            break
  
          }
        }
       
      } else {
        e.target.classList.toggle('active'); 
        subMenuEl.style.top = "0";
      }
    } 
    // e.target.
  
      // below is to make sure that the handler is working 
      console.log(e);
  
  
    // return if the 
  })
  
  function buildSubmenu (arr) {
    while (arr.firstChild) {
      arr.removeChild(arr.firstChild); 
    }
    arr.forEach((e) => {
      const link = document.createElement('a'); 
      link.setAttribute('href', e.href); 
      link.innerHTML = e.text;
      subMenuEl.appendChild(link); 
    })
  }
  
  // Part 3 adding menu buttons
  
  menuLinks.forEach((link) => {
      const newLink = document.createElement('a');
      newLink.href = link.href;
      newLink.textContent = link.text; 
      topMenuEl.appendChild(newLink);
  })
  
  
  