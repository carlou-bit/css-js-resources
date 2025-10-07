$(document).ready(objectfit);
$(window).resize(objectfit);

function objectfit() {
	objectFitImages('img.object-fit-img');
};

$(document).ready(mySetupFunction);
$(window).resize(mySetupFunction);
$(window).scroll(mySetupFunction);

function mySetupFunction() {
			var value = $(window).scrollTop();
			var h = 200;
			var toph = $("#header .topbox").innerHeight();
	        var w = $(window).width();
	if($(window).scrollTop() > toph){
		$("#header .hmainbox").addClass("active");
		$(".maincontainer").addClass("active");
	}else{
		$("#header .hmainbox").removeClass("active");
		$(".maincontainer").removeClass("active");
	}
	
	if($(window).width() < 1280){
		$('.menu.hide').addClass("min");
	}else{
		$('.menu.hide').removeClass("min");
	}
	
	if($(window).width() < 769){
		$('a.anklink').off('click');

	}else{
		$('a.anklink').off('click');
	}
	
	$('a.anklink[href*="#"]').on("click",function() {
		if($(window).width() < 769){
			$("#header ul").removeClass("active");
		}
      var speed = 1000, 
            href = $(this).prop("href"), 
            hrefPageUrl = href.split("#")[0],
            currentUrl = location.href, 
            currentUrl = currentUrl.split("#")[0]; 
        if(hrefPageUrl == currentUrl){
            href = href.split("#");
            href = href.pop();
            href = "#" + href;
            var target = $(href == "#" || href == "" ? 'html' : href),
                position = target.offset().top;
           $('body,html').animate({
                scrollTop: position
            }, speed, "easeInOutQuint", function() {
		console.log("scrolleaseing");
            });
 
            return false;
        }
 
    });
	
	//halfbox
	$(".halfbox").width($("body").width() / 2);
};


// 問い合わせ
$(document).ready(function() {

jQuery(document).ready(function ($) {
    var parentSelect = $('#parent_select'); // 親セレクトボックス
    var childRow = $('.child-row'); // 子の行
    var errorMessage = $('<p style="display: none;font-size:1.4rem;margin-top:-10px;">ご利用のサービス名を選択してください。</p>'); // エラーメッセージ

    // 初期状態でエラーメッセージを `<td>` 内に追加
    childRow.find('td:last-child').append(errorMessage);

    // 親セレクトボックスの変更イベント
    parentSelect.on('change', function () {
        var selectedValue = $(this).val();

        if (!selectedValue) {
            // 未選択の場合はエラーメッセージを表示し、子セレクトを非表示
            errorMessage.show();
            $('#parent_select1, #parent_select2, #parent_select3').hide().prop('disabled', true);
        } else {
            // 選択された場合はエラーメッセージを非表示し、該当する子セレクトを表示
            errorMessage.hide();
            $('#parent_select1, #parent_select2, #parent_select3').hide().prop('disabled', true);

            // 選択値に応じて該当の子セレクトを表示
            if (selectedValue === 'SOKUYAKUオンライン診療/服薬指導') {
                $('#parent_select1').show().prop('disabled', false);
            } else if (selectedValue === 'SOKUYAKUオンラインクリニック（オーロラクリニック）') {
                $('#parent_select2').show().prop('disabled', false);
            } else if (selectedValue === 'SOKUYAKUウェルネス（漢方、定期購入）') {
                $('#parent_select3').show().prop('disabled', false);
            }
        }
    });

    // 初期状態チェック
    if (!parentSelect.val()) {
        errorMessage.show();
    }
});


/*
    var parentSelect = document.getElementById('parent_select');
    var childSelect = document.getElementById('child_select');
    var childRow = document.querySelector('.child-row'); // <tr>の要素を取得

    // 子セレクトボックスを初期状態でグレーアウトおよび非表示
    childSelect.disabled = true;
    if (childRow) {
        childRow.style.display = 'none'; // 初期状態で非表示
    }

    if (parentSelect && childSelect && childRow) { // セレクトボックスおよび行が存在する場合のみ処理
        var childOptions = {
            "SOKUYAKUオンライン診療/服薬指導": [
                "予約について",
                "配送について",
                "お支払いについて",
                "退会について",
                "その他お問い合わせ"
            ],
            "SOKUYAKUオンラインクリニック（オーロラクリニック）": [
                "定期コースの休止について",
                "定期コースの解約について",
                "定期コースの内容・配送間隔について",
                "診察予約について",
                "個人情報の変更について",
                "その他お問い合わせ"
            ],
            "SOKUYAKUウェルネス": [
                "漢方薬（防風通聖散など）",
                "その他",
            ]
        };

        parentSelect.addEventListener('change', function () {
            var selectedValue = this.value;

            // 子セレクトボックスの選択肢をクリアし、グレーアウトにする
            childSelect.innerHTML = '<option value="">サービス名を選択してください</option>';
            childSelect.disabled = true;

            // 親セレクトが未選択または「ウェルネス」または「その他」の場合、子セレクトボックスを含む行全体を非表示にする
            if (selectedValue === "" || selectedValue === "その他") {
                childRow.style.display = 'none'; // 行を非表示にする
            } else {
                // 親セレクトがそれ以外の場合、行を表示して子セレクトの選択肢を追加
                childRow.style.display = ''; // 行を表示
                if (selectedValue && childOptions[selectedValue]) {
                    var options = childOptions[selectedValue];
                    options.forEach(function (option) {
                        var newOption = document.createElement('option');
                        newOption.value = option;
                        newOption.text = option;
                        childSelect.appendChild(newOption);
                    });
                    // 子セレクトボックスを有効化
                    childSelect.disabled = false;
                }
            }
        });
    } else {
        console.error("親または子のセレクトボックス、または行が見つかりません。");
    }*/

    // 送信処理
     $('#mw_wp_form_mw-wp-form-47983 form').on('submit', function (e) {
        var $submitButton = $(this).find('.btn01[type="submit"]');
        if ($submitButton.prop('disabled')) {
            e.preventDefault(); 
            return false;
        }

        $submitButton.prop('disabled', true).text('送信中...');

    });
});




