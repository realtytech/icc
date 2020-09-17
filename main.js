function openNav() {
    document.getElementById("mySidenav").style.width = "20vw";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function () {
    $('#one-tab').click();
    $('#one-tab-mobile').click();
    // showModal('interest');
});
$('#one-tab-mobile').trigger("click");

function openNavMobile() {
    document.getElementById("mySidenav-mobile").style.paddingTop = "60px";
    document.getElementById("mySidenav-mobile").style.height = "100vh";
}

function closeNavMobile() {
    document.getElementById("mySidenav-mobile").style.height = "0";
    document.getElementById("mySidenav-mobile").style.paddingTop = "0px";

}

contact_form_body = `
  <div class="form-row">
                            <div class="col-md-12 form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                                    data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-6 form-group">
                                <input type="email" class="form-control" name="email" id="email"
                                    placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-6 form-group">
                                <input type="text" class="form-control" name="contact" id="contactNum"
                                    placeholder="Your Contact No." data-msg="Please enter a valid contact number" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" name="subject" id="subject"
                                    placeholder="Subject" data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars of subject" />
                                <div class="validate"></div>
                            </div>
                            <div class="form-group col-md-12">
                                <textarea class="form-control" id="msg" name="msg" rows="5" data-rule="required"
                                    data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div class="validate"></div>
                            </div>
                        </div>
  
  
  `;

brochure_form_body = `
  <div class="form-row">
                            <div class="col-md-12 form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                                    data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-6 form-group">
                                <input type="email" class="form-control" name="email" id="email"
                                    placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-6 form-group">
                                <input type="text" class="form-control" name="contact" id="contactNum"
                                    placeholder="Your Contact No." data-msg="Please enter a valid contact number" />
                                <div class="validate"></div>
                            </div>
                        </div>
  
  
  `;

interest_form_body = `
  <div class="form-row">
                            <div class="col-md-12 form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                                    data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-6 form-group">
                                <input type="email" class="form-control" name="email" id="email"
                                    placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-6 form-group">
                                <input type="text" class="form-control" name="contact" id="contactNum"
                                    placeholder="Your Contact No." data-msg="Please enter a valid contact number" />
                                <div class="validate"></div>
                            </div>
                        </div>
  
  
  `;


function showModal(type) {
    if (type == 'contact') {
        document.getElementById("ModalLabel").innerText = "Leave a Message";
        $('#Modal .modal-body').html(contact_form_body);
        $('#Modal #form-submit').text('Send Message');
        $("#Modal").modal("show");
    } else if (type == 'visit') {
        document.getElementById("ModalLabel").innerText = "Book a Visit";
        $('#Modal .modal-body').html(contact_form_body);
        $('#Modal #form-submit').text('Book your site visit');
        $("#Modal").modal("show");
    } else if (type == 'brochure') {
        document.getElementById("ModalLabel").innerText = "Request for Brochure";
        $('#Modal .modal-body').html(brochure_form_body);
        $('#Modal #form-submit').text('Get Brochure');
        $("#Modal").modal("show");

    } else {
        document.getElementById("ModalLabel").innerText = "Register your Interest";
        $('#Modal .modal-body').html(interest_form_body);
        $('#Modal #form-submit').text('Register');
        $("#Modal").modal("show");
    }
}

//   Sell Do Js

var selldo_tracker_script = document.createElement("script");
var selldo_form_instance;
selldo_tracker_script.setAttribute("type", "text/javascript");
selldo_tracker_script.setAttribute("src", "//trkr.scdn1.secure.raxcdn.com/assets/t.js");
document.getElementsByTagName("head")[0].appendChild(selldo_tracker_script);
if (navigator.appName == "Microsoft Internet Explorer") {
    selldo_tracker_script.onreadystatechange = function () {
        if (this.readyState == "loaded" || this.readyState == "complete") {
            selldo_form_instance = new SellDoFormRenderer('5f5f2764923d4a24845d1af7', {
                enable_ga_ecommerce: true,
                disable_selldo_tracking: false,
                cookie_expires_in_days: 30,
                api_key: 'c64d03d6e3f7962538b248e1415aa6a2',
                ctc_api_key: 'e420c5495a9e9698a0e819a1cf284f9f',
                client_name: 'Pinkode Realty LLP',
                enable_mixpanel: false,
                mix_panel_token: '',
                boardline_number: '',
                boardline_short_code: '',
                business_hours: '0-23',
                client_offset: 330
            });
            selldojQuery(document).read(function () {
                if (typeof document.createEvent === "function") {
                    evt = document.createEvent("HTMLEvents");
                    evt.initEvent("sell_do_base_framework_ready", true, true);
                } else {
                    evt = new Event("sell_do_base_framework_ready");
                }
                document.dispatchEvent(evt);
                selldo_form_instance.options.sell_do_base_framework_ready = true;
            });
            selldo_tracker_script = null;
        }
    }
} else {
    selldo_tracker_script.onload = function () {
        selldo_form_instance = new SellDoFormRenderer('5f5f2764923d4a24845d1af7', {
            enable_ga_ecommerce: true,
            disable_selldo_tracking: false,
            cookie_expires_in_days: 30,
            api_key: 'c64d03d6e3f7962538b248e1415aa6a2',
            ctc_api_key: 'e420c5495a9e9698a0e819a1cf284f9f',
            client_name: 'Pinkode Realty LLP',
            enable_mixpanel: false,
            mix_panel_token: '',
            boardline_number: '',
            boardline_short_code: '',
            business_hours: '0-23',
            client_offset: 330
        });
        selldojQuery(document).ready(function () {
            if (typeof document.createEvent === "function") {
                evt = document.createEvent("HTMLEvents");
                evt.initEvent("sell_do_base_framework_ready", true, true);
            } else {
                evt = new Event("sell_do_base_framework_ready");
            }
            document.dispatchEvent(evt);
            selldo_form_instance.options.sell_do_base_framework_ready = true;
        });
        selldo_tracker_script = null;
    }
}

