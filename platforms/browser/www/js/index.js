
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
    }
};

$(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});
function success(imageData) {
	var image = document.getElementById('img');
	image.src = "data:image/jpeg;base64," + imageData;
	$("#camerabtnId").removeAttr("disabled");
}

function Newerror(err) {
	alert("error" + err);
}
function testCamera() {
    $(".frame-square").append($(".cordova-camera-capture"))
	$("#camerabtnId").attr("disabled", true);
	navigator.camera.getPicture(success, Newerror, {
		quality: 50,
		destinationType: Camera.DestinationType.DATA_URL
	});
}

function fileUpload(file){
debugger;
}

$('#camerabtnId').on('click', function(){
   $('.frame-square').append($('.cordova-camera-capture'));
});
function validatePhn(){
	var phn=document.getElementById("mobileno").value;
	var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
	if(phoneNum.test(phn)) {
		console.log("accept");
	}
	else {
		document.getElementById("mobileno").value="";	
		$("#mobileno").removeClass('borderGreen');
		$("#mobileno").addClass('borderRed');					
	}	
}
function validateAdhar(){
	var adhar=document.getElementById("adharNo").value;
	var adharRegex = /^\d{16}$/;
	var adharcardTwelveDigit = /^\d{12}$/;
	if(adharRegex.test(adhar) || adharcardTwelveDigit.test(adhar)) {
			console.log("accept");
	}	
	else {
		document.getElementById("adharNo").value="";
		$("#adharNo").removeClass('borderGreen');
		$("#adharNo").addClass('borderRed');						
	}
}
function validatePan(){
	var pan=document.getElementById("panNo").value;
	var panNum = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
	if(panNum.test(pan)) {
		console.log("accept");
	}
	else {
		document.getElementById("panNo").value="";
		$("#panNo").removeClass('borderGreen');
		$("#panNo").addClass('borderRed');
	}
}
function checkform(pthis)
    {
	if($("#"+pthis.id).val()!==""){
	$("#"+pthis.id).removeClass('mand');
	}else{
	$("#"+pthis.id).addClass('mand');
	}

	if($(".mand").length==0){
		$("#next_1").removeAttr('disabled');
		$('#next_1').addClass('submitEnable');
		$("#tabdata1").css("background","green");
		$("#tabdata1").css("color","white");	
	}else{
		$("#next_1").attr('disabled','disabled');
		$("#next_1").removeClass('submitEnable');
		$("#tabdata1").css("background","red");
	}
}