$(document).ready(function(){
	$(function(){
	var id = $("body").attr('id');
	if(id =="top"){
		setTimeout(function(){
			$(".mainbox .innerbox").addClass("show");
		},100);
		setTimeout(function(){
			$(".mainbox .main_ph").addClass("show");
		},250);
		setTimeout(function(){
			$(".mainbox .anbbox").addClass("show");
		},300);
	}
	else if(id="forClinic"){
		setTimeout(function(){
			$(".mainbox .innerbox .txcont").addClass("show");
		},200);
		setTimeout(function(){
			$(".mainbox .innerbox .phbox").addClass("show");
		},350);

	}
	else if(id="forPharmacy"){
		setTimeout(function(){
			$(".mainbox .innerbox .txcont").addClass("show");
		},200);
		setTimeout(function(){
			$(".mainbox .innerbox .phbox").addClass("show");
		},350);
	}
	});

	$(".menu").on('click', function(){
		$(".menu-trigger",this).toggleClass("active");
		$("#header ul").toggleClass("active");
		return false;
	});
});


( function( $ ) {
  var scrollEnd = $('#footer').offset().top - 500;
  $(document).scroll(function(){
  	  if ($(this).scrollTop() > 100 && $(this).scrollTop() < scrollEnd) {
  	    $('.floating-banner').fadeIn();
  	  } else {
  	    $('.floating-banner').fadeOut();
  	  }
  });
} )( jQuery );


( function( $ ) {
$(document).ready(function(){
	$('#faq .faqbox .qbox').on('click', function(){
        $(this).toggleClass("active");
		$(this).next().slideToggle();
    });

});
} )( jQuery );

