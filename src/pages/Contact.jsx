import Container from '../components/Container'
import Heading from '../components/Heading'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
    <Container>
      <Heading>Contact</Heading>

      <div
        className="h-4/5 flex flex-col
      items-center justify-between "
      >
        <div
          className="flex items-center
      justify-evenly w-[80%] h-[90%] max-sm:w-[80vw] max-sm:h-[70vh] mx-auto *:p-8 max-sm:*:p-4 transition-all ease-out duration-200 max-sm:flex-col"
        >
          <Link to="https://wa.me/9172440986" target="_blank">
            <div className="text-green-500   bounce-in-top cursor-pointer">
              <WhatsAppIcon sx={{ fontSize: '100px' }} />
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/saadpatil/" target="_blank">
            <div className="text-blue-700  bounce-in-top cursor-pointer">
              <LinkedInIcon sx={{ fontSize: '100px' }} />
            </div>
          </Link>
          <Link to="https://www.instagram.com/md_saa_d_7/" target="_blank">
            <div className="text-pink-500  bounce-in-top cursor-pointer">
              <InstagramIcon sx={{ fontSize: '100px' }} />
            </div>
          </Link>
          <Link to="https://github.com/saad2786" target="_blank">
            <div className="text-black   bounce-in-top cursor-pointer">
              <GitHubIcon sx={{ fontSize: '100px' }} />
            </div>
          </Link>
        </div>
        <p className="text-sm font-light text-center  max-sm:w-fit  max-sm:left-16 ">
          Copyright&copy; 2023 | Developed by Saad Patil{' '}
        </p>
      </div>  
    </Container>
  )
}
