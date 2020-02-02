!function(t) {
    t.fn.theiaStickySidebar = function(i) {
        function e(i, e) {
            return !0 === i.initialized || !(t("body").width() < i.minWidth) && (function(i, e) {
                i.initialized = !0,
                0 === t("#theia-sticky-sidebar-stylesheet-" + i.namespace).length && t("head").append(t('<style id="theia-sticky-sidebar-stylesheet-' + i.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),
                e.each(function() {
                    function e() {
                        n.fixedScrollTop = 0,
                        n.sidebar.css({
                            "min-height": "1px"
                        }),
                        n.stickySidebar.css({
                            position: "static",
                            width: "",
                            transform: "none"
                        })
                    }
                    var n = {};
                    if (n.sidebar = t(this),
                    n.options = i || {},
                    n.container = t(n.options.containerSelector),
                    0 == n.container.length && (n.container = n.sidebar.parent()),
                    n.sidebar.parents().css("-webkit-transform", "none"),
                    n.sidebar.css({
                        position: n.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }),
                    n.stickySidebar = n.sidebar.find(".theiaStickySidebar"),
                    0 == n.stickySidebar.length) {
                        var o = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                        n.sidebar.find("script").filter(function(t, i) {
                            return 0 === i.type.length || i.type.match(o)
                        }).remove(),
                        n.stickySidebar = t("<div>").addClass("theiaStickySidebar").append(n.sidebar.children()),
                        n.sidebar.append(n.stickySidebar)
                    }
                    n.marginBottom = parseInt(n.sidebar.css("margin-bottom")),
                    n.paddingTop = parseInt(n.sidebar.css("padding-top")),
                    n.paddingBottom = parseInt(n.sidebar.css("padding-bottom"));
                    var r = n.stickySidebar.offset().top
                      , s = n.stickySidebar.outerHeight();
                    n.stickySidebar.css("padding-top", 1),
                    n.stickySidebar.css("padding-bottom", 1),
                    r -= n.stickySidebar.offset().top,
                    s = n.stickySidebar.outerHeight() - s - r,
                    0 == r ? (n.stickySidebar.css("padding-top", 0),
                    n.stickySidebarPaddingTop = 0) : n.stickySidebarPaddingTop = 1,
                    0 == s ? (n.stickySidebar.css("padding-bottom", 0),
                    n.stickySidebarPaddingBottom = 0) : n.stickySidebarPaddingBottom = 1,
                    n.previousScrollTop = null,
                    n.fixedScrollTop = 0,
                    e(),
                    n.onScroll = function(n) {
                        if (n.stickySidebar.is(":visible")) {
                            if (t("body").width() < n.options.minWidth)
                                return void e();
                            if (n.options.disableOnResponsiveLayouts) {
                                var o = n.sidebar.outerWidth("none" == n.sidebar.css("float"));
                                if (o + 50 > n.container.width())
                                    return void e()
                            }
                            var r = t(document).scrollTop()
                              , s = "static";
                            if (r >= n.sidebar.offset().top + (n.paddingTop - n.options.additionalMarginTop)) {
                                var d, c = n.paddingTop + i.additionalMarginTop, p = n.paddingBottom + n.marginBottom + i.additionalMarginBottom, l = n.sidebar.offset().top, h = n.sidebar.offset().top + function(i) {
                                    var e = i.height();
                                    return i.children().each(function() {
                                        e = Math.max(e, t(this).height())
                                    }),
                                    e
                                }(n.container), b = 0 + i.additionalMarginTop, u = n.stickySidebar.outerHeight() + c + p < t(window).height();
                                d = u ? b + n.stickySidebar.outerHeight() : t(window).height() - n.marginBottom - n.paddingBottom - i.additionalMarginBottom;
                                var f = l - r + n.paddingTop
                                  , m = h - r - n.paddingBottom - n.marginBottom
                                  , g = n.stickySidebar.offset().top - r
                                  , y = n.previousScrollTop - r;
                                "fixed" == n.stickySidebar.css("position") && "modern" == n.options.sidebarBehavior && (g += y),
                                "stick-to-top" == n.options.sidebarBehavior && (g = i.additionalMarginTop),
                                "stick-to-bottom" == n.options.sidebarBehavior && (g = d - n.stickySidebar.outerHeight()),
                                g = 0 < y ? Math.min(g, b) : Math.max(g, d - n.stickySidebar.outerHeight()),
                                g = Math.max(g, f),
                                g = Math.min(g, m - n.stickySidebar.outerHeight());
                                var S = n.container.height() == n.stickySidebar.outerHeight();
                                s = (S || g != b) && (S || g != d - n.stickySidebar.outerHeight()) ? r + g - n.sidebar.offset().top - n.paddingTop <= i.additionalMarginTop ? "static" : "absolute" : "fixed"
                            }
                            if ("fixed" == s) {
                                var v = t(document).scrollLeft();
                                n.stickySidebar.css({
                                    position: "fixed",
                                    width: a(n.stickySidebar) + "px",
                                    transform: "translateY(" + g + "px)",
                                    left: n.sidebar.offset().left + parseInt(n.sidebar.css("padding-left")) - v + "px",
                                    top: "0px"
                                })
                            } else if ("absolute" == s) {
                                var k = {};
                                "absolute" != n.stickySidebar.css("position") && (k.position = "absolute",
                                k.transform = "translateY(" + (r + g - n.sidebar.offset().top - n.stickySidebarPaddingTop - n.stickySidebarPaddingBottom) + "px)",
                                k.top = "0px"),
                                k.width = a(n.stickySidebar) + "px",
                                k.left = "",
                                n.stickySidebar.css(k)
                            } else
                                "static" == s && e();
                            "static" != s && 1 == n.options.updateSidebarHeight && n.sidebar.css({
                                "min-height": n.stickySidebar.outerHeight() + n.stickySidebar.offset().top - n.sidebar.offset().top + n.paddingBottom
                            }),
                            n.previousScrollTop = r
                        }
                    }
                    ,
                    n.onScroll(n),
                    t(document).on("scroll." + n.options.namespace, function(t) {
                        return function() {
                            t.onScroll(t)
                        }
                    }(n)),
                    t(window).on("resize." + n.options.namespace, function(t) {
                        return function() {
                            t.stickySidebar.css({
                                position: "static"
                            }),
                            t.onScroll(t)
                        }
                    }(n)),
                    "undefined" != typeof ResizeSensor && new ResizeSensor(n.stickySidebar[0],function(t) {
                        return function() {
                            t.onScroll(t)
                        }
                    }(n))
                })
            }(i, e),
            !0)
        }
        function a(t) {
            var i;
            try {
                i = t[0].getBoundingClientRect().width
            } catch (t) {}
            return void 0 === i && (i = t.width()),
            i
        }
        return (i = t.extend({
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        }, i)).additionalMarginTop = parseInt(i.additionalMarginTop) || 0,
        i.additionalMarginBottom = parseInt(i.additionalMarginBottom) || 0,
        function(i, a) {
            e(i, a) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),
            t(document).on("scroll." + i.namespace, function(i, a) {
                return function(n) {
                    e(i, a) && t(this).unbind(n)
                }
            }(i, a)),
            t(window).on("resize." + i.namespace, function(i, a) {
                return function(n) {
                    e(i, a) && t(this).unbind(n)
                }
            }(i, a)))
        }(i, this),
        this
    }
}(jQuery),
$("#main-menu").each(function() {
    for (var t = $(this).find(".LinkList ul > li").children("a"), i = t.length, e = 0; e < i; e++) {
        var a = t.eq(e)
          , n = a.text();
        if ("_" !== n.charAt(0))
            if ("_" === t.eq(e + 1).text().charAt(0)) {
                var o = a.parent();
                o.append('<ul class="sub-menu m-sub"/>')
            }
        "_" === n.charAt(0) && (a.text(n.replace("_", "")),
        a.parent().appendTo(o.children(".sub-menu")))
    }
    for (e = 0; e < i; e++) {
        var r = t.eq(e)
          , s = r.text();
        if ("_" !== s.charAt(0))
            if ("_" === t.eq(e + 1).text().charAt(0)) {
                var d = r.parent();
                d.append('<ul class="sub-menu2 m-sub"/>')
            }
        "_" === s.charAt(0) && (r.text(s.replace("_", "")),
        r.parent().appendTo(d.children(".sub-menu2")))
    }
    $("#main-menu ul li ul").parent("li").addClass("has-sub"),
    $("#main-menu .widget").addClass("show-menu")
}),
$("#main-menu-nav").clone().appendTo(".mobile-menu"),
$(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),