function navigateToB(pthis){
	if(pthis.id=="next_1"){
		$('#myTab a[href="#sectionB"]').tab('show');
	}else if(pthis.id=="nextStep"){
		$('#myTab a[href="#sectionC"]').tab('show');
	}else if(pthis.id=="prevstep"){
		$('#myTab a[href="#sectionA"]').tab('show');
	}else if(pthis.id=="nextStepSectionC"){	
		$('#myTab a[href="#sectionD"]').tab('show');
	}else if(pthis.id=="prevStepSectionC"){	
		$('#myTab a[href="#sectionB"]').tab('show');
	}else if(pthis.id=="nextStepSectionE"){	
		$('#myTab a[href="#sectionF"]').tab('show');
	}else if(pthis.id=="prevStepSectionE"){	
		$('#myTab a[href="#sectionD"]').tab('show');
	}else if(pthis.id=="prevStepSectionF"){	
		$('#myTab a[href="#sectionE"]').tab('show');
	}else if(pthis.id=="nextStepSectionD"){	
		$('#myTab a[href="#sectionE"]').tab('show');
	}else if(pthis.id=="prevStepSectionD"){	
		$('#myTab a[href="#sectionC"]').tab('show');
	}
}
function mandatory(pthis)
{
	if($("#"+pthis.id).val()!=="" ){
		if($("#"+pthis.id).val()==="Select")
		{
			$("#"+pthis.id).removeClass('borderGreen');
			$("#"+pthis.id).addClass('borderRed');
		}else{
			$("#"+pthis.id).addClass('borderGreen');
		}
	}else {
			$("#"+pthis.id).removeClass('borderGreen');
			$("#"+pthis.id).addClass('borderRed');
		}
}
function addnew()
{
var nextTab = $('#tabs').find('li').length;
if(nextTab<5){
$('<li id="liTab_'+(nextTab+1)+'" onclick="selectCurrTab(this,event)" role="presentation" class="nav-item eduCls"><a role="tab" aria-selected="true" aria-setsize="2" aria-posinset="1" target="_self" href="#" class="nav-link " id="tab_'+nextTab+'"><button class="close closeTab" type="button" onclick="deleteTab(this)">x</button><label>Record '+(nextTab+1)+'</label></a></li>').appendTo('#tabs');

$('<div role="tabpanel" tabindex="-1" aria-hidden="false" class="lcurrDivCls tab-pane active card-body" id="tab'+(nextTab+1)+'" aria-labelledby="__BVID__177___BV_tab_button__"><div class="form-group "><label for="degree" id="degree">Degree/Course</label><select class="form-control" id="degree_'+(nextTab+1)+'" onchange="updateTab(this)"><option value="" disabled="" selected="">Select the degree</option><option value="sslc">SSLC/10TH</option><option value="hsc">HSC/12TH</option><option value="bsc">BSC</option><option value="b.e">B.E</option><option value="m.e">M.E</option></select></div><div class="form-group "><label for="period">Period</label><input type="text" class="form-control" placeholder="Enter period" required></div><div class=" form-group" ><label for="institution">Institution</label><input type="text" class="form-control" placeholder="Enter institution"> </div><div class="form-group "><label for="class">Class</label><input id="class" type="text" class="form-control" placeholder="Enter the class" ></div><div class="form-group "><label for="percentage">Percentage</label><input type="number" class="form-control" placeholder="Enter the percentage"></div><div class="text-center"><button type="submit" class="button button4" id="nextStep"  onclick="navigateToB(this)"><span id="secBNext" class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button><button type="submit" class="button button4" id="prevstep" onclick="navigateToB(this)"><span id="secBPrev"class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button></div></div>').appendTo('.tab-content');
}
$('#liTab_'+(nextTab+1)).trigger('click');
}
function updateTab(pthis)
{
	var tabId=$(pthis).attr('id');
	var lparentTabId = tabId.split("_")[1];
	lparentTabId = "liTab_" + lparentTabId
	if($("#"+tabId).val()!==null){
		$("#"+lparentTabId).find('a label').text($("#"+tabId).val().toUpperCase());
	}
}
function selectCurrTab(pthis,pevent)
{
	var ltabId = $(pthis).attr('id');
	ltabId = ltabId.split('_')[1];
$('.eduCls').removeClass('eduClsActive');

	$('.lcurrDivCls').addClass('sno');
	$('#tab'+ltabId).removeClass('sno');
$(pthis).addClass('eduClsActive');
}
function fillAddress(pthis){
    if ($(pthis)[0].innerText=="YES" && $("#permenantAddr").val()!=="") { 
	var flatEnteredValue = document.getElementById("permenantAddr").value;
	document.getElementById("presentAddr").value=flatEnteredValue;
	$("#presentAddr").removeClass('borderRed').addClass('borderGreen');
	$("#presentAddr").trigger('change');
	}
    else {
        $("#presentAddr").val(''); 
	$("#presentAddr").addClass('borderRed').removeClass('borderGreen');
	$("#presentAddr").trigger('change');      
    }
}

