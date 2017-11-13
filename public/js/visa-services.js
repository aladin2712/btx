$('document').ready(function(){

  var $countrySlc = $('#country_slc');
  for(cIndex in countries){
    $countrySlc.append($('<option/>', {
       value: cIndex,
       text : countries[cIndex]
    }));
  }
  $countrySlc.selectpicker({
    style: 'btn-info',
    size: 4
  });
  $countrySlc.on('change',function(e){
    var cIndex = $(this).val();
    var selectedCountry = countries[cIndex];
    var displayCountry =  selectedCountry.substring(0,selectedCountry.indexOf('('));
    console.log(cIndex);
    if(visaNotRequiredCountries.indexOf(parseInt(cIndex)) >= 0){
      $('.moreThan30Days').show();
    } else{
      $('.moreThan30Days').hide();
    };
    $('[type="uc"]').html(displayCountry);
    $('.t-compare-link').each(function(){
      console.log(68);
      var oldURL = $(this).attr('base-href');
      $(this).attr('href',oldURL+displayCountry);
    });
    $('#supported_service').show();
    
  });
});
