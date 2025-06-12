let lastScroll = 0
  let header = document.querySelector('.header')

  window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY

    if (currentScroll > lastScroll && currentScroll > 50) {
      header.classList.add('hidden')
    } else {
      header.classList.remove('hidden')
    }

    lastScroll = currentScroll
  })
  