import React from 'react'
import { assets, footerLinks } from '../assets/greencart_assets/assets'

const Footer = () => {
  return (
    <div className='mt-24 bg-primary/10 px-6 md:px-16 lg:px-24 xl:px-32 py-12'>
      <div className='flex flex-col md:flex-row justify-between gap-10 py-10'>

       
        <div className='max-w-md'>
          <img src={assets.logo} alt="logo" className='w-24 mb-4' />
          <p className='text-gray-700'>
            We deliver fresh groceries and snacks straight to your door.
            Trusted by thousands, we aim to make your shopping experience
            simple and affordable.
          </p>
        </div>

        <div className='flex flex-wrap gap-10'>
          {footerLinks.map((footer, index) => (
            <div key={index}>
              <h3 className='font-bold mb-3'>{footer.title}</h3>
              {footer.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className='block text-gray-600 hover:text-primary mb-2'
                >
                  {link.text}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="py-6 text-center text-sm md:text-base text-gray-500/80">
        Designed By <a href='' className='underline'>Nirdesh Joshi</a>
      </p>
    </div>
  )
}

export default Footer
