const pageList = ["#page1", "#page2", "#page3", "#page4"]

var pagesLeft = 1;
var pagesRight = 3;

$(document).ready(function() {
    let currentPage = 0;
    $(pageList[pagesLeft-1]).css({
        'z-index': pagesLeft,
    });
    $(pageList[4-pagesRight]).css({
        'z-index': pagesRight,
    });
    //reset the curr left page and curr right page z-idnex

    // function flipPage(pageNum) {
    //     $('.page').each(function(index) {
    //         let pageIndex = index + 1;
    //         if (pageIndex <= pageNum * 2) {
    //             $(this).css('transform', 'rotateY(-180deg)');
    //             // $(this).css('transform', 'translateX(200px)');
    //         } else {
    //             $(this).css('transform', 'rotateY(0deg)');
    //         }
    //     });
    // }

    $('#next').click(function() {
        // console.log('next')
        if (currentPage < 2) { // Adjust this based on the number of pages
            currentPage++;
            pagesLeft++;
            pagesRight--;

            if(pagesLeft == pagesRight){
                let temp = pagesLeft+1;
                $(pageList[currentPage]).css({
                    'transform': 'translateX(0px)',
                    'transform': 'rotateY(-180deg)',
                    'z-index': temp,
                });
                // $(pageList[currentPage]).css({
                    
                //     'z-index': pagesLeft,
                // });
            } else {
                $(pageList[currentPage]).css({
                    'transform': 'translateX(0px)',
                    'transform': 'rotateY(-180deg)',
                    'z-index': pagesLeft,
                });
            }

            // $(pageList[currentPage]).css({
            //     'transform': 'translateX(0px)',
            //     'transform': 'rotateY(-180deg)',
            //     'z-index': pagesLeft,
            // });
            console.log('pages left' + pagesLeft + ', pages right' + pagesRight)
            // flipPage(currentPage);
        }
        console.log(currentPage);
    });

    $('#prev').click(function() {
        if (currentPage > 0) {
            pagesLeft--;
            pagesRight++;
            // flipPage(currentPage);

            if(pagesLeft == pagesRight){
                console.log('same')
                let temp = pagesRight+1;
                $(pageList[currentPage]).css({
                    'transform': 'translateX(300px)',
                    'z-index': temp,
                });
                // $(pageList[currentPage]).css({
                    
                //     'z-index': pagesLeft,
                // });
            } else {
                $(pageList[currentPage]).css({
                    'transform': 'translateX(300px)',
                    'z-index': pagesRight,
                });
            }

            // $(pageList[currentPage]).css({
            //     'transform': 'translateX(300px)',
            //     'z-index': pagesRight,
            // });
            console.log('pages left' + pagesLeft + ', pages right' + pagesRight)
            currentPage--;
        }
        console.log(currentPage);
    });
});