( function( $ ) {
$(document).ready(function(){
$('#medicine-detail .infobox .mainph img').hide();		
$('#medicine-detail .infobox .mainph img').eq(0).show();
    $('#medicine-detail .infobox .phthumb li').each(function(e){
		$(this).mouseover(function(){
			$('#medicine-detail .infobox .mainph img').hide();		
			$('#medicine-detail .infobox .mainph img').eq(e).show();
			
		});
    });
});
} )( jQuery );

( function( $ ) {
$(document).ready(function(){
$('#clinic .infobox .mainph img').hide();		
$('#clinic .infobox .mainph img').eq(0).show();
    $('#clinic .infobox .phthumb li').each(function(e){
		$(this).mouseover(function(){
			$('#clinic .infobox .mainph img').hide();		
			$('#clinic .infobox .mainph img').eq(e).show();
			
		});
    });
});
} )( jQuery );

/*clinic_pharmacy_toptab*/
( function( $ ) {
$(document).ready(function(){
	$('#for_cp_cont .btnbox .btn').on("click",function() {
		$('#for_cp_cont .btnbox .btn').removeClass("active");
		$(this).addClass("active");
		
		var cl = $(this).attr("data");
		$('#for_cp_cont ul').each(function(i,e) {
  			if($(e).hasClass(cl)){
  				$(e).fadeIn("slow");
  			}else{
  				$(e).hide();
  			}
		});
	});
});
} )( jQuery );

( function( $ ) {
$(document).ready(function(){
	$('.matchheight').matchHeight();
});
} )( jQuery );


/* search */
$(document).ready(function(){
    $("#searchform,#searchform_sp").submit(function () {
    	let slug = location.href;
    	if(slug.indexOf('clinic') !== -1) {
    		slug = '/clinic/';
    	}else if(slug.indexOf('pharmacy') !== -1) {
			slug = '/pharmacy/';
    	}
    	if($(this).find('[name="s"]').val()==""){
    		if($(this).find('[name="area"]').val()==""){
    			if($(this).find('[name="cate"]').val()==""||$(this).find('[name="cate"]').val()===undefined){
					if($(this).find('.syozyo[name="cate[]"]').val()==""){
						if($(this).find('.kamoku[name="cate[]"]').val()!=""){
							window.location.href = slug+'treatment/'+$(this).find('.kamoku[name="cate[]"]').val();
							return false;
						}
					}else{
						if($(this).find('.kamoku[name="cate[]"]').val()==""){
							window.location.href = slug+'treatment/'+$(this).find('.syozyo[name="cate[]"]').val();
							return false;
						}
					}
    			}else{
    				window.location.href = slug+'treatment/'+$(this).find('[name="cate"]').val();
    				return false;
    			}
    		}else{
    			if($(this).find('[name="cate"').val()==""||$(this).find('[name="cate"]').val()===undefined){
    				if($(this).find('[name="cate[]"').val()==""||$(this).find('[name="cate[]"]').val()===undefined){
    					console.log(slug+'area/'+todohuken(pref,$(this).find('[name="area"]').val()));
    					window.location.href = slug+'area/'+todohuken(pref,$(this).find('[name="area"]').val());
    					return false;
    				}
    			}else{
    				//window.location.href = location.pathname+'area/'+$(this).find('[name="area"]').val()+'/'+$(this).find('[name="cate"]').val();//7の対応
    				//return false;
    			}
    		}
    	}
    });
});

/* スムーススクロール */
var headerHeight = $('#header').outerHeight();
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top ;
    $('body,html').stop().animate({scrollTop:position}, 300);
    return false;
});



/* banner */
$(document).ready(function(){
	if ($(this).scrollTop() > 100) {
	    //フェードインで表示
	    $('.over_banner.active').fadeIn();
	}
    $(window).scroll(function () {
        //100pxスクロールしたら
        if ($(this).scrollTop() > 100) {
            //フェードインで表示
            $('.over_banner.active').fadeIn();
        } else {
            $('.over_banner.active').fadeOut();
        }
    });
    //ここからクリックイベント
    $('.banner_batu').click(function () {
    	event.preventDefault();
        $('.over_banner').hide();
        $('.over_banner').removeClass('active');
    });
});


