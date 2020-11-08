var environmentID = 'QjgYur4LQTwe5HpvbvhpzK'

$(document).ready(function () {
    //Intialise Bullet Train
    $('.js-special').on('click', function () {
        flagsmith.identify('flagsmith_sample_user')
    });
    $('.js-random').on('click', function () {
        flagsmith.identify("random_" + Math.floor(Math.random() * 10))
    });
    flagsmith.init({
        environmentID: environmentID,
        defaultFlags: {
            font_size: 10
        },
        onChange: function () {
            if (flagsmith.getValue('hero')) {
                $('#loaded').removeClass('hidden')
                $('#loading').addClass('hidden')
                $('.hero').css({
                    'background': 'url(' + flagsmith.getValue('hero') + ')',
                    'background-repeat': 'no-repeat',
                    'background-size': 'cover'
                })
            }
        }
    });

})