function addnew_2()
      {
      var nextTab = $('#tabs_2').find('li').length;
if(nextTab<5){
		$("#tab3Content").find('.lcurrDivClsPage3').addClass('sno');
$("#tabs_2").find('li').removeClass('eduClsActivePage3');
      $('<li id="liPage3_'+(nextTab+1)+'" onclick="selectCurrTab_2(this,event)" role="presentation" class="nav-item eduClsPage3 eduClsActivePage3"><a role="tab" aria-selected="true" aria-setsize="2" aria-posinset="1" target="_self" href="#" class="nav nav-tabs " id="tabPage3__'+nextTab+'"><button class="close closeTab" type="button" onclick="deleteTab2(this)">×</button><label>Exp. '+(nextTab+1)+'</label></a></li>').appendTo('#tabs_2');
      
      $('<div role="tabpanel" tabindex="-1" aria-hidden="false" class="lcurrDivClsPage3 tab-pane active card-body" id="tabPage3'+(nextTab+1)+'" aria-labelledby="__BVID__177___BV_tab_button__"><div class="form-group "><label for="organization" id="org">Organization</label><input type="text" class="form-control" placeholder="Enter organization" name="organization" required=""></div><div class="form-group "><label for="role">Role/Designation</label><input type="text" class="form-control" placeholder="Enter Role/Designation" name="Role" required=""></div><label id="duration">Duration : </label><div class="row"><div class="form-group col-sm-6"><label for="from">From :</label><input type="number" class="form-control" id="from"></div><div class="form-group  col-sm-6"><label for="to">To :</label><input type="number" class="form-control"></div></div><div class="form-group "><label for="Reason">Reason for leaving</label><input type="text" class="form-control" placeholder="Enter the Reason for leaving" name="Reason" required=""></div></div>').appendTo('#tab3Content');}
      $('#liTabPage3_'+(nextTab+1)).trigger('click');

scrolltoDiv("tab3Content");
      }
      
      function selectCurrTab_2(pthis,pevent)
      {
      	var ltabId = $(pthis).attr('id');
      	ltabId = ltabId.split('_')[1];
      $('.eduClsPage3').removeClass('eduClsActivePage3');
      
      	$('.lcurrDivClsPage3').addClass('sno');
      	//$('#tab'+ltabId).removeClass('sno');
	$('#tabPage3'+ltabId).removeClass('sno');
      $(pthis).addClass('eduClsActivePage3');
      }
function scrolltoDiv(pid)
{
	$('html,body').animate({
       	 scrollTop: $("#"+pid).offset().top
    	}, 'slow');
}
function datepick(){
$('[data-toggle=datepicker],[data-toggle=datepicker1],[data-toggle=datepicker2]').each(function() {
  var target = $(this).data('target-name');
  var t = $('input[name=' + target + ']');
  t.datepicker({
    dateFormat: 'dd-mm-yy',
  });
  $(this).on("click", function() {
    t.datepicker("show");
  });
});
}


