import emailjs from 'emailjs-com';
exports.handler =async event => {
   
    const bob ={
        name:'yaako'
    }
    emailjs.send('gmail','template_kmmjAIKP',bob, process.env.REACT_APP_EMAILJS_ID).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      
      
      // bring up confirmation page
          this.props.foo();

      
  }
  