/* app link */
$(document).ready(function(){
/* ユーザーエージェントの文字列を取得 */
var useragent = window.navigator.userAgent.toLowerCase();
/* OSごとの条件分岐 */
/*if (useragent.indexOf('iphone') != -1 || useragent.indexOf('ipad') != -1 || useragent.indexOf('macintosh') != -1) {
    $('.over_banner_main.pc_none').attr('href','https://apps.apple.com/jp/app/sokuyaku/id1550447276')
}*/
});

const todohuken = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value)
}

const pref = {"hokkaido":"北海道",
			"aomori":"青森県",
			"iwate":"岩手県",
			"miyagi":"宮城県",
			"akita":"秋田県",
			"yamagata":"山形県",
			"fukushima":"福島県",
			"ibaraki":"茨城県",
			"tochigi":"栃木県",
			"gunma":"群馬県",
			"saitama":"埼玉県",
			"chiba":"千葉県",
			"tokyo":"東京都",
			"kanagawa":"神奈川県",
			"niigata":"新潟県",
			"toyama":"富山県",
			"ishikawa":"石川県",
			"fukui":"福井県",
			"yamanashi":"山梨県",
			"nagano":"長野県",
			"gifu":"岐阜県",
			"shizuoka":"静岡県",
			"aichi":"愛知県",
			"mie":"三重県",
			"shiga":"滋賀県",
			"kyoto":"京都府",
			"osaka":"大阪府",
			"hyogo":"兵庫県",
			"nara":"奈良県",
			"wakayama":"和歌山県",
			"tottori":"鳥取県",
			"shimane":"島根県",
			"okayama":"岡山県",
			"hiroshima":"広島県",
			"yamaguchi":"山口県",
			"tokushima":"徳島県",
			"kagawa":"香川県",
			"ehime":"愛媛県",
			"kochi":"高知県",
			"fukuoka":"福岡県",
			"saga":"佐賀県",
			"nagasaki":"長崎県",
			"kumamoto":"熊本県",
			"oita":"大分県",
			"miyazaki":"宮崎県",
			"kagoshima":"鹿児島県",
			"okinawa":"沖縄県"
		};


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/**
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = '0.7.2';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // use on or bind where supported
    var on = $.fn.on ? 'on' : 'bind';

    // update heights on load and resize events
    $(window)[on]('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window)[on]('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});

$(function() {
	$(".sp_searchhead").on('click', function(){
		$(this).toggleClass("active");
		$(this).next().slideToggle();
	});

	/* clinic_prefectures */
	$('.cpref_list').on('click', function(e){
		var wid = $(window).width();
	  if (wid <= 768) {
		  $(this).toggleClass('open');
		  $(this).find('.cpref_l_body').slideToggle();
	　}
	});

	/* popup */
	$('.searchbox_select.syozyo').on('click', function(e){
		$('.popup_search_box.syozyo').show();
	});
	$('.searchbox_select.area').on('click', function(e){
		$('.popup_search_box.area').show();
	});
	$('.searchbox_select.kamoku').on('click', function(e){
		$('.popup_search_box.kamoku').show();
	});

	/* popup close btn*/
	$('.ps_btn.btn1').on('click', function(e){
		$('.popup_search_box.syozyo').hide();
		$('.searchbox_select.syozyo').text('症状を選択');
		$(".searchbox_hide_input.syozyo").val("");
	});
	$('.ps_btn.btn2').on('click', function(e){
		$('.popup_search_box.area').hide();
		$('.searchbox_select.area').text('すべてのエリア');
		$(".searchbox_hide_input.area").val("");
	});
	$('.ps_btn.btn3').on('click', function(e){
		$('.popup_search_box.kamoku').hide();
		$('.searchbox_select.kamoku').text('全ての診療科目');
		$(".searchbox_hide_input.kamoku").val("");
	});

	/* popup select*/
	$('.syozyo .ss_link.ps_link').on('click', function(e){
		$('.popup_search_box.syozyo').hide();
		$('.searchbox_select.syozyo').text($(this).text());
		$(".searchbox_hide_input.syozyo").val($(this).data('kamoku'));
	});
	$('.area .sa_child').on('click', function(e){
		$('.popup_search_box.area').hide();
		$('.searchbox_select.area').text($(this).text());
		$(".searchbox_hide_input.area").val($(this).text());
	});
	$('.kamoku .sk_child').on('click', function(e){
		$('.popup_search_box.kamoku').hide();
		$('.searchbox_select.kamoku').text($(this).text());
		$(".searchbox_hide_input.kamoku").val($(this).text());
	});

	/* footer */
	$('.sa_parent').on('click', function(e){
		if(!$(this).parent().hasClass('open')){
			$('.sa_box').slideUp();
			$('.sa_item').removeClass('open');
			$(this).parent().children('.sa_box').slideDown();
			$(this).parent().addClass('open');
		}else{
			$('.sa_box').slideUp();
			$('.sa_item').removeClass('open');
		}
	});
	$('.sk_parent').on('click', function(e){
		if(!$(this).parent().hasClass('open')){
			$('.sk_box').slideUp();
			$('.sk_item').removeClass('open');
			$(this).parent().children('.sk_box').slideDown();
			$(this).parent().addClass('open');
		}else{
			$('.sk_box').slideUp();
			$('.sk_item').removeClass('open');
		}
	});

	$('.s_btn').on('click', function(e){
		if(!$(this).parent().hasClass('open')){
			$('.search_cate_wrap .s_search_content').slideUp();
			$('.search_cate_wrap').removeClass('open');
			$(this).next().slideDown();
			$(this).parent().addClass('open');
		}else{
			$('.search_cate_wrap .s_search_content').slideUp();
			$('.search_cate_wrap').removeClass('open');
		}
	});

	/* top scroll */
	$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".top_scroll").fadeIn();
    } else {
      $(".top_scroll").fadeOut();
    }
  });

	$(".top_scroll").click(function () {
    $('body, html').animate({
        scrollTop: 0
    }, 500);
  });

});

