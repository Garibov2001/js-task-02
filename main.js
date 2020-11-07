
slider = document.querySelector('.slider-center');

right_btn = document.querySelector('#slider-right-btn')
left_btn = document.querySelector('#slider-left-btn')

data_json = [
    {
        'title' : 'Mountain',
        'content' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'image' : 'https://www.thepeakmagazine.com.sg/wp-content/uploads/2017/12/Mountain-Kirkjufell-and-Aurora-in-Iceland-1200x700.jpg'
    },
    {
        'title' : 'Forest',
        'content' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'image' : 'https://www.theuiaa.org/wp-content/uploads/2016/08/UIAA-members-mountain-hut-1200x800-ang-1200x700.jpg'
    },
    {
        'title' : 'Ocean',
        'content' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVffVrBsM2XiDOeUWy5gaJBGqNT1KpteMZ-Q&usqp=CAU'
    },
    {
        'title' : 'Drone',
        'content' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'image' : 'https://ifpnews.com/wp-content/uploads/2020/09/IMG_20200925_104922_811-1200x700.jpg'
    },
    {
        'title' : 'Flowers',
        'content' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'image' : 'https://onbeing.org/wp-content/uploads/2018/06/garden-of-growth-and-release-flat-1200x700.jpg'
    },
    {
        'title' : 'City',
        'content' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'image' : 'https://sir.wdwnt.com/wdwnt.com/2019/09/TDRExpansion_1-1200x700.jpg'
    },
    {
        'title' : 'City',
        'content' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'image' : 'https://www.dangleterrehotel.com/-/media/ttc/rch/hotel-dangleterre/gallery/da-webcam-fireworks-001-1200x700.jpg'
    },



]

$(document).ready(function()
{
    for(var i=0; i<data_json.length; i++ )
    {
        $(".slider-center").append(`
        <div class="card custom-card" width="286" height="180" style="width: 18rem;"  data-active-slide>
            <img class="card-img-top" src="${data_json[i]['image']}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${data_json[i]['title']}</h5>
                <p class="card-text">${data_json[i]['content']}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> `);
    }
});



var positionValue = 0

right_btn.addEventListener("click", function(){
    positionValue -= 318

    if ((Math.abs(positionValue) + 3*318) > slider.offsetWidth)
    {        
        positionValue = 0
    }

    slider.style.left = (positionValue + 'px')
});

left_btn.addEventListener("click", function(){
    positionValue += 318

    if (positionValue > 0)
    {        
        positionValue = -1 * (slider.offsetWidth -  3*318)
    }

    slider.style.left = (positionValue + 'px')
});


