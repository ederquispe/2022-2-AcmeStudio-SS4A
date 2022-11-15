$.get("_header.html", contentToInject => {
    $("#header-placeholders").replaceWith(contentToInject);
});
$.get("_footer.html", contentToInject => {
    $("#footer-placeholder").replaceWith(contentToInject);
});


