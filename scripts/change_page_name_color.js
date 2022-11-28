let blocks = document.querySelectorAll("a");
      const currentLocation = document.location.pathname.split("/").reverse()[0].split(".")[0];
      switch(currentLocation) {
        case "index" :
          blocks[0].style.color='red';
          break;
        case "photo":
          blocks[1].style.color='red';
          break;
        case "my_name_is_georgio":
          blocks[2].style.color='red';
          break;
        case "planing":
          blocks[3].style.color='red';
      }	  	