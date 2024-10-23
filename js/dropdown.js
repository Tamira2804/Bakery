document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
  toggle.addEventListener('click', function () {
    const menuId = this.getAttribute('data-target')
    const dropdown = document.getElementById(menuId)

    // Close all other drop-down menus
    document.querySelectorAll('.dropdown-content').forEach((menu) => {
      if (menu !== dropdown) {
        menu.style.display = 'none'
      }
    })

    // Toggle menu visibility
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none'
    } else {
      dropdown.style.display = 'block'
    }
  })
})