/*
$(".mobile-menu ul > li a").each(function() {
    var t = $(this)
      , i = t.attr("href").trim()
      , e = i.toLowerCase()
      , a = i.split("/")[0];
    e.match("mega-menu") && t.attr("href", "/search/label/" + a + "?&max-results=" + postPerPage)
}),

*/


$(".slide-menu-toggle").on("click", function() {
    $("body").toggleClass("nav-active")
}),
$(".mobile-menu ul li .submenu-toggle").on("click", function(t) {
    $(this).parent().hasClass("has-sub") && (t.preventDefault(),
    $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170))
}),
$(".show-search").on("click", function() {
    $("#nav-search").fadeIn(250).find("input").focus()
}),
$(".hide-search").on("click", function() {
    $("#nav-search").fadeOut(250).find("input").blur()
}),


/*

$(".Label a, a.b-label").attr("href", function(t, i) {
    return i.replace(i, i + "?&max-results=" + postPerPage)
}),




$(".avatar-image-container img").attr("src", function(t, i) {
    return i = (i = i.replace("/s35-c/", "/s45-c/")).replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png")
}),
$(".author-description a").each(function() {
    $(this).attr("target", "_blank")
}),



$(".post-nav").each(function() {
    var t = $("a.prev-post-link").attr("href")
      , i = $("a.next-post-link").attr("href");
    $.ajax({
        url: t,
        type: "get",
        success: function(t) {
            var i = $(t).find(".blog-post h1.post-title").text();
            $(".post-prev a .post-nav-inner p").text(i)
        }
    }),

    $.ajax({
        url: i,
        type: "get",
        success: function(t) {
            var i = $(t).find(".blog-post h1.post-title").text();
            $(".post-next a .post-nav-inner p").text(i)
        }
    })
}),

*/