/*! npm.im/object-fit-images 3.2.3 */
var objectFitImages = function() {
    "use strict";
    function t(t, e) {
        return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
    }
    function e(t) {
        if (t.srcset && !m && window.picturefill) {
            var e = window.picturefill._;
            t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                reselect: !0
            }),
            t[e.ns].curSrc || (t[e.ns].supported = !1,
            e.fillImg(t, {
                reselect: !0
            })),
            t.currentSrc = t[e.ns].curSrc || t.src
        }
    }
    function i(t) {
        for (var e, i = getComputedStyle(t).fontFamily, r = {}; null !== (e = l.exec(i)); )
            r[e[1]] = e[2];
        return r
    }
    function r(e, i, r) {
        var n = t(i || 1, r || 0);
        p.call(e, "src") !== n && b.call(e, "src", n)
    }
    function n(t, e) {
        t.naturalWidth ? e(t) : setTimeout(n, 100, t, e)
    }
    function c(t) {
        var c = i(t)
          , o = t[a];
        if (c["object-fit"] = c["object-fit"] || "fill",
        !o.img) {
            if ("fill" === c["object-fit"])
                return;
            if (!o.skipTest && g && !c["object-position"])
                return
        }
        if (!o.img) {
            o.img = new Image(t.width,t.height),
            o.img.srcset = p.call(t, "data-ofi-srcset") || t.srcset,
            o.img.src = p.call(t, "data-ofi-src") || t.src,
            b.call(t, "data-ofi-src", t.src),
            t.srcset && b.call(t, "data-ofi-srcset", t.srcset),
            r(t, t.naturalWidth || t.width, t.naturalHeight || t.height),
            t.srcset && (t.srcset = "");
            try {
                s(t)
            } catch (t) {
                window.console && console.warn("https://bit.ly/ofi-old-browser")
            }
        }
        e(o.img),
        t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")',
        t.style.backgroundPosition = c["object-position"] || "center",
        t.style.backgroundRepeat = "no-repeat",
        t.style.backgroundOrigin = "content-box",
        /scale-down/.test(c["object-fit"]) ? n(o.img, function() {
            o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
        }) : t.style.backgroundSize = c["object-fit"].replace("none", "auto").replace("fill", "100% 100%"),
        n(o.img, function(e) {
            r(t, e.naturalWidth, e.naturalHeight)
        })
    }
    function s(t) {
        var e = {
            get: function(e) {
                return t[a].img[e || "src"]
            },
            set: function(e, i) {
                return t[a].img[i || "src"] = e,
                b.call(t, "data-ofi-" + i, e),
                c(t),
                e
            }
        };
        Object.defineProperty(t, "src", e),
        Object.defineProperty(t, "currentSrc", {
            get: function() {
                return e.get("currentSrc")
            }
        }),
        Object.defineProperty(t, "srcset", {
            get: function() {
                return e.get("srcset")
            },
            set: function(t) {
                return e.set(t, "srcset")
            }
        })
    }
    function o(t, e) {
        var i = !h && !t;
        if (e = e || {},
        t = t || "img",
        f && !e.skipTest || !d)
            return !1;
        "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length"in t || (t = [t]);
        for (var r = 0; r < t.length; r++)
            t[r][a] = t[r][a] || {
                skipTest: e.skipTest
            },
            c(t[r]);
        i && (document.body.addEventListener("load", function(t) {
            "IMG" === t.target.tagName && o(t.target, {
                skipTest: e.skipTest
            })
        }, !0),
        h = !0,
        t = "img"),
        e.watchMQ && window.addEventListener("resize", o.bind(null, t, {
            skipTest: e.skipTest
        }))
    }
    var a = "bfred-it:object-fit-images"
      , l = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g
      , u = "undefined" == typeof Image ? {
        style: {
            "object-position": 1
        }
    } : new Image
      , g = "object-fit"in u.style
      , f = "object-position"in u.style
      , d = "background-size"in u.style
      , m = "string" == typeof u.currentSrc
      , p = u.getAttribute
      , b = u.setAttribute
      , h = !1;
    return o.supportsObjectFit = g,
    o.supportsObjectPosition = f,
    function() {
        function t(t, e) {
            return t[a] && t[a].img && ("src" === e || "srcset" === e) ? t[a].img : t
        }
        f || (HTMLImageElement.prototype.getAttribute = function(e) {
            return p.call(t(this, e), e)
        }
        ,
        HTMLImageElement.prototype.setAttribute = function(e, i) {
            return b.call(t(this, e), e, String(i))
        }
        )
    }(),
    o
}();