function addnew_3()
      {
      var nextTab = $('#tabs_3').find('li').length;
if(nextTab<4){
		$("#tab3Content_2").find('.lcurrDivClsPage3_2').addClass('sno');
$("#tabs_3").find('li').removeClass('eduClsActivePage3Tab2');
      $('<li id="liTab2Page3_'+(nextTab+1)+'" onclick="selectCurrTab_3(this,event)" role="presentation" class="nav-item eduClsPage3Tab2 eduClsActivePage3Tab2"><a role="tab" aria-selected="true" aria-setsize="2" aria-posinset="1" target="_self" href="#" class="nav nav-tabs " id="tabPage3Tab2__'+nextTab+'"><button class="close closeTab" type="button" onclick="deleteTab3(this)">×</button><label>Gap Record '+(nextTab+1)+'</label></a></li>').appendTo('#tabs_3');
      
      $('<div role="tabpanel" tabindex="-1" aria-hidden="false" class="lcurrDivClsPage3_2 tab-pane active card-body" id="tabPage3Tab2'+(nextTab+1)+'" aria-labelledby="__BVID__177___BV_tab_button__"><div class="form-group "><label for="gap" id="gap">Gap in Education</label><select class="form-control" id="gap_'+(nextTab+1)+'"onchange="updateTab_3(this)"><option value="" disabled="" selected="">Select the Gap in Education</option><option value="sslc">SSLC/10TH</option><option value="hsc">HSC/12TH</option><option value="ug">UG</option><option value="pg">PG</option></select></div><label id="duration">Duration : </label><div class="row"><div class="form-group col-sm-6"><label for="from">From :</label><input type="number" class="form-control" id="from"></div><div class="form-group  col-sm-6"><label for="to">To :</label><input type="number" class="form-control"></div></div><div class="form-group"><label for="reason">Reason</label><input type="text" class="form-control" id="reason"></div>').appendTo('#tab3Content_2');}
      $('#liTab2Page3_'+(nextTab+1)).trigger('click');

scrolltoDiv("tab3Content_2");
      }
      function updateTab_3(pthis)
      {
      var tabId=$(pthis).attr('id');
      var lparentTabId = tabId.split("_")[1];
      lparentTabId = "liTab2Page3_" + lparentTabId
      if($("#"+tabId).val()!==null){
      $("#"+lparentTabId).find('a label').text($("#"+tabId).val().toUpperCase());
      }
      }
      function selectCurrTab_3(pthis,pevent)
      {
      	var ltabId = $(pthis).attr('id');
      	ltabId = ltabId.split('_')[1];
      $('.eduClsPage3Tab2').removeClass('eduClsActivePage3Tab2');
      
      	$('.lcurrDivClsPage3_2').addClass('sno');
      	//$('#tab'+ltabId).removeClass('sno');
	$('#tabPage3Tab2'+ltabId).removeClass('sno');
      $(pthis).addClass('eduClsActivePage3Tab2');
      }
function scrolltoDiv(pid)
{
	$('html,body').animate({
       	 scrollTop: $("#"+pid).offset().top
    	}, 'slow');
}

function addnew_4()
      {
      var nextTab = $('#tabs_4').find('li').length;
if(nextTab<5){
		$("#tab3Content_3").find('.lcurrDivClsPage3_3').addClass('sno');
$("#tabs_4").find('li').removeClass('eduClsActivePage3Tab3');
      $('<li id="liTab3Page3_'+(nextTab+1)+'" onclick="selectCurrTab_4(this,event)" role="presentation" class="nav-item eduClsPage3Tab3 eduClsActivePage3Tab3"><a role="tab" aria-selected="true" aria-setsize="2" aria-posinset="1" target="_self" href="#" class="nav nav-tabs " id="tabPage3Tab3__'+nextTab+'"><button class="close closeTab" type="button" onclick="deleteTab4(this)">×</button><label>Record '+(nextTab+1)+'</label></a></li>').appendTo('#tabs_4');
      
      $('<div role="tabpanel" tabindex="-1" aria-hidden="false" class="lcurrDivClsPage3_3 tab-pane active card-body" id="tabPage3Tab3'+(nextTab+1)+'" aria-labelledby="__BVID__177___BV_tab_button__"><div class="form-group "><div class="form-group "><label for="period" id="period">Period</label> <input type="text" class="form-control" placeholder="Enter the period" name="period" required=""></div><div class="form-group "><div class="form-group "><label for="training">Training/Certifications</label> <input type="text" class="form-control" placeholder="Enter the training/certifications" name="training" required=""></div><div class="form-group "><label for="institution">Institution</label><input type="text" class="form-control" placeholder="Enter the institution" name="institution" required=""></div><div class="form-group "><label for="percentage">Percentage</label><input type="number" class="form-control" placeholder="Enter the percentage" name="percentage" required=""></div><div class="form-group "><label for="class">Class</label><input type="text" class="form-control" placeholder="Enter the class" name="class" required=""></div></div>').appendTo('#tab3Content_3');}
      $('#liTab3Page3_'+(nextTab+1)).trigger('click');

scrolltoDiv("tab3Content_3");
      }      
      function selectCurrTab_4(pthis,pevent)
      {
      	var ltabId = $(pthis).attr('id');
      	ltabId = ltabId.split('_')[1];
      $('.eduClsPage3Tab3').removeClass('eduClsActivePage3Tab3');
      
      	$('.lcurrDivClsPage3_3').addClass('sno');
      	//$('#tab'+ltabId).removeClass('sno');
	$('#tabPage3Tab3'+ltabId).removeClass('sno');
      $(pthis).addClass('eduClsActivePage3Tab3');
      }
