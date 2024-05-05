function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".profile-exp-item")

    const detail = $(item).children(".profile-exp-item-detail")

    $(detail).slideToggle()
}

