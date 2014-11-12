/**
* Easy Lightboxish
* This checks all images on the page with the scaleBox class,
* if the images natural width is larger than its parent width 
* it adds a lightbox wrapper to the img.
*/

$("img.scaleBox").each(function() {
    var image = $(this);
    var imageUrl = $(this).attr('src');
    var imageAlt = $(this).attr('alt');
    var parentEle = $(this).parent();
    var parentWidth = parentEle.width();

    var buildImage = '<img src="' + imageUrl + '" alt="' + imageAlt + '" class="scaleBox" />';
    var buildLinkandImage = '<a class="fancybox" href="' + imageUrl + '">' + buildImage + "</a>";

    /**
     * Attribution: Gabriel McAdams
     */
    function getImgSize(imgSrc) {
        var newImg = new Image();

        newImg.onload = function() {
            var imgWidth = newImg.width;

            if (imgWidth > parentWidth) {
                $(image).replaceWith(buildLinkandImage);
            }
        }

        newImg.src = imgSrc; // this must be done AFTER setting onload
    }

    getImgSize(imageUrl);


});
