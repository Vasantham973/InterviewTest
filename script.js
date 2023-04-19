


    async function loadGallery() {
        try {
          const response = await fetch('data.json');
          const data = await response.json();
          const gallery = document.querySelector('.gallery');
          for (const image of data.images) {
            const imgE = document.createElement('div');
            imgE.classList.add("imageContainer")

            const img = document.createElement('img');
            img.src = image.url;
            img.alt = image.name;

            spn = document.createElement('div');
            spn.textContent = image.name;

            let aTag = document.createElement('a');

            fetch(image.url).then((res) => res.blob()).then((file) => {
              let tempURL = URL.createObjectURL(file);
              aTag.href = tempURL;
            })

            aTag.innerHTML = `<i class="fa-solid fa-download"></i> Download`;
            aTag.style.color = "white"
            aTag.download = ""
            spn.appendChild(aTag)
            
            imgE.appendChild(img);
            imgE.appendChild(spn);
            gallery.appendChild(imgE);
          }
        } catch (error) {
          console.error(error);
        }
      }
      
      loadGallery();