$(".post-body strike").each(function() {
    var t = $(this)
      , i = t.text();
    i.match("left-sidebar") && t.replaceWith("<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>"),
    i.match("right-sidebar") && t.replaceWith("<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>"),
    i.match("full-width") && t.replaceWith("<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>")
}),
$("#main-wrapper, #sidebar-wrapper").each(function() {
    1 == fixedSidebar && $(this).theiaStickySidebar({
        additionalMarginTop: 30,
        additionalMarginBottom: 30
    })
}),
$("#main-menu #main-menu-nav li").each(function() {
    var t = $(this)
      , i = t.find("a").attr("href").trim()
      , e = i.toLowerCase()
      , a = i.split("/")[0];
    g(t, e, 4, a)
}),

/*
$("#hot-section .widget-content").each(function() {
    var t = $(this)
      , i = t.text().trim()
      , e = i.toLowerCase()
      , a = i.split("/")[0];
    g(t, e, 3, a)
}),

*/

$(".common-widget .widget-content").each(function() {
    var t = $(this)
      , i = t.text().trim()
      , e = i.toLowerCase()
      , a = i.split("/")
      , n = a[0]
      , o = a[1];
    g(t, e, n, o)
}),
$(".related-ready").each(function() {
    var t = $(this)
      , i = t.find(".related-tag").data("label");
    g(t, "related", 3, i)
});