function addnew_5()
      {
      var nextTab = $('#tabs_5').find('li').length;
if(nextTab<4){
		$("#tab3Content_5").find('.lcurrDivClsPage4_').addClass('sno');
$("#tabs_5").find('li').removeClass('eduClsActivePage4Tab2');
      $('<li id="liTab2Page4_'+(nextTab+1)+'" onclick="selectCurrTab_5(this,event)" role="presentation" class="nav-item eduClsPage4Tab2 eduClsActivePage4Tab2"><a role="tab" aria-selected="true" aria-setsize="2" aria-posinset="1" target="_self" href="#" class="nav nav-tabs " id="tabPage4Tab2__'+nextTab+'"><button class="close closeTab" type="button" onclick="deleteTab5(this)">×</button><label>Org '+(nextTab+1)+'</label></a></li>').appendTo('#tabs_5');
      
      $('<div role="tabpanel" tabindex="-1" aria-hidden="false" class="lcurrDivClsPage4_ tab-pane active card-body" id="tabPage4Tab2'+(nextTab+1)+'" aria-labelledby="__BVID__177___BV_tab_button__"><div class="form-group "><label id="gapForExp">Gap in Experience</label><select class="form-control" id="gap_'+(nextTab+1)+'"><option value="" disabled="" selected="">Select the Gap in Experience</option><option value="organization 1">Organization1</option><option value="organization 2">Organization2</option><option value="organization 3">Organization3</option><option value="organization4">Organization 4</option></select></div><label id="duration">Duration : </label><div class="row"><div class="form-group col-sm-6"><label for="from">From :</label><input type="number" class="form-control" id="from"></div><div class="form-group  col-sm-6"><label for="to">To :</label><input type="number" class="form-control"></div></div><div class="form-group "><label for="Reason">Reason</label><input type="text" class="form-control" placeholder="Enter the Reason" name="Reason" required=""></div></div>').appendTo('#tab3Content_5');}
      $('#liTab2Page4_'+(nextTab+1)).trigger('click');

scrolltoDiv("tab3Content_5");
      }
      function updateTab_5(pthis)
      {
      var tabId=$(pthis).attr('id');
      var lparentTabId = tabId.split("_")[1];
      lparentTabId = "liTab2Page4_" + lparentTabId
      if($("#"+tabId).val()!==null){
      $("#"+lparentTabId).find('a label').text($("#"+tabId).val().toUpperCase());
      }
      }
      function selectCurrTab_5(pthis,pevent)
      {
      	var ltabId = $(pthis).attr('id');
      	ltabId = ltabId.split('_')[1];
      $('.eduClsPage4Tab2').removeClass('eduClsActivePage4Tab2');
      
      	$('.lcurrDivClsPage4_').addClass('sno');
      	//$('#tab'+ltabId).removeClass('sno');
	$('#tabPage4Tab2'+ltabId).removeClass('sno');
      $(pthis).addClass('eduClsActivePage4Tab2');
      }
