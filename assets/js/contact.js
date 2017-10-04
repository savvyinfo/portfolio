$(document).ready(function() {

	$('#contact-form').submit(function() {
		
		if($('#contact-form').hasClass('clicked')){
			return false;
		}
		
		$('#contact-form').addClass('clicked');
		
		var buttonCopy = $('#contact-form button').html(),
			errorMessage = $('#contact-form button').data('error-message'),
			sendingMessage = $('#contact-form button').data('sending-message'),
			okMessage = $('#contact-form button').data('ok-message'),
			hasError = false;
		
		$('#contact-form .error-message').remove();
		
		$('.requiredField').each(function() {
			if($.trim($(this).val()) == '') {
				var errorText = $(this).data('error-empty');
				$(this).parents('.controls').append('<span class="error-message" style="display:none;">'+errorText+'.</span>').find('.error-message').fadeIn('fast');
				$(this).addClass('inputError');
				hasError = true;
			} else if($(this).is("input[type='email']") || $(this).attr('name')==='email') {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test($.trim($(this).val()))) {
					var invalidEmail = $(this).data('error-invalid');
					$(this).parents('.controls').append('<span class="error-message" style="display:none;">'+invalidEmail+'.</span>').find('.error-message').fadeIn('fast');
					$(this).addClass('inputError');
					hasError = true;
				}
			}
		});
		
		if(hasError) {
			$('#contact-form button').html('<i class="fa fa-times"></i>'+errorMessage);
			setTimeout(function(){
				$('#contact-form button').html(buttonCopy);
				$('#contact-form').removeClass('clicked');
			},2000);
		}
		else {
			$('#contact-form button').html('<i class="fa fa-spinner fa-spin"></i>'+sendingMessage);
			
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$('#contact-form button').html('<i class="fa fa-check"></i>'+okMessage);
				setTimeout(function(){
					$('#contact-form button').html(buttonCopy);
				$('#contact-form').removeClass('clicked');
				},2000);
				
				$('#contact-form')[0].reset();
			});
		}
		
		return false;	
	});

	var telephone_1 = ' 949-';
	var telephone_2 = '878-';
	var telephone_3 = '6967';
	
    $('#telephone-all').append(telephone_1, telephone_2, telephone_3);


    $(function() {
        $('a[href^="mailto:"]').each(function() {
            this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
            // Remove this line if you don't want to set the email address as link text:
            this.innerHTML = this.href.replace('mailto:', '');
        });
    });

});