$(function() {
	let now_post_num = 2; // 現在表示している件数
	let get_post_num = 2; // 追加する件数

    //admin_ajaxにadmin-ajax.phpの絶対パス指定（相対パスは失敗する）
    let host_url = location.protocol + "//" + location.host;
    let admin_ajax = host_url + '/wp-admin/admin-ajax.php';

    if($('.more_review').data('max')<2){
    	$('.more_review').hide();
    }

    $(document).on("click", ".more_review", function () {

        //ajax処理。data{}のactionに指定した関数を実行、完了後はdoneに入る
        $.ajax({
            type: 'POST',
            url: admin_ajax,
            data: {
                'action' : 'my_ajax_action', //functions.phpで設定する関数名
                'get_post_num': get_post_num,
                'now_post_num': now_post_num,
            },
        })
        .done(function(data){ //my_ajax_action関数で取得したデータがdataに入る
            //.loadにデータを追加
            console.log(data);
            $('.review_list').append(data);
            let view = $('.more_review').data('view');
            let max = $('.more_review').data('max');
            if((view+get_post_num)>=max){
            	$('.more_review').hide();
            }
            $('.more_review').data('max',(view+get_post_num));
            now_post_num = now_post_num+get_post_num;
        })
        .fail(function(){
            alert('エラーが発生しました');
        })
    });

    $("form").submit(function () {
    	$('.review_submit').hide();
    	$('.load_img_wrap').show();

    	$.ajax({
    	    type: 'POST',
    	    url: admin_ajax,
    	    data: {
    	        'action' : 'review_ajax_action', //functions.phpで設定する関数名
    	        'review_post_id': $('[name="review_post_id"]').val(),
    	        'review_name': $('.review_form_input_text[name="review_name"]').val(),
    	        'sex': $('.review_form_input_radio[name="sex"]:checked').val(),
    	        'rate': $('.review_form_select[name="rate"]').val(),
    	        'review_kamoku': $('.review_form_select[name="review_kamoku"]').val(),
    	        'wait_time': $('.review_form_select[name="wait_time"]').val(),
    	        'review_title': $('.review_form_input_text[name="review_title"]').val(),
    	        'review_text': $('.review_form_textarea[name="review_text"]').val(),
    	    },
    	})
    	.done(function(data){ //my_ajax_action関数で取得したデータがdataに入る
    	    //.loadにデータを追加
    	    console.log(data);
    		$('.load_img_wrap').hide();
    		$('.success_text').fadeIn();
    		setTimeout(function() {
    	    	$('.success_text').hide();
    	    	$('.review_form_input_text[name="review_name"]').val('');
    	    	$('.review_form_input_radio[name="sex"]').prop('checked', false);
    	    	$('.review_form_select[name="rate"]').val('5');
    	    	$('.review_form_select[name="review_kamoku"]').val('');
    	    	$('.review_form_select[name="wait_time"]').val('');
    	    	$('.review_form_input_text[name="review_title"]').val('');
    	    	$('.review_form_textarea[name="review_text"]').val('');
		    	$('.review_form').slideUp();
		    	$('.review_open_btn').show();
    			$('.review_submit').show();
		    }, 2000 );
    	})
    	.fail(function(){
    	    alert('エラーが発生しました');
    	})
      return false;
    });

    $(document).on("click", ".review_open_btn", function () {
    	$('.review_form').slideDown();
    	$('.review_open_btn').hide();
    });



    $(document).on("click", ".review_f_bad_wrap.yet", function () {
    	let review_id = $(this).data('id');
    	let already = $(this).parent().data('already');
    	change_ajax($(this),review_id,'bad',already);
    });

    $(document).on("click", ".review_f_good_wrap.yet", function () {
    	let review_id = $(this).data('id');
    	let already = $(this).parent().data('already');
    	change_ajax($(this),review_id,'good',already);
    });

    function change_ajax(el,review_id,flag,already){

    	$.ajax({
    	    type: 'POST',
    	    url: admin_ajax,
    	    data: {
    	        'action' : 'change_goodbad_ajax_action',
    	        'review_id': review_id,
    	        'flag': flag,
    	        'already': already,
    	    },
    	})
    	.done(function(data){ //my_ajax_action関数で取得したデータがdataに入る
    	    //.loadにデータを追加
    	    el.parent().data('already',1);
    	    el.parent().children().removeClass('already');
    	    el.parent().children().removeClass('yet');
	    	let good_count = Number(el.parent().find('.review_f_good_wrap span').text());
	    	let bad_count = Number(el.parent().find('.review_f_bad_wrap span').text());
	    	console.log(good_count,bad_count);
    	    if(flag=="good"){
    	    	el.parent().find('.review_f_good_wrap').addClass('already');
    	    	el.parent().find('.review_f_bad_wrap').addClass('yet');
    	    	el.parent().find('.review_f_good_wrap span').text(good_count+1);
    	    	if(already==1){
    	    		el.parent().find('.review_f_bad_wrap span').text(bad_count-1);
    	    	}
    	    }else if(flag=="bad"){
    	    	el.parent().find('.review_f_bad_wrap').addClass('already');
    	    	el.parent().find('.review_f_good_wrap').addClass('yet');
    	    	el.parent().find('.review_f_bad_wrap span').text(bad_count+1);
    	    	if(already==1){
    	    		el.parent().find('.review_f_good_wrap span').text(good_count-1);
    	    	}
    	    }
    	})
    	.fail(function(){
    	    alert('エラーが発生しました');
    	})
    }
});

