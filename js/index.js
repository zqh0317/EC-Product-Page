window.onload = function(){

    //Record the index of the clicked thumbnail
    var bigimgIndex = 0;

    //Render the data navigation path
    navPathDataBind();
    function navPathDataBind(){

    var navPath = document.querySelector('#wrapper #content .contentMain #navPath')

    var path = goodData.path
    //Iterate through the data and create tags
    for(var i = 0; i < path.length; i++){
        if(i == path.length - 1) {
           var aNode = document.createElement("a");
           aNode.innerText = path[i].title;
           navPath.appendChild(aNode);
        } else{
        
        var aNode = document.createElement("a");
        aNode.href = path[i].url;
        aNode.innerText = path[i].title;

        
        var iNode = document.createElement("i");
        iNode.innerText = '/';

        navPath.appendChild(aNode);
        navPath.appendChild(iNode);
        }
    }
}   
  
    //Magnifying glass hover effect
    bigClassBind();
    function bigClassBind(){

        var smallPic = document.querySelector('#wrapper #content .contentMain #center #left #leftTop #smallPic')
        var leftTop = document.querySelector('#wrapper #content .contentMain #center #left #leftTop');
        
        var imagessrc = goodData.imagessrc;
        //Set the hover event
        smallPic.onmouseenter = function(){

            //Create the required elements
            var maskDiv = document.createElement('div');
            maskDiv.className = "mask"; 

            var BigPic = document.createElement('div');
            BigPic.className = "bigPic";

            var BigImg = document.createElement('img');
            BigImg.src = imagessrc[bigimgIndex].b;

            //Append elements sequentially
            BigPic.appendChild(BigImg);
            smallPic.appendChild(maskDiv);
            leftTop.appendChild(BigPic);

            //Set the move event
            smallPic.onmousemove = function(event){
                //Calculate the position of the mask
                var left = event.clientX - smallPic.getBoundingClientRect().left - maskDiv.offsetWidth / 2;
                var top = event.clientY - smallPic.getBoundingClientRect().top - maskDiv.offsetHeight / 2;
                
                //Restrict the movement range of the mask
                if(left<0){
                    left=0;
                } else if (left > smallPic.clientWidth - maskDiv.offsetWidth){
                    left = smallPic.clientWidth - maskDiv.offsetWidth;
                }

                if(top<0){
                    top=0;
                }else if (top > smallPic.clientWidth - maskDiv.offsetHeight){
                    top = smallPic.clientWidth - maskDiv.offsetHeight;
                }
                //Set the position properties of the mask
                maskDiv.style.left = left + "px";
                maskDiv.style.top = top + "px";

                //Calculate the ratio between the mask and the zoomed-in image
                var scale = (smallPic.clientWidth - maskDiv.offsetWidth) / (BigImg.offsetWidth - BigPic.clientWidth);

                //Set the position properties of the zoomed-in image
                BigImg.style.left = -left / scale + "px";
                BigImg.style.top = -top / scale + "px";
            }

            //Set the mouse out event
            smallPic.onmouseleave = function(){
                smallPic.removeChild(maskDiv);
                leftTop.removeChild(BigPic);
            }

        }
        

    }

    //Dynamically render thumbnails
    thumbnailData();
    function thumbnailData(){
        var ul = document.querySelector('#wrapper #content .contentMain #center #left #leftBottom #piclist ul');
        var imagessrc = goodData.imagessrc;
        //Iterate through the array, create the required elements, and append them sequentially
        for (var i = 0; i < imagessrc.length; i++){
            var newLi = document.createElement('li');
            var newImg = document.createElement('img');
            newImg.src = imagessrc[i].s;

            newLi.appendChild(newImg);
            ul.appendChild(newLi);
        }
    }

    //Click the thumbnail to switch the image
    thumnailClick();
    function thumnailClick(){
        var liNodes = document.querySelectorAll('#wrapper #content .contentMain #center #left #leftBottom #piclist ul li');
        var smallPic_img = document.querySelector('#wrapper #content .contentMain #center #left #leftTop #smallPic img');
        var imagessrc = goodData.imagessrc;
        
        smallPic_img.src = imagessrc[0].s;

        //Loop through the click event
        for (let i = 0; i < liNodes.length; i++){
            liNodes[i].onclick = function(){
                bigimgIndex = i;
                smallPic_img.src = imagessrc[i].s;
            }
        }
    }

    //Click the arrow to move the thumbnail
    thumbnailLeftRightClick()
    function thumbnailLeftRightClick(){

        //Get the required elements
        var prev = document.querySelector('#wrapper #content .contentMain #center #left #leftBottom a.prev');
        var next = document.querySelector('#wrapper #content .contentMain #center #left #leftBottom a.next');
        var ul = document.querySelector('#wrapper #content .contentMain #center #left #leftBottom #piclist ul');
        var liNodes = document.querySelectorAll('#wrapper #content .contentMain #center #left #leftBottom #piclist ul li');

        //Calculate the movement distance
        var start = 0;
        var step = (liNodes[0].offsetWidth + 20) * 2;
        var endPosition = (liNodes.length - 5) * (liNodes[0].offsetWidth + 20);

        //Trigger the event
        prev.onclick = function(){
            start -= step;
            if (start < 0){
                start = 0;
            }
            ul.style.left = -start + "px";
        }

        next.onclick = function(){
            start += step;
            if (start > endPosition){
                start = endPosition;
            }
            ul.style.left = -start + "px";
        }
    }

    //Dynamically render product detail data
    rightTopData()
    function rightTopData(){
        var rightTop = document.querySelector('#wrapper #content .contentMain #center #right #rightTop');

        var goodsDetail = goodData.goodsDetail;

        //Create a template string variable
        var s = `<h3>${goodsDetail.title}</h3>
                <p>${goodsDetail.recommend}</p>
                <div class="priceWrap">
                    <div class="priceTop">
                        <span>Price</span>
                        <div class="price">
                            <span>¥</span>
                            <p>${goodsDetail.price}</p>
                            <i>Price drop notification</i>
                        </div>
                        <p>
                            <span>Reviews</span>
                            <span>${goodsDetail.evaluateNum}</span>
                        </p>
                    </div>
                    <div class="priceBottom">
                        <span>Sale</span>
                        <p>
                            <span>${goodsDetail.promoteSales.type}</span>
                            <span>${goodsDetail.promoteSales.content}</span>
                        </p>
                    </div>
                </div>
                <div class="support">
                    <span>Support</span>
                    <p>${goodsDetail.support}</p>
                </div>
                <div class="address">
                    <span>ship&nbsp;to</span>
                    <p>${goodsDetail.address}</p>
                </div>`;
        
        //Re-render rightTop
        rightTop.innerHTML = s;
    }

    //Dynamically render product parameter data
    rightBottomData();
    function rightBottomData(){
        var chooseWrap = document.querySelector('#wrapper #content .contentMain #center #right #rightBottom .chooseWrap');
        
        var crumbData = goodData.goodsDetail.crumbData;
        
        for(var i = 0; i < crumbData.length; i++){
            //Loop through the data, create elements, and append them sequentially
            var dlNode = document.createElement('dl');
            var dtNode = document.createElement('dt');
            dtNode.innerText = crumbData[i].title;
            dlNode.appendChild(dtNode);

            //Loop through the data, create element, and append it
            for (var j = 0; j < crumbData[i].data.length; j++){
                var ddNode = document.createElement('dd');
                ddNode.innerText = crumbData[i].data[j].type;
                ddNode.setAttribute('price', crumbData[i].data[j].changePrice);
                dlNode.appendChild(ddNode);
            }
            chooseWrap.appendChild(dlNode);
        }
    }

    //Clicking on a product parameter to apply an exclusive color effect
    clickddBind()
    function clickddBind(){
        var dlNodes = document.querySelectorAll('#wrapper #content .contentMain #center #right #rightBottom .chooseWrap dl');
        var choose = document.querySelector('#wrapper #content .contentMain #center #right #rightBottom #choose');

        //Create an array and populate it
        var arr = new Array(dlNodes.length);
        arr.fill(0);

        for (var i = 0; i < dlNodes.length; i++){

            (function(i){
            var ddNodes = dlNodes[i].querySelectorAll('dd');

            for (var j = 0; j < ddNodes.length; j++){
                ddNodes[j].onclick = function(){ 
                    choose.innerHTML = "";

                    for (var k = 0; k < ddNodes.length; k++){
                        ddNodes[k].style.color = "#666";
                    }
                    this.style.color = "red";

                    arr[i] = this;

                    changePriceBind(arr);

                    //Iterate through the arr array and write the values of non-zero elements into the mark marker
                    arr.forEach(function(value, index){
                            if(value){
                                var markDiv = document.createElement('div');
                                markDiv.className = 'mark';
                                markDiv.innerText = value.innerText;
                                var aNode = document.createElement('a');
                                aNode.innerText = 'X';
                                aNode.setAttribute('index', index);
                                markDiv.appendChild(aNode);
                                choose.appendChild(markDiv);
                            }
                    })

                    //Get all the a elements and loop through them to trigger the click event
                    var aNodes = document.querySelectorAll('#wrapper #content .contentMain #center #right #rightBottom #choose .mark a');

                    for(var n = 0; n < aNodes.length; n++){
                        aNodes[n].onclick = function(){
                            var idx1 = this.getAttribute('index');
                            arr[idx1] = 0;
                            var ddlist = dlNodes[idx1].querySelectorAll('dd');
                            for(var m = 0; m < ddlist.length; m++){
                                ddlist[m].style.color = '#666';    
                            }
                            ddlist[0].style.color = 'red';

                            choose.removeChild(this.parentNode);

                            changePriceBind(arr);
                        }
                    }

                }
            }
        })(i)
    }

    }

    //Function declaration for price changes
    /**
     * This function should be called when clicking on dd and deleting the mark marker
     */
    function changePriceBind(arr){
        var oldPrice = document.querySelector('#wrapper #content .contentMain #center #right #rightTop .priceWrap .priceTop .price p');
        var price = goodData.goodsDetail.price;

        //Iterate through the arr array and calculate the final price
        for (i = 0; i < arr.length; i++){
            if (arr[i]){
                var changePrice = Number(arr[i].getAttribute('price'));
                price += changePrice;
            }
        }
        oldPrice.innerText = price;

        //Write the updated price into the left-side label
        var leftPrice = document.querySelector('#wrapper #content .contentMain #goodsDetailWrap #rightDetail #chooseBox #listWrap #left p');
        var ipts =document.querySelectorAll('#wrapper #content .contentMain #goodsDetailWrap #rightDetail #chooseBox #listWrap #middle li div input');
        var newPrice = document.querySelector('#wrapper #content .contentMain #goodsDetailWrap #rightDetail #chooseBox #listWrap #right i');

        leftPrice.innerText = '¥' + price;

        //Iterate through the checkboxes and update the price
        for (var j = 0; j < ipts.length; j++){
                    if(ipts[j].checked){
                        price += Number(ipts[j].value);
                    }
                }
        newPrice.innerText = '¥' + price;

    }
    


    //Checkbox selection changes the total price
    choosePrice()
    function choosePrice(){
    
    //Get the checkbox elements
    var ipts =document.querySelectorAll('#wrapper #content .contentMain #goodsDetailWrap #rightDetail #chooseBox #listWrap #middle li div input');
    var leftPrice = document.querySelector('#wrapper #content .contentMain #goodsDetailWrap #rightDetail #chooseBox #listWrap #left p');
    var newPrice = document.querySelector('#wrapper #content .contentMain #goodsDetailWrap #rightDetail #chooseBox #listWrap #right i');

    //Iterate through the checkboxes and update the price
    for (var i = 0; i < ipts.length; i++){
        ipts[i].onclick = function(){
            var oldPrice = Number(leftPrice.innerText.slice(1));
            for (var j = 0; j < ipts.length; j++){
                if(ipts[j].checked){
                    oldPrice += Number(ipts[j].value);
                }
            }
            newPrice.innerText = '¥' + oldPrice;
        }
    }
    }

    //Encapsulate a common tab function
    function Tab(tabBtns, tabConts){
        for(var i = 0; i<tabBtns.length; i++){
            tabBtns[i].index = i;
            tabBtns[i].onclick = function(){
                for (var j = 0; j < tabBtns.length; j++){
                   tabBtns[j].className = '';
                   tabConts[j].className = ''; 
                }
                this.className = 'active';
                tabConts[this.index].className =
                 'active';
            }

        }
    }

    //Click the left tab
    leftTab();
    function leftTab(){
        var h4s = document.querySelectorAll('#wrapper #content .contentMain #goodsDetailWrap #leftAside #asideTop h4');
        var divs =document.querySelectorAll('#wrapper #content .contentMain #goodsDetailWrap #leftAside #asideContent >div');//>代表获取direct child
        Tab(h4s, divs);
    }

    //Click the right tab
    rightTab();
    function rightTab(){
        var lis = document.querySelectorAll('#wrapper #content .contentMain #goodsDetailWrap #rightDetail #bottomDetail #tabBtns li');
        var divs = document.querySelectorAll('#wrapper #content .contentMain #goodsDetailWrap #rightDetail #bottomDetail #tabContents div');
        Tab(lis, divs);
    }

}
