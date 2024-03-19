export default function Contact() {
  return (
    <div>
      <p>
        Contact info here
      </p>
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