function scrolltoDiv(pid)
{
	$('html,body').animate({
       	 scrollTop: $("#"+pid).offset().top
    	}, 'slow');
}
function addnew_6()
      {
      var nextTab = $('#tabs_6').find('li').length;
if(nextTab<2){
		$("#tab6Content").find('.lcurrDivClsPage6_').addClass('sno');
$("#tabs_6").find('li').removeClass('eduClsActivePage6');
      $('<li id="liPage6_'+(nextTab+1)+'" onclick="selectCurrTab_6(this,event)" role="presentation" class="nav-item eduClsPage6 eduClsActivePage6"><a role="tab" aria-selected="true" aria-setsize="2" aria-posinset="1" target="_self" href="#" class="nav nav-tabs " id="tabPage6__'+nextTab+'"><button class="close closeTab" type="button" onclick="deleteTab6(this)">×</button><label>Ref '+(nextTab+1)+'</label></a></li>').appendTo('#tabs_6');
      
      $('<div role="tabpanel" tabindex="-1" aria-hidden="false" class="lcurrDivClsPage6_ tab-pane active card-body" id="tabPage6'+(nextTab+1)+'" aria-labelledby="__BVID__177___BV_tab_button__"><div class="form-group "><div class="form-group "><label for="reference" id="referenceName"><b>Reference Name</b></label> <input type="text" class="form-control" placeholder="Enter Reference Name" name="reference" required=""></div><div class="form-group "><label for="details"><b>Contact Details</b></label><input type="text" class="form-control" placeholder="Enter Contact Details" name="details" required=""></div><div class="form-group "><label for="association"><b>Type of Association</b></label><input type="text" class="form-control" placeholder="Enter Type of Association" name="association" required=""></div></div>').appendTo('#tab6Content');
}
      $('#liPage6_'+(nextTab+1)).trigger('click');

scrolltoDiv("tab6Content");
      }
      function selectCurrTab_6(pthis,pevent)
      {
      	var ltabId = $(pthis).attr('id');
      	ltabId = ltabId.split('_')[1];
      $('.eduClsPage6').removeClass('eduClsActivePage6');
      
      	$('.lcurrDivClsPage6_').addClass('sno');
      	//$('#tab'+ltabId).removeClass('sno');
	$('#tabPage6'+ltabId).removeClass('sno');
      $(pthis).addClass('eduClsActivePage6');
      }
function scrolltoDiv(pid)
{
	$('html,body').animate({
       	 scrollTop: $("#"+pid).offset().top
    	}, 'slow');
}



