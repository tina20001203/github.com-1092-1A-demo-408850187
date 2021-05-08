function goPage(index) {
    const p = document.querySelector('#main');
    console.log('p', p);
    switch (index) {
      case 1:
        p.innerHTML = `<iframe src="./p1_87/tictactoe_87.html" width="100%" height="700px" > </iframe>`;
        break;
      case 2:
        p.innerHTML = `<iframe src="./p2_87/resume_87.html" width="100%" height="700px" > </iframe>`;
        break;
      case 3:
        p.innerHTML = `<iframe src="./p3_87/divjsDemo_87.html" width="100%" height="700px" > </iframe>`;
        break;
    }
  }