    $(document).ready(function () {
                    $('#id_radio1').click(function () {
                       $('#div2').hide('fast');
                       $('#div1').show('fast');
                       $('#div3').hide('fast');
                });
                $('#id_radio2').click(function () {
                      $('#div1').hide('fast');
                      $('#div2').show('fast');
                      $('#div3').hide('fast');
                 });
                $('#id_radio3').click(function () {
                      $('#div1').hide('fast');
                      $('#div2').hide('fast');
                      $('#div3').show('fast');
               });
             });   
