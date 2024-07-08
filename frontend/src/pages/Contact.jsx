import Button from "../components/Button"
import Input from "../components/input"
import Textarea from "../components/Textarea"

function Contact() {
  return (
    <section>
<div className="px-4 mx-auto max-w-screen-md">
  <h2 className="heading text-center">Contact us</h2>
  <p className="mb-8 lg:mb-16 font-light text-center text_para">
    got a techinical issue? want to send a feedback about a beta feature? feel free to let us know
  </p>
  <form action="" className='space-y-8'>
    <div>
      <label htmlFor="email" className='email_label'>Your email</label>
      <Input type="email" name="" id="email" className='form_input mt-1' placeHolder='example@gmail.com'/>
    </div>
    <div>
      <label htmlFor="subject" className='form_label'>Subject</label>
      <Input type="text"
       name="" id="subject" className='form_input mt-1' placeholder='let us know how we can help you'/>
    </div>
    <div className='sm:col-span-2'>
      <label htmlFor="message" className='form_label'>Your Message</label>
      <Textarea rows='6'
       type='text' 
       id="message"
       className='form_input mt-1' placeHolder='leave a comment...'/>
    </div>
    <Button type="submit" className='btn rounded sm:w-fit' name='submit'/>
  </form>
</div>
    </section>
  )
}

export default Contact