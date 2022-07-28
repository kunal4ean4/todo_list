import React from 'react'

const Footer = () => {
    let footerStyle={
        position:"absolute",
        top:"94.6vh",
        width:"100%",
        
    }
  return (
    < footer className='text-center bg-danger ' style={footerStyle} >
    <p>Copyright &copy; workinglist.com</p>
    </footer>
  )
}

export default Footer