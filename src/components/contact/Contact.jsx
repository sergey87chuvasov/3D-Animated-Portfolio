import { useRef } from 'react';
import './Contact.css';
import { motion, useInView } from 'motion/react';

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const form = useRef();
  const isInView = useInView(ref, { margin: '-200px' });
  return (
    <div className='contact' ref={ref}>
      <div className='cSection'>
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? 'animate' : 'initial'}
        >
          <motion.h1 variants={listVariant} className='cTitle'>
            Let's keep in touch
          </motion.h1>
          <motion.div variants={listVariant} className='formItem'>
            <label>Name</label>
            <input type='text' name='user_username' placeholder='John Doe' />
          </motion.div>
          <motion.div variants={listVariant} className='formItem'>
            <label>Email</label>
            <input
              type='email'
              name='user_email'
              placeholder='john@gmail.com'
            />
          </motion.div>
          <motion.div variants={listVariant} className='formItem'>
            <label>Message</label>
            <textarea
              rows={10}
              name='user_message'
              placeholder='Write your message...'
            ></textarea>
          </motion.div>
          <motion.button variants={listVariant} className='formButton'>
            Send
          </motion.button>
        </motion.form>
      </div>
      <div className='cSection'>SVG</div>
    </div>
  );
};

export default Contact;
