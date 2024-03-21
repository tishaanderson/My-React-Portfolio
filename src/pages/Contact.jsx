import '../styles/Contact.css';
import '@emailjs/browser';

/* <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "tkX8DGWQM4n_lp3aP",
      });
   })();
</script> */

// emailjs.sendForm('contact_service', 'contact_form', this)
//                     .then(() => {
//                         console.log('SUCCESS!');
//                     }, (error) => {
//                         console.log('FAILED...', error);
//                     });


export default function Contact() {
  return (
    <div className='contact'>
      <section className="contact-box">

        <h2 class="h1-responsive font-weight-bold text-center" id='contact-me'>Contact Me :) </h2>

        <p className="text-center w-responsive mx-auto mb-5" id='contact-text'>Do you have any questions? Please do not hesitate to contact me directly. I'd love to hear from you! I will respond within 3 business days.</p>

        <div className="row" id='form-section'>
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control"></input>
                    <label for="name" className="">Your name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control"></input>
                    <label for="email" className="">Your email</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" className="form-control"></input>
                    <label for="subject" className="">Subject</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
          </div>
        </div>
      </section>
    </div>

  );
}

//ON CREATE A CONTACT FORM DOCS
// import '@emailjs/browser'

{/* <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "tkX8DGWQM4n_lp3aP",
      });
   })();
</script> */}

// emailjs.sendForm('contact_service', 'contact_form', this)
//                     .then(() => {
//                         console.log('SUCCESS!');
//                     }, (error) => {
//                         console.log('FAILED...', error);
//                     });