function openNav() {
    document.getElementById("mySidenav").style.width = "20vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  $(document).ready(function(){
    $('#one-tab').click();
    $('#one-tab-mobile').click();
    // showModal('interest');
  });
  $('#one-tab-mobile').trigger( "click" );
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
  
  
  function showModal(type){
    if (type == 'contact'){
      document.getElementById("ModalLabel").innerText = "Leave a Message";
      $('#Modal .modal-body').html(contact_form_body);
      $('#Modal #form-submit').text('Send Message');
      $("#Modal").modal("show");
    }
    else if (type == 'visit'){
      document.getElementById("ModalLabel").innerText = "Book a Visit";
      $('#Modal .modal-body').html(contact_form_body);
      $('#Modal #form-submit').text('Book your site visit');
      $("#Modal").modal("show");
    }
    else if(type=='brochure'){
      document.getElementById("ModalLabel").innerText = "Request for Brochure";
      $('#Modal .modal-body').html(brochure_form_body);
      $('#Modal #form-submit').text('Get Brochure');
      $("#Modal").modal("show");

    }else{
      document.getElementById("ModalLabel").innerText = "Register your Interest";
      $('#Modal .modal-body').html(interest_form_body);
      $('#Modal #form-submit').text('Register');
      $("#Modal").modal("show");
    }
  }