function deleteTab(pthis)
{
	var delRow;
	$.each($("#tabs").find('li'), function( index, value ) {
	  if($("#"+$("#tabs").find('li')[index].id).hasClass("eduClsActive")){
		delRow=$("#tabs").find('li')[index].id.slice(-1);
		}
	});
	if($("#tabs").find('li').length>1){
		$("#liTab_"+delRow).remove();
		$("#tab"+delRow).remove();
		var k=$("#tabs").find('li')[0].id.slice(-1);
		$("#liTab_"+k).trigger('click');
	}
}
function deleteTab2(pthis)
{
/*var delRow=$("#tabs_2").find('li').length;
if(delRow>1){
if($("#liPage3_"+delRow).hasClass('eduClsActivePage3')){
$("#liPage3_"+(delRow-1)).trigger('click');
}
$("#liPage3_"+delRow).remove();
$("#tab"+delRow).remove();
}*/
var delRow;
	$.each($("#tabs_2").find('li'), function( index, value ) {
	  if($("#"+$("#tabs_2").find('li')[index].id).hasClass("eduClsActivePage3")){
		delRow=$("#tabs_2").find('li')[index].id.slice(-1);
		}
	});
	if($("#tabs_2").find('li').length>1){
		$("#liPage3_"+delRow).remove();
		$("#tabs_2"+delRow).remove();
		var k=$("#tabs_2").find('li')[0].id.slice(-1);
		$("#liPage3_"+k).trigger('click');
	}
}
function deleteTab3(pthis)
{
/*var delRow=$("#tabs_3").find('li').length;
if(delRow>1){
if($("#liTab2Page3_"+delRow).hasClass('eduClsActivePage3Tab2')){
$("#liTab2Page3_"+(delRow-1)).trigger('click');
}
$("#liTab2Page3_"+delRow).remove();
$("#tab"+delRow).remove();
}*/
var delRow;
	$.each($("#tabs_3").find('li'), function( index, value ) {
	  if($("#"+$("#tabs_3").find('li')[index].id).hasClass("eduClsActivePage3Tab2")){
		delRow=$("#tabs_3").find('li')[index].id.slice(-1);
		}
	});
	if($("#tabs_3").find('li').length>1){
		$("#liTab2Page3_"+delRow).remove();
		$("#tabs_3"+delRow).remove();
		var k=$("#tabs_3").find('li')[0].id.slice(-1);
		$("#liTab2Page3_"+k).trigger('click');
	}
}
function deleteTab4(pthis)
{
/*var delRow=$("#tabs_4").find('li').length;
if(delRow>1){
if($("#liTab3Page3_"+delRow).hasClass('eduClsActivePage3Tab3')){
$("#liTab3Page3_"+(delRow-1)).trigger('click');
}
$("#liTab3Page3_"+delRow).remove();
$("#tab"+delRow).remove();
}*/
var delRow;
	$.each($("#tabs_4").find('li'), function( index, value ) {
	  if($("#"+$("#tabs_4").find('li')[index].id).hasClass("eduClsActivePage3Tab3")){
		delRow=$("#tabs_4").find('li')[index].id.slice(-1);
		}
	});
	if($("#tabs_4").find('li').length>1){
		$("#liTab3Page3_"+delRow).remove();
		$("#tabs_4"+delRow).remove();
		var k=$("#tabs_4").find('li')[0].id.slice(-1);
		$("#liTab3Page3_"+k).trigger('click');
	}
}
function deleteTab5(pthis)
{
	/*var delRow=$("#tabs_5").find('li').length;
	if(delRow>1){
		if($("#liTab2Page4_"+delRow).hasClass('eduClsActivePage4Tab2')){
			$("#liTab2Page4_"+(delRow-1)).trigger('click');
		}
		$("#liTab2Page4_"+delRow).remove();
		$("#tab"+delRow).remove();
	}*/
var delRow;
	$.each($("#tabs_5").find('li'), function( index, value ) {
	  if($("#"+$("#tabs_5").find('li')[index].id).hasClass("eduClsActivePage4Tab2")){
		delRow=$("#tabs_5").find('li')[index].id.slice(-1);
		}
	});
	if($("#tabs_5").find('li').length>1){
		$("#liTab2Page4_"+delRow).remove();
		$("#tabs_5"+delRow).remove();
		var k=$("#tabs_5").find('li')[0].id.slice(-1);
		$("#liTab2Page4_"+k).trigger('click');
	}
}
function deleteTab6(pthis)
{
	/*var delRow=$("#tabs_6").find('li').length;
	if(delRow>1){
		if($("#liPage6_"+delRow).hasClass('eduClsActivePage6')){
			$("#liPage6_"+(delRow-1)).trigger('click');
		}
		$("#liPage6_"+delRow).remove();
		$("#tab"+delRow).remove();
	}*/
var delRow;
	$.each($("#tabs_6").find('li'), function( index, value ) {
	  if($("#"+$("#tabs_6").find('li')[index].id).hasClass("eduClsActivePage6")){
		delRow=$("#tabs_6").find('li')[index].id.slice(-1);
		}
	});
	if($("#tabs_6").find('li').length>1){
		$("#liPage6_"+delRow).remove();
		$("#tabs_6"+delRow).remove();
		var k=$("#tabs_6").find('li')[0].id.slice(-1);
		$("#liPage6_"+k).trigger('click');
	}
}

function educationGap(pthis){
	if ($(pthis)[0].innerText=="YES") { 
		$("#educationGap").removeClass("sno");
		$("#eduReason").removeClass("sno");
		addnew_3();
	}
	else{
		$("#educationGap").addClass("sno");
		$("#eduReason").addClass("sno");
	}
}
function workExperience(pthis){
	if ($(pthis)[0].innerText=="YES") { 
		$("#workExperience").removeClass("sno");
		$("#releventWork").removeClass("sno");
		addnew_2();
	}
	else{
		$("#workExperience").addClass("sno");
		$("#releventWork").addClass("sno");
	}
}