//================ Sell.do - Form Script ============================================

var form_details_5f5f27f1923d4a24985d1a90 = {
    "name": "Contact Form",
    "greeting": "",
    "thankyou_msg": "Thank you for your request. Our sales team will get back to you soon.",
    "submit_button_text": "Submit",
    "disclaimer": null,
    "fields": [{
        "display": "Name",
        "name": "sell_do[form][lead][name]",
        "id": "5f5f27f1923d4a24985d1a93",
        "required": true,
        "type": "text",
        "placeholder": "Name",
        "helper_text": "",
        "validator": "string",
        "values": [],
        "source_values": null,
        "order": 1.1,
        "srds": [],
        "multi": false
    }, {
        "display": "Email",
        "name": "sell_do[form][lead][email]",
        "id": "5f5f27f1923d4a24985d1a91",
        "required": true,
        "type": "email",
        "placeholder": "Email",
        "helper_text": "",
        "validator": "email",
        "values": [],
        "source_values": null,
        "order": 2.1,
        "srds": [],
        "multi": false
    }, {
        "display": "Phone",
        "name": "sell_do[form][lead][phone]",
        "id": "5f5f27f1923d4a24985d1a92",
        "required": true,
        "type": "phone",
        "placeholder": "Phone",
        "helper_text": "",
        "validator": "phone",
        "values": [],
        "source_values": null,
        "order": 3.1,
        "srds": [],
        "multi": false
    }, {
        "display": "Project of interest",
        "name": "sell_do[form][lead][project_id]",
        "id": "5f5f27f2923d4a24985d1a94",
        "required": true,
        "type": "select",
        "placeholder": "Select project of interest",
        "helper_text": "",
        "validator": "string",
        "values": [],
        "source_values": [{
            "id": "5f607c20c82561354c9d6c97",
            "text": "Arham Aum"
        }, {
            "id": "5f607cd9c82561333fcde651",
            "text": "Arham Brindavan"
        }],
        "order": 4.1,
        "srds": [],
        "multi": true
    }, {
        "display": "Comments",
        "name": "sell_do[form][note][content]",
        "id": "5f5f27f2923d4a24985d1a95",
        "required": false,
        "type": "text_area",
        "placeholder": "Comments",
        "helper_text": null,
        "validator": "string",
        "values": [],
        "source_values": [],
        "order": 5.1,
        "srds": [],
        "multi": false
    }],
    "form_id": "5f5f27f1923d4a24985d1a90",
    "enable_phone_verification": true,
    "enable_scheduling_widget": false
};
if (typeof document.addEventListener === 'function') {
    document.addEventListener('sell_do_base_framework_ready', function () {
        selldo_form_instance.init_form_rendering(form_details_5f5f27f1923d4a24985d1a90, false);
        return true;
    });
} else if (typeof document.attachEvent === 'function') {
    document.attachEvent('sell_do_base_framework_ready', function () {
        selldo_form_instance.init_form_rendering(form_details_5f5f27f1923d4a24985d1a90, false);
        return true;
    });
}
if (typeof selldo_form_instance !== 'undefined' && typeof selldo_form_instance.options !== 'undefined' && selldo_form_instance.options.sell_do_base_framework_ready == true) {
    selldo_form_instance.init_form_rendering(form_details_5f5f27f1923d4a24985d1a90, false